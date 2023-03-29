"use client";
import { Context } from "@/context/DataProvider";
import React, { useContext, useEffect, useRef } from "react";
import styles from "./single-header.module.scss";
import {
  FacebookIcon,
  FacebookShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

const SingleHeader = ({ data }) => {
  const [str, setStr] = React.useState("");
  const [shareUrl, setShareUrl] = React.useState("");
  const [dropdown, setDropdown] = React.useState(false)
  const { language } = useContext(Context);

  const menuRef = useRef(null)
  useEffect(() => {
    setShareUrl(window.location.href);
    let handler = (e) => {
      if (menuRef.current) {
        if (!menuRef.current.contains(e.target)) {
          setDropdown(false);
        }
      }
    };
    document.addEventListener("mousedown", handler);
  }, []);

  const copyLink = () => {
    setStr("✔️");
    const path = window.location.href;
    navigator.clipboard.writeText(path);
    setTimeout(() => {
      setStr("");
    }, 2000);
  };
  return (
    <div className="container">
      <div className={styles.header}>
        <h3 className={styles.type}>Biznes</h3>
        <h2 className={styles.title}>{data.title}</h2>
        <div className={styles.line}></div>
        <div className={styles.footerBox}>
          <div className={styles.flexCenter}>
            <div className={styles.footerItem}>Mar. 25</div>
            <div className={styles.footerItem}>
              5 min {language.news_card_options.read}
            </div>
            <div className={styles.footerItem}>1.2k</div>
          </div>
          <div className={styles.flexCenter}>
            <div className={styles.footerRight} onClick={() => copyLink()}>
              {language.copy_link} {str}
            </div>
            <div className={styles.footerRight} onClick={() => setDropdown(true)}>
              {language.share}
            </div>
          </div>
          <div ref={menuRef} className={dropdown ? styles.showModal : styles.noneModal}>
            <h2>Share With: </h2>
            <button className={styles.exitBtn} onClick={() => setDropdown(false)}></button>
            <WhatsappShareButton className={styles.shareBtn} url={shareUrl}>
              <WhatsappIcon /> <p>WhatsApp</p>
            </WhatsappShareButton>
            <FacebookShareButton className={styles.shareBtn} url={shareUrl}>
              <FacebookIcon /> <p>Facebook</p>
            </FacebookShareButton>
            <TwitterShareButton className={styles.shareBtn} url={shareUrl}>
              <TwitterIcon /> <p>Twitter</p>
            </TwitterShareButton>
            <TelegramShareButton className={styles.shareBtn} url={shareUrl}>
              <TelegramIcon /> <p>Telegram</p>
            </TelegramShareButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleHeader;
