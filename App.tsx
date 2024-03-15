import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import axios from 'axios';
import Poke from './types/Pokemon';
import PokemonResult from './types/PokemonResult';

const baseUrlAPI = 'https://pokeapi.co/api/v2/pokemon';
const vInicial: Poke[] = [];

const App = () => {
  const [contenido, setContenido] = useState(vInicial);
  const [count, setCount] = useState(0);
  const [next, setNext] = useState("");
  const [previous, setPrevious] = useState('');


  const solicitud = async()=>{
    try {
      const result  = await axios.get(`${baseUrlAPI}`);
      if(result.data){
        const datos:PokemonResult = result.data;
        setCount(datos.count);
        setNext(datos.next);
        if(datos.previous == null){
          setPrevious('');
        }else{
          setPrevious(datos.previous as string);
        }
        setContenido(datos.results);
      }
      
    } catch (error) {
      console.log(error);
    }
  };

useEffect(()=> {
  solicitud();
}, []);

  return (
    <SafeAreaView>
      {contenido.map((p, index)=>{
        return(
          <View key={`Pokemon-${index+1}`}>
            <Text>{p.name}</Text>
          </View>
        )
      })}
    </SafeAreaView>
  );

};
export default App;