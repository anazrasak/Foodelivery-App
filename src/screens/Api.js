import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import { useEffect } from 'react';

const Api = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = 'https://jsonplaceholder.typicode.com/posts';

  useEffect(() => {
    fetch(url)
    .then((responce)=>responce.json())
    .then((json)=>setData(json))
    .catch((error)=>console.error(error))
    .finally(() => setLoading(false))
  }, []);

  return (
    <View style={styles.container}>
     {loading ? ( <Text>Loading...</Text> )  : (
        data.map((post)=> (
            <View>
                <Text style={styles.text}>{post.title}</Text>
            </View>
        ))
     ) }
    </View>
  );
};

export default Api;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    marginBottom: 20,
  }
});
