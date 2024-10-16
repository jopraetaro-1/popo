import styles from "@/styles/About.module.css";
import Image from "next/image";
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>เกี่ยวกับเรา | jopraetaro</title>
        <meta name="keywords" content="vintage,ขายเสื้อผ้า,รองเท้า" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Supasuta Raksawong</h1>
        <Image
          src="/mypicture.jpg" // Replace this with the actual path to your picture
          width={200}
          height={200}
          alt="Supasuta Raksawong"
          className={styles.profilePic}
        />
        <p className={styles.bio}>KMITL Rai Second Year</p>
      </div>
    </>
  );
}
