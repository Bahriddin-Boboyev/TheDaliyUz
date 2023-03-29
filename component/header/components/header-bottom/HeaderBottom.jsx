import React, { useContext } from "react";
import styles from "./header-bottom.module.scss";
import mainLogo from "../../../../assets/imgs/header-logo.svg";
import Image from "next/image";
import { Context } from "@/context/DataProvider";

const HeaderBottom = () => {
  const {language}= useContext(Context);
  const d = new Date();
  const utc = d.getTime() + d.getTimezoneOffset() * 60000;
  const nd = new Date(utc + 3600000 * 10);
  return (
    <div className={styles.headerBottom}>
      <div className={`container ${styles.headerBottomContainer}`}>
        <div className={styles.flexCenter}>
          <div className={styles.imgBox}>
            <Image src={mainLogo} alt="Main Logo img" />
          </div>
          <ul className={styles.flexCenter}>
            <li className={styles.dataItem}>
              <p className={styles.dataTitle}>{`Dushanba`}</p>
              <span
                className={styles.dataSpan}
              >{`Mar. ${nd.getDate()}, ${nd.getFullYear()}`}</span>
            </li>
            <li className={styles.dataItem}>
              <p className={styles.dataTitle}>{`27C, Yomg'ir`}</p>
              <span className={styles.dataSpan}>{`Toshkent Sh.`}</span>
            </li>
          </ul>
        </div>
        <form className={styles.headerInputBox}>
          <input className={styles.headerInput} type="text" name="searchText" id="searchText" placeholder={language.search} />
          <button className={styles.headerBottomBtn}></button>
        </form>
      </div>
    </div>
  );
};

export default HeaderBottom;
