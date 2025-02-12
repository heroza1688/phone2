import React from 'react'
import Pages from './components/Pages';
import Sliders from './components/Sliders';
import Item from './components/Item';
import Header from './components/Header';
import Footer from './components/Footer';


export default function page() {

  return (
    <>

    <Header/>
    <Pages/>
    <Sliders/>
    <Item/>
    <Footer/>
    
    </>
  )
}
