"use client";

import React,{ useEffect } from 'react'
import Pages from './components/Pages';
import Sliders from './components/Sliders';
import Item from './components/Item';
import Header from './components/Header';

import Videos from './components/Videos';


export default function page() {

  useEffect(() => {
    const schemaData = {
      "@context": "https://schema.org/",
  "@type": "Product",
  "name": "PG-V9 | PG-Phoneโทรศัพท์มือถือราคาถูกที่สุด PG-V9 PRO | www.mypgphone.com",
  "image": [
    "https://www.mypgphone.com/img/phone-1.jpg",
    "https://www.mypgphone.com/img/phone-1.png"
  ],
  "description": "www.mypgphone.com | PG-V9 | PG-Phoneโทรศัพท์มือถือราคาถูกที่สุด สมาร์ทโฟนรุ่นใหม่ล่าสุดPG-V9 PRO ความกว้างหน้าจอ6นิ้ว ความละเอียดหน้าจอHD",
  "brand": {
    "@type": "Brand",
    "name": "PG-Phone"
  },
  "offers": {
    "@type": "Offer",
    "url": "https://mypgphone.com/Video",
    "priceCurrency": "THB",
    "price": "1900",
    "priceValidUntil": "2025-02-18",
    "itemCondition": "https://schema.org/NewCondition",
    "availability": "https://schema.org/InStock",
    "seller": {
      "@type": "Organization",
      "name": "PG-Phone",
      "url": "https://mypgphone.com",
      "logo": "https://mypgphone.com/img/logo.png"
        }
      }
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);
  }, []);


  return (
    <>

 
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>PG-V9 | PG-Phoneโทรศัพท์มือถือราคาถูกที่สุด PG-V9 PRO | www.mypgphone.com</title>
        <meta name="description" content="www.mypgphone.com | PG-V9 | PG-Phoneโทรศัพท์มือถือราคาถูกที่สุด สมาร์ทโฟนรุ่นใหม่ล่าสุดPG-V9 PRO ความกว้างหน้าจอ6นิ้ว ความละเอียดหน้าจอHD"/>

        <meta name="keywords" content="มือถือ, สมาร์ทโฟน, ร้านขายมือถือ, ราคามือถือ, สั่งซื้อมือถือออนไลน์, ผ่อนมือถือ,PG ,PG-Phone ,PG-V9 ,PG-V9 PRO ,mypgphone.com ,PGเว็บตรง ,เว็บตรง ,PG Phone,PGPhone "/>

        <meta property="og:title" content="PG-V9 | PG-Phoneโทรศัพท์มือถือราคาถูกที่สุด PG-V9 PRO | www.mypgphone.com" />
        <meta property="og:description" content="www.mypgphone.com | PG-V9 | PG-Phoneโทรศัพท์มือถือราคาถูกที่สุด สมาร์ทโฟนรุ่นใหม่ล่าสุดPG-V9 PRO ความกว้างหน้าจอ6นิ้ว ความละเอียดหน้าจอHD"/>
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />

        <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon" />
      
        <meta property="og:image:type" content="image/jpeg"/>
        <meta property="og:image:height" content="2000"/>
        <meta property="og:image:width" content="2000"/>
        <meta property="og:image" content="https://www.mypgphone.com/img/phone-1.jpg"/>


    <Header/>
    <Videos/>
    <Pages/>
    <Sliders/>
    <Item/>
 
    
    </>
  )
}
