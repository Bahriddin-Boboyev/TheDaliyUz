import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from './event-card.module.scss';

const EventCard = ({data}) => {
  return (
    <div className={styles.body}>
      <div className={styles.imgBox}>
        <Image src={data?.imgURL} alt={data?.title} />
      </div>
      <div className={styles?.middleBox}>
        <Link className={styles.title} href={data?.link}>{data?.title}</Link>
        <div className={styles.footerBox}>
          <p className={styles.footerItem}>{data?.date}</p>
          <p className={styles.footerItem}>{data?.location}</p>
        </div>
      </div>
      <div className={styles.linkBox}>
        <Link href={data?.link} className={styles.link} ></Link>
      </div>
    </div>
  );
}

export default EventCard