import React, { useState} from "react";
import {StyleSheet, FlatList,View,TouchableOpacity,Linking } from 'react-native';
import { useQuery } from 'react-query';

import colors from '../constants/colors';
import { Text } from '../components/Text';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  item: {
    paddingVertical: 20,
  },
});

export const Post = ({ route }) => {
  const [data, setData] = useState([]);

  useQuery("repoData", () =>
    fetch(
      "https://curriculo-quarkus.herokuapp.com/projetos"
    ).then((res) => res.json()).then((res) => setData(res))
  );


  return (
    <FlatList
      data={data}
      style={styles.container}
      keyExtractor={item => `${item.nome}`}
      renderItem={({ item }) => (
          <View style={styles.item}>
            <TouchableOpacity onPress={() => Linking.openURL(item.linkGithub)}>
            <Text>Nome: {item.nome}</Text>
            <Text>Linguagem: {item.linguagem}</Text>
            <Text>Duração: {item.duracao}</Text>
            </TouchableOpacity>

          </View>
      )}
    />
    
  );
};
