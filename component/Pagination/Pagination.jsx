'use client'
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import styles from './pagination.module.scss';
import { Context } from "@/context/DataProvider";

const Pagination = () => {
  const [arr, setArr] = useState([]);
  const {language, paginationArr} = useContext(Context);
  useEffect(() => {
    setArr(paginationArr);
  }, [])
  
  const changeCurrent = (index) => {
    paginationArr.filter((item, number) => {
      if(index === number + 1) {
        item.active = true
      } else {
        item.active = false
      }
    })
    setArr(paginationArr)
  }

  return (
    <div className={styles.pagination}>
      <div className="container">
        <ul className={styles.flexCenter}>
          {arr?.map((item, index) => {
            return (
              <>
                <li key={index + 1} onClick={() => changeCurrent(index + 1)} className={styles.pageItem}>
                  <Link className={item.active ? styles.currentText : styles.itemText} href={item.name === "Yangiliklar" ? item.href : `/news${item.href}`}>{item.name}</Link>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
