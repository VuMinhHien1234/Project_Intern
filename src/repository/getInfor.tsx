import React, {useState, useEffect} from 'react';
import {Text, SafeAreaView} from 'react-native';
const getInfor = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'cee3bd1e22msheedb98e87dec740p196316jsn6d22f5917037',
        'X-RapidAPI-Host': 'quotes-by-api-ninjas.p.rapidapi.com',
      },
    };
    fetch('https://jsonplaceholder.typicode.com/posts', options)
      .then(response => response.json())
      .then(data => {
        console.log('data', data);

        setQuote(data[0].body);
      })
      .catch(error => console.error(error));
  }, []);

  console.log('hello');
  return (
    <SafeAreaView
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      }}>
      <Text>{quote}</Text>
    </SafeAreaView>
  );
};
export default getInfor;
