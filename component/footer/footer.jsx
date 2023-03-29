"use client";
import React, { useContext } from "react";
import styles from "./footer.module.scss";
import logo from "../../assets/imgs/footer-logo.svg";
import Link from "next/link";
import Image from "next/image";
import { Context } from "@/context/DataProvider";

const FooterComponent = () => {
  const {paginationArr} = useContext(Context);

  return (
    <div className={styles.body}>
      <div className={`container ${styles.flexCenter}`}>
        <div>
          <div className={styles.logoBox}>
            <Image className={styles.logo} src={logo} alt="Footer logo" />
          </div>
          <div className={styles.mediaBox}>
            <Link href="#" className={styles.mediaLink}></Link>
            <Link href="#" className={styles.mediaLink}></Link>
            <Link href="#" className={styles.mediaLink}></Link>
            <Link href="#" className={styles.mediaLink}></Link>
          </div>
        </div>
        <ul className={styles.footerLinks}>
          {paginationArr?.map((item) => {
            return (
                <li key={Date.now() + Math.random()} className={styles.pageItem}>
                  <Link className={styles.pageText} href={item.name === "Yangiliklar" ? item.href : `/news${item.href}`}>
                    {item.name}
                  </Link>
                </li>
            );
          })}
        </ul>
        <div className={styles.contactBox}>
          <Link className={styles.tel} href="tel:+998910019937">
            +998 (91) 001 99 37
          </Link>
          <Link
            className={styles.mail}
            href="mailto:adkhambekyusupov@gmail.com"
          >
            adkhambekyusupov@gmail.com
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
