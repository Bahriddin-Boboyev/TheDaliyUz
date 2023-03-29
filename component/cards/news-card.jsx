import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from './news-card.module.scss';

const NewsCard = ({ data }) => {
  return (
    <div className={styles.body}>
      <div className={styles.content}>
        <Link href="#" className={styles.title}>
          {data?.title.length > 65
            ? data?.title.slice(0, 63) + "..."
            : data?.title}
        </Link>
        <p className={styles.text}>{data?.text}</p>
        <div className={styles.footerBox}>
          <p className={styles.footerItem}>{data?.addedTime}</p>
          <p className={styles.footerItem}>{data?.spendTime + " o'qishga"}</p>
          <p className={styles.footerItem}>{data?.viewers}</p>
        </div>
      </div>
      <Link className={styles.imgBox} href="#">
        <Image className={styles.image} src={data?.imgURL} alt={data?.title} />
      </Link>
    </div>
  );
};

export default NewsCard;
