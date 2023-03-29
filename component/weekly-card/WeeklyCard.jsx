import { Context } from '@/context/DataProvider';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';
import styles from './weekly-card.module.scss';

const WeeklyCard = ({data}) => {
  const {language} = useContext(Context);
  return (
    <div className={styles.body}>
      <Link className={styles.imgBox} href="#">
        <Image className={styles.image} src={data.imgURL} alt={data.title} />
      </Link>
      <p className={styles.type}></p>
      <Link href='#' className={styles.title}>{data?.title.length > 65 ? data?.title.slice(0,63) + '...' : data?.title}</Link>
      <div className={styles.line}></div>
      <div className={styles.footerBox}>
        <p className={styles.footerItem}>{data.addedTime}</p>
        <p className={styles.footerItem}>{data.spendTime + " " + language.news_card_options.read}</p>
        <p className={styles.footerItem}>{data.viewers}</p>
      </div>
    </div>
  );
}

export default WeeklyCard