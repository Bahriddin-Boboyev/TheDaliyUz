import { Context } from "@/context/DataProvider";
import Link from "next/link";
import React, { useContext } from "react";
import styles from "./single-media.module.scss";

const SingleMedia = () => {
  const { language } = useContext(Context);
  return (
    <div className="container">
      <div className={styles.box}>
        <h2 className={styles.title}>{language.share}</h2>
        <ul className={styles.innerBox}>
          <li className={styles.item}>
            <Link href="#" className={styles.itemLink}></Link>
            <div className={styles.mockBox}></div>
          </li>
          <li className={styles.item}>
            <Link href="#" className={styles.itemLink}></Link>
          </li>
          <li className={styles.item}>
            <Link href="#" className={styles.itemLink}></Link>
          </li>
          <li className={styles.item}>
            <Link href="#" className={styles.itemLink}></Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SingleMedia;
