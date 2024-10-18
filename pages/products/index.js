import Link from "next/link";
import Image from "next/image";
import shirts from "@/data/shirts"; // Import your product data
import styles from "@/styles/Product.module.css";

export default function Products() {
  return (
    <div className={styles.container}>
      {shirts.map((item) => (
        <div key={item.id} className={styles.productCard}>
          <Link href={'/products/' + item.id}>
            <h2 className={styles.title}>{item.title}</h2>
            <Image src={item.thumbnail} width={300} height={300} alt={item.title} />
            <p className={styles.price}>${item.price}</p>
            <p>Size: {item.size}</p>
            <p>Stock: {item.stock}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
