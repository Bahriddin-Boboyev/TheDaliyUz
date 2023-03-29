"use client";
import { Context } from "@/context/DataProvider";
import { en, ru, uz } from "@/language";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./header-top.module.scss";
import { useContext } from "react";

const HeaderTop = () => {
  const langArr = [
    {
      name: "UZ",
      selected: true,
    },
    {
      name: "RU",
      selected: false,
    },
    {
      name: "EN",
      selected: false,
    },
  ];
  const [langState, setLangState] = useState([]);
  const { setLanguage } = useContext(Context);

  React.useEffect(() => {
    console.log("effect", langArr);
    setLangState(langArr);
    console.log("effect state", langState);
  }, []);
  const CurrencyArr = [
    {
      name: "USD",
      value: "12500",
      increase: 12.5,
    },
    {
      name: "RUB",
      value: "185.23",
      increase: 6.3,
    },
    {
      name: "EUR",
      value: "11250",
      increase: -1.5,
    },
  ];

  const changeCurrent = (arr, numIndex) => {
    arr.filter((el, index) => {
      if (numIndex === index) {
        el.selected = true;
      } else el.selected = false;
    });
    return arr;
  };
  const handleChangeLang = (index) => {
    if (index === 1) {
      setLanguage(uz);
      setLangState((prev) => {
        return changeCurrent(prev, index - 1);
      });
    }
    if (index === 2) {
      setLanguage(ru);
      setLangState((prev) => {
        return changeCurrent(langArr, index - 1);
      });
    }
    if (index === 3) {
      setLanguage(en);
      const arr = changeCurrent(langState, index - 1);
      setLangState(arr);
    }
    console.log("bu langState ichki", langState);
  };
  console.log("bu langState", langState);

  return (
    <div className={styles.body}>
      <div className={`container ${styles.headerTopContainer}`}>
        <ul className={styles.flexCenter}>
          {CurrencyArr?.map((item) => {
            console.log(Date.now());
            return (
                <li
                  key={Date.now() + Math.random()}
                  className={`${styles.flexCenter} ${styles.headerLeftItem}`}>
                  <p className={styles.headerLeftParagraph}>{item.name}</p>
                  <span className={styles.headerLeftSum}>{item.value}</span>
                  <span
                    className={
                      item.increase > 0
                        ? styles.headerLeftGreen
                        : styles.headerLeftRed
                    }
                  >
                    {item.increase > 0
                      ? `+${item.increase}`
                      : `${item.increase}`}
                  </span>
                </li>
            );
          })}
        </ul>
        <div className={styles.flexCenter}>
          <ul className={styles.flexCenter}>
            {langState?.map((item) => {
              return (
                  <li key={Date.now() + Math.random()} className={styles.langItem}>
                    <button
                      className={`${styles.headerBtn} ${
                        item.selected && styles.selectedBtn
                      }`}
                      onClick={() => handleChangeLang(index + 1)}
                    >
                      {item.name}
                    </button>
                  </li>
              );
            })}
          </ul>
          <ul className={styles.mediaList}>
            <li className={styles.mediaItem}>
              <Link href="#" className={styles.mediaLink}></Link>
            </li>
            <li className={styles.mediaItem}>
              <Link href="#" className={styles.mediaLink}></Link>
            </li>
            <li className={styles.mediaItem}>
              <Link href="#" className={styles.mediaLink}></Link>
            </li>
            <li className={styles.mediaItem}>
              <Link href="#" className={styles.mediaLink}></Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
