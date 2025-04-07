"use client"; // ทำให้เป็น Client Component

import React from "react";
import Script from "next/script";


export default function VideoPage() {
  return (
    <>
      <title> วีดีโอรีวิวโทรศัพท์มือถือ PG V9 | รีวิวสมาร์ทโฟน </title>
 <meta name="description" content="ชมรีวิวโทรศัพท์มือถือ PG V9 ที่ดีที่สุด ฟีเจอร์เด่น ประสิทธิภาพสูง รองรับทุกอุปกรณ์!" />
 <meta name="keywords" content="รีวิวโทรศัพท์ PG V9, รีวิวมือถือ, PG V9, โทรศัพท์มือถือ" />

      <body class="index-page">

  <header id="header" class="header d-flex align-items-center fixed-top">
    <div class="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

      <a href="index.html" class="logo d-flex align-items-center me-auto me-xl-0">
        <h1 class="sitename">PGPHONESHOP</h1>
      </a>

      <nav id="navmenu" class="navmenu">
        <ul>
          <li><a href="#hero" class="active">หน้าแรก</a></li>
          <li><a href="#about">เกี่ยวกับ</a></li>
          <li><a href="#features">คุณสมบัติ</a></li>
          <li><a href="#pricing">นโยบายความเป็นส่วนตัว</a></li>
      </nav>

      <a class="btn-getstarted" href="index.html#about">เริ่มต้นเลย</a>

    </div>
  </header>

  <main class="main">

    <!-- Hero Section -->
    <section id="hero" class="hero section">

      <div class="container" data-aos="fade-up" data-aos-delay="100">

        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="hero-content" data-aos="fade-up" data-aos-delay="200">
              <div class="company-badge mb-4">
                <i class="bi bi-gear-fill me-2"></i>
                PGPHONESHOP
              </div>

              <h1 class="mb-4">
                ร้านขายโทรศัพท์ <br>
                มือถือราคาถูกยี่ห้อ PG <br>
                <span class="accent-text">PGPHONE ยินดีต้อนรับ</span>
              </h1>

              <p class="mb-4 mb-md-5">
                PGPhone ร้านขายโทรศัพท์มือถือแบรนด์ PG คุณภาพเยี่ยม ดีไซน์ล้ำสมัย ฟีเจอร์ครบครัน ตอบโจทย์ทุก
                ไลฟ์สไตล์ ในราคาคุ้มค่า พร้อมบริการหลังการขายมาตรฐาน
              </p>

              <div class="hero-buttons">
                <a href="#about" class="btn btn-primary me-0 me-sm-2 mx-1">เริ่มต้นเลย</a>
                <a href="assets/img/pgv9.mp4" class="btn btn-link mt-2 mt-sm-0 glightbox">
                  <i class="bi bi-play-circle me-1"></i>
                  รีวิวโทรศัพท์ คลิ๊กเลย
                </a>
              </div>
            </div>
          </div>

      <Script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "VideoObject",
          "name": "รีวิวโทรศัพท์มือถือ PG V9",
          "description": "ชมรีวิวสมาร์ทโฟน PG V9 ฟีเจอร์เด่น แบตอึด กล้องชัด พร้อมประสิทธิภาพแรง!",
          "thumbnailUrl": "https://yourwebsite.com/img/video-thumbnail.jpg",
          "uploadDate": "2025-02-12T12:00:00+00:00",
          "contentUrl": "https://yourwebsite.com/img/pgv9.mp4",
          "embedUrl": "https://yourwebsite.com/videos",
          "publisher": {
            "@type": "Organization",
            "name": "Your Website",
            "logo": {
              "@type": "ImageObject",
              "url": "https://yourwebsite.com/img/logo.png"
            }
          }
        })}
      </Script>

  
  
      <div className="container my-5">
        <h1 className="text-center mb-4">รีวิวโทรศัพท์มือถือ PG V9</h1>

        <div className="row justify-content-center">
          <div className="col-md-8 col-12">
            <div className="video-container">
              <video
                className="video-player"
                src="/img/pgv9.mp4"
                controls
                preload="metadata"
                poster="/img/video-thumbnail.jpg"
              ></video>
            </div>
          </div>
        </div>

      
        <div className="row justify-content-center mt-4">
          <div className="col-md-8 col-12">
            <h2 className="text-center">ฟีเจอร์เด่นของ PG V9</h2>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">📱 หน้าจอ AMOLED ขนาด 6.5 นิ้ว</li>
              <li className="list-group-item">🔋 แบตเตอรี่ความจุ 5000mAh</li>
              <li className="list-group-item">📷 กล้องหลัง 108MP + Ultra Wide</li>
              <li className="list-group-item">⚡ รองรับชาร์จเร็ว 65W</li>
              <li className="list-group-item">🔒 ระบบสแกนนิ้วใต้หน้าจอ</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mb-5">
<a className="btn btn-info" href="/">Go To Home Page</a>
</div>
  
      <style jsx>{`
        .video-container {
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
          position: relative;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
        }

        .video-player {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 10px;
        }

        h2 {
          margin-top: 20px;
          font-size: 1.8rem;
        }

        .list-group-item {
          font-size: 1.2rem;
          padding: 10px;
        }
      `}</style>
    </>
  );
}
