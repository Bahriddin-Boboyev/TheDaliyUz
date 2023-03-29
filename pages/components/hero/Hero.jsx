import React from "react";
import styles from "./hero.module.scss";
import Link from "next/link";
import Image from "next/image";
import { heroMain, hero1, hero2, hero3 } from "@/assets";

const Hero = () => {

  const mockData = [
    {
      title: "Inflyatsiya eng past darajadagi davlatlar",
      imgURL: heroMain,
      addedTime: "Yan. 25",
      spendTime: "9min",
      viewers: "1k",
      type: "Jahon",
    },
    {
      title:
        " AQSH'dagi eng yirik banklardan biri Silicon Valley bankrot boʻldi ",
      imgURL: hero1,
      addedTime: "Dek. 25",
      spendTime: "3min",
      viewers: "1k",
      type: "Biznes",
    },
    {
      title:
        "O‘zbekistonda yosh oilalar daromadining asosiy qismini qarz to‘lashga sarflamoqda ",
      imgURL: hero2,
      addedTime: "Noy. 5",
      spendTime: "8min",
      viewers: "1k",
      type: "Mahalliy",
    },
    {
      title:
        "Bloomberg Osiyoning ayni paytdagi 20 ta eng boy oilasi reytingini taqdim qildi ",
      imgURL: hero3,
      addedTime: "Noy. 5",
      spendTime: "5min",
      viewers: "1k",
      type: "Jahon",
    },
  ];

  return (
    <div>
      <div className="container">
        <div className={styles.block}>
          {mockData?.map((el, index) => {
            if (index === 0) {
              return (
                <>
                  <Link key={index + 1} href={`/single-post/${index}`} props={el} className={styles.firstItem}>
                    <Image className={styles.firstImg} src={el.imgURL} alt={el.title} />
                    <div className={styles.descriptionBlock}>
                      <h3 className={styles.mainTitle}>{el.title}</h3>
                      <div className={styles.mainLine}></div>
                      <div className={styles.mainFooter}>
                        <p className={styles.mainFooterItem}>{el.addedTime}</p>
                        <p className={styles.mainFooterItem}>{el.spendTime}</p>
                        <p className={styles.mainFooterItem}>{el.viewers}</p>
                      </div>
                    </div>
                  </Link>
                </>
              );
            }
            return (
              <>
                <div key={index+ 1} className={`${styles.rightItem}`}>
                  <Link href={`/single-post/${index}`} className={styles.rightImgBlock}>
                    <Image src={el.imgURL} alt={el.title} className={styles.rightImg} />
                  </Link>
                  <div>
                    <p className={styles.rightType}>{el.type}</p>
                    <Link href={`/single-post/${index}`} className={styles.rightTitle}>{el.title?.length > 55 ? el.title.slice(0,52) + '...' : el.title}</Link>
                    <div className={styles.rightFooter}>
                      <p className={styles.rightFooterItem}>{el.addedTime}</p>
                      <p className={styles.rightFooterItem}>{el.spendTime + " o'qishga"}</p>
                      <p className={styles.rightFooterItem}>{el.viewers}</p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hero;
