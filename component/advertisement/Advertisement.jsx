import React, { useContext } from "react";
import styles from './advertisement.module.scss';
import Link from "next/link";
import { Context } from "@/context/DataProvider";

const Advertisement = () => {
  const { language } = useContext(Context);
  const arr = language.subscribe_our_socially.split(" ");
  return (
    <div className={`container`}>
      <div className={styles.body}>
        <h2 className={styles.title}>
          {/* Bizni <span>ijtimoiy tarmoqlarda</span> <br /> ham kuzatib boring! */}
          {
            arr[0] 
          }
          <span>&nbsp;
            {
              arr.slice(1, 3).join(' ')
            }
          </span> <br />
          {
            arr.slice(3, arr.length).join(' ')
          }
        </h2>
        <ul className={styles.linkBlock}>
          <li className={styles.linkItem}>
            <Link href="#" className={styles.link} />
          </li>
          <li className={styles.linkItem}>
            <Link href="#" className={styles.link} />
          </li>
          <li className={styles.linkItem}>
            <Link href="#" className={styles.link} />
          </li>
          <li className={styles.linkItem}>
            <Link href="#" className={styles.link} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Advertisement;
