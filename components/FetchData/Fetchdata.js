import React, { useEffect, useState } from 'react';
import { StyleSheet, ActivityIndicator, FlatList, Text, View } from 'react-native';

const FetchData = () => {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://www.recipepuppy.com/api/')
      .then((response) => response.json())
      .then((json) => setData(json.results))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.indicator}>
      {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text style={styles.list}>
              {item.title} - {item.ingredients}</Text>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create ({
  indicator: {
    flex: 1,
    padding: 50
  },
  list: {
    flex: 1,
    flexDirection: 'column',
    margin: 10
  }
})

export default FetchData