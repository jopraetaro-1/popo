import { useState } from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  const [showModal, setShowModal] = useState(true); // Ensure this is true

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    alert("Login successful!");
    setShowModal(false);
  };

  return (
    <>
      <Head>
        <title>หน้าแรก | jopraetaro</title>
        <meta name="keywords" content="vintage,ขายเสื้อผ้า,รองเท้า" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>หน้าแรกของเว็บไชต์</h1>
        <Image src="/shopping.svg" width={300} height={300} alt="logo" />
        <p>welcome to prae shop</p>
        <Link href="/products" className={styles.btn}>
          ดูสินค้าทั้งหมด
        </Link>
      </div>

      {/* Modal */}
      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={handleCloseModal}>&times;</span>
            <h2>Login</h2>
            <form onSubmit={handleLoginSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="first_name">First Name:</label>
                <input type="text" id="first_name" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="last_name">Last Name:</label>
                <input type="text" id="last_name" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" required />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="phone_number">Phone Number:</label>
                <input type="tel" id="phone_number" required />
              </div>
              <button type="submit" className={styles.submitBtn}>Login</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
