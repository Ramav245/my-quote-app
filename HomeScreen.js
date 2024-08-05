import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react';
import { Button } from 'react-native-paper';
const HomeScreen = () => {
    const [data, setData] = useState([]);
    const [randomQuote, setRandomQuote] = useState(null);

    const api_url = "https://zenquotes.io/api/quotes/";

    const getApi = async (url) => {
        try {
          const response = await fetch(url);
          const json = await response.json();
          setData(json);
        } catch (error) {
          console.error(error);
        }
      };

      const getRandomQuote = () => {
        if (data.length > 0) {
          const randomIndex = Math.floor(Math.random() * data.length);
          setRandomQuote(data[randomIndex]);
        }
      };

      useEffect(() => {
        getApi(api_url);
      }, []);


  return (
    <View style={styles.container}>
        <Text style={styles.header}> Random Quote Generator</Text>
      <View style={styles.quoteContainer}>
        {randomQuote ? (
          <Text style={styles.quote}>
            {randomQuote.q} - {randomQuote.a}
          </Text>
        ) : (
          <Text>Press the button to get a random quote</Text>
        )}
      </View>
      <Button mode="contained" title="Get Random Quote" onPress={getRandomQuote}>
        Get a Random Quote</Button>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    header:
    {
        fontSize: 25,
    },
    container: {
    marginTop: 300,
      justifyContent: 'center',  // Centers vertically
      alignItems: 'center',  // Centers horizontally
      padding: 16,
    },
    quoteContainer: {
      marginBottom: 20, // Space between text and button
      justifyContent: 'center',
      alignItems: 'center',
    },
    quote: {
      fontSize: 16,
      textAlign: 'center',
      marginVertical: 8,
    },
  });
  