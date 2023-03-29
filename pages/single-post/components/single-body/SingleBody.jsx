import React from "react";
import styles from "./single-body.module.scss";
import Image from "next/image";
import { heroMain } from "@/assets";

const SingleBody = ({ data }) => {
  return (
    <div className="container">
      <div className={styles.body}>
        <div className={styles.imgBox}>
          <Image className={styles.image} src={heroMain} alt={data?.title} />
        </div>
        <div className={styles.box}>
          <h2 className={styles.title}>{data?.title}</h2>
          <p className={styles.text}>{data?.body}</p>
          <p className={styles.text}>{data?.body}</p>
        </div>
        <div className={styles.box}>
          <h2 className={styles.title}>{data?.title}</h2>
          <p className={styles.text}>{data?.body}</p>
          <p className={styles.text}>{data?.body}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleBody;
