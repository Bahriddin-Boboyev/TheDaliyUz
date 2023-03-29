import NewsCard from "@/component/cards/news-card";
import React, { useContext } from "react";
import styles from "./news-box.module.scss";
import {  hero1, hero2, hero3 } from "@/assets";
import EventCard from "@/component/event-card/EventCard";
import { Context } from "@/context/DataProvider";
const NewsBox = () => {
  const {language, mockData} = useContext(Context)

  const eventData = [
    {
      title: "The Design Meetup",
      imgURL: hero1,
      link: "#",
      date: "Mar, 20, 22:00",
      location: "IMPACT",
    },
    {
      title: "The Design Meetup",
      imgURL: hero1,
      link: "#",
      date: "Mar, 20, 22:00",
      location: "IMPACT",
    },
    {
      title: "The Design Meetup",
      imgURL: hero1,
      link: "#",
      date: "Mar, 20, 22:00",
      location: "IMPACT",
    },
    {
      title: "The Design Meetup",
      imgURL: hero1,
      link: "#",
      date: "Mar, 20, 22:00",
      location: "IMPACT",
    },
    {
      title: "The Design Meetup",
      imgURL: hero1,
      link: "#",
      date: "Mar, 20, 22:00",
      location: "IMPACT",
    },
  ];

  return (
    <div className={styles.body}>
      <div className="container">
        <div className={styles.block}>
          <div className={styles.left}>
            <h2 className={styles.leftTitle}>{language.news}</h2>
            <div className={styles.leftBox}>
              {mockData?.map((item) => {
                return (
                    <NewsCard key={Date.now() + Math.random()} data={item} />
                );
              })}
              <button className={styles.btn}>{language.more}</button>
            </div>
          </div>
          <div className={styles.right}>
            <h2 className={styles.rightTitle}>{language.event_wait_list}</h2>
            <div className={styles.rightBox}>
              {eventData?.map((item) => {
                return (
                    <EventCard key={Date.now() + Math.random()} data={item} />
                );
              })}
              <button className={styles.btn}>{language.more}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsBox;
