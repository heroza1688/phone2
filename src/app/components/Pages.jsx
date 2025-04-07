import React from 'react';

export default function Pages() {
  return (
    <>
      {/* Header Section */}
      <header id="header" className="header d-flex align-items-center fixed-top">
        <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
          <a href="index.html" className="logo d-flex align-items-center me-auto me-xl-0">
            <h1 className="sitename">PGPHONESHOP</h1>
          </a>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li><a href="#hero" className="active">หน้าแรก</a></li>
              <li><a href="#about">เกี่ยวกับ</a></li>
              <li><a href="#features">คุณสมบัติ</a></li>
              <li><a href="#pricing">นโยบายความเป็นส่วนตัว</a></li>
            </ul>
          </nav>

          <a className="btn-getstarted" href="index.html#about">เริ่มต้นเลย</a>
        </div>
      </header>

      <main className="main">
        {/* Hero Section */}
        <section id="hero" className="hero section">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="hero-content" data-aos="fade-up" data-aos-delay="200">
                  <div className="company-badge mb-4">
                    <i className="bi bi-gear-fill me-2"></i>
                    PGPHONESHOP
                  </div>

                  <h1 className="mb-4">
                    ร้านขายโทรศัพท์ <br />
                    มือถือราคาถูกยี่ห้อ PG <br />
                    <span className="accent-text">PGPHONE ยินดีต้อนรับ</span>
                  </h1>

                  <p className="mb-4 mb-md-5">
                    PGPhone ร้านขายโทรศัพท์มือถือแบรนด์ PG คุณภาพเยี่ยม ดีไซน์ล้ำสมัย ฟีเจอร์ครบครัน ตอบโจทย์ทุก
                    ไลฟ์สไตล์ ในราคาคุ้มค่า พร้อมบริการหลังการขายมาตรฐาน
                  </p>

                  <div className="hero-buttons">
                    <a href="#about" className="btn btn-primary me-0 me-sm-2 mx-1">เริ่มต้นเลย</a>
                    <a href="assets/img/pgv9.mp4" className="btn btn-link mt-2 mt-sm-0 glightbox">
                      <i className="bi bi-play-circle me-1"></i>
                      รีวิวโทรศัพท์ คลิ๊กเลย
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="hero-image" data-aos="zoom-out" data-aos-delay="300">
                  <img src="assets/img/illustration-1.webp" alt="Hero Image" className="img-fluid" />
                  <div className="customers-badge">
                    <div className="customer-avatars">
                      <img src="assets/img/testimonial-1.jpg" alt="Customer 1" className="avatar" />
                      <img src="assets/img/testimonial-2.jpg" alt="Customer 2" className="avatar" />
                      <img src="assets/img/testimonial-3.jpg" alt="Customer 3" className="avatar" />
                      <span className="avatar more">12+</span>
                    </div>
                    <p className="mb-0 mt-2">ผู้ใช้งานโทรศัพท์ PGPHONE มากกว่า 639,699</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row stats-row gy-4 mt-5" data-aos="fade-up" data-aos-delay="500">
              <div className="col-lg-3 col-md-6">
                <div className="stat-item">
                  <div className="stat-icon">
                    <i className="bi bi-trophy"></i>
                  </div>
                  <div className="stat-content">
                    <h4>10+ รางวัลนวัตกรรม</h4>
                    <p className="mb-0">การันตีคุณภาพและเทคโนโลยีล้ำสมัย</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="stat-item">
                  <div className="stat-icon">
                    <i className="bi bi-briefcase"></i>
                  </div>
                  <div className="stat-content">
                    <h4>50+ รุ่นให้เลือก</h4>
                    <p className="mb-0">ตอบโจทย์ทุกไลฟ์สไตล์การใช้งาน</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="stat-item">
                  <div className="stat-icon">
                    <i className="bi bi-graph-up"></i>
                  </div>
                  <div className="stat-content">
                    <h4>ลูกค้ากว่า 100,000 คน</h4>
                    <p className="mb-0">ไว้วางใจและเลือกใช้ PGPhone</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="stat-item">
                  <div className="stat-icon">
                    <i className="bi bi-award"></i>
                  </div>
                  <div className="stat-content">
                    <h4>บริการหลังการขายยอดเยี่ยม</h4>
                    <p className="mb-0">ดูแลโดยทีมผู้เชี่ยวชาญมืออาชีพ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Rest of your sections below */}
        {/* About Section */}
        <section id="about" className="about section">
          <div className="container" data-aos="fade-up" data-aos-delay="100">
            <div className="row gy-4 align-items-center justify-content-between">
              <div className="col-xl-5" data-aos="fade-up" data-aos-delay="200">
                <span className="about-meta">ข้อมูลเพิ่มเติมเกี่ยวกับเรา</span>
                <h2 className="about-title">ร้านขายโทรศัพท์มือถือราคาถูกยี่ห้อ PG</h2>
                <p className="about-description">
                  โทรศัพท์มือถือราคา โทรศัพท์มือถือระบบแอนดรอยด์ ร้านขายโทรศัพท์มือถือราคาถูก PGเว็บตรงจากต่างประเทศ100% ...
                </p>
                <div className="row feature-list-wrapper">
                  <div className="col-md-6">
                    <ul className="feature-list">
                      <li><i className="bi bi-check-circle-fill"></i> สมาร์ทโฟนดีไซน์พรีเมียม</li>
                      <li><i className="bi bi-check-circle-fill"></i> ประสิทธิภาพลื่นไหล ตอบสนองทุกการใช้งาน</li>
                      <li><i className="bi bi-check-circle-fill"></i> กล้องคมชัด เก็บทุกช่วงเวลาสำคัญ</li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="feature-list">
                      <li><i className="bi bi-check-circle-fill"></i> แบตเตอรี่อึด ใช้งานได้ตลอดวัน</li>
                      <li><i className="bi bi-check-circle-fill"></i> เทคโนโลยีล้ำหน้า รองรับ 5G</li>
                      <li><i className="bi bi-check-circle-fill"></i> รับประกันคุณภาพ พร้อมบริการหลังการขาย</li>
                    </ul>
                  </div>
                </div>

                <div className="info-wrapper">
                  <div className="row gy-4">
                    <div className="col-lg-5">
                      <div className="profile d-flex align-items-center gap-3">
                        <img src="assets/img/avatar-1.webp" alt="CEO Profile" className="profile-image" />
                        <div>
                          <h4 className="profile-name">Mario Smith</h4>
                          <p className="profile-position">CEO &amp; Founder</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="contact-info d-flex align-items-center gap-2">
                        <i className="bi bi-telephone-fill"></i>
                        <div>
                          <p className="contact-label">โทรหาเราได้ตลอดเวลา</p>
                          <p className="contact-number">+99 639-688</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-6" data-aos="fade-up" data-aos-delay="300">
                <div className="image-wrapper">
                  <div className="images position-relative" data-aos="zoom-out" data-aos-delay="400">
                    <img src="assets/img/clients/showcase-3.png" alt="Business Meeting" className="img-fluid main-image rounded-4" />
                    <img src="assets/img/showcase-1.png" alt="Team Discussion" className="img-fluid small-image rounded-4" />
                  </div>
                  <div className="experience-badge floating">
                    <h3>10+ <span>Years</span></h3>
                    <p>ประสบการณ์ด้านบริการธุรกิจ</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Continue with other sections */}
      </main>
    </>
  );
}
