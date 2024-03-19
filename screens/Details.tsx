import React, { useEffect, useState } from 'react'
import {Text, View, Image, StyleSheet,SafeAreaView} from 'react-native';
import axios from 'axios';
import Poke from '../types/Pokemon';


const baseUrlAPI = 'https://pokeapi.co/api/v2/pokemon';


const Details = ({navigation, route}) => {
  const [contenido, setContenido] = useState<Poke>();
  const loadPoke = async ()=>{
    const codigo = route.params.codigo;
    const result  = await axios.get(`${baseUrlAPI}/${codigo}`);

    if(result.data){
      setContenido(result.data);
    }
  };

  useEffect(()=>{
    loadPoke();
    console.log(route.params.codigo)   
  }, [])

  return (
    <SafeAreaView>
       <Image
          style={styles.ImagePokemon}
          source={{uri: `https://raw.githubusercontent.com/PokeAPI/sprites/2a6a6b66983a97a6bdc889b9e0a2a42a25e2522e/sprites/pokemon/${route.params.codigo}.png`,}}
        />
        <Text>{contenido?.height}</Text>
        <Text>codigo</Text>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  ImagePokemon: {
      height: 76,
      width: 100,
      marginRight: 10,
  },
});
export default Details;
