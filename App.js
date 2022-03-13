import React from 'react';
import { ScrollView } from 'react-native';
import HeaderPhone from './components/HeaderPhone';
import MainPhone from './components/MainPhone';
import FooterPhone from './components/FooterPhone';
export default function App() {
  return (
    <ScrollView style={{backgroundColor:"black"}}>
      <HeaderPhone/>
      <MainPhone/>
      <FooterPhone/>
    </ScrollView>
  );
}