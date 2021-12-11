import React, { useState} from "react";
import { ScrollView, StyleSheet, Button,  } from 'react-native';
import { useQuery } from 'react-query';

import { Text } from '../components/Text';
import colors from '../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingVertical: 10,
  },
  item: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  }

});

export const List = ({ navigation }) => {
  const [data, setData] = useState([]);

  useQuery("repoData", () =>
    fetch(
      "https://curriculo-quarkus.herokuapp.com/curriculo"
    ).then((res) => res.json()).then((res) => setData(res))
  );

  


  return (
    <ScrollView style={styles.container}>
      <Text>Nome: {data.nome}</Text>
      <Text>Idade: {data.idade}</Text>
      <Text>Experiẽncia profissional:{data.experienciaProfissional}</Text>
      <Text>Hobbies: {data.hoobiesELazer}</Text>
      
     <Button style={styles.btn}  onPress={() => navigation.navigate('Projetos')}
            title="Projetos" 
            type="clear"
            color="#941519"

      /> 
    </ScrollView>
    
  );
};
