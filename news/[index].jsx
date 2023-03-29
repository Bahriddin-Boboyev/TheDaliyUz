import Advertisement from "@/component/advertisement/Advertisement";
import NewsBox from "@/component/news-box/NewsBox";
import HomeWeekly from "@/component/weekly/HomeWeekly";
import RootLayout from "@/layout/layout";
import styles from "./styles/news.module.scss";

export default function News() {
  return (
    <RootLayout>
      <main className={styles.main}>
        <NewsBox />
        <Advertisement />
        <HomeWeekly title='home' />
      </main>
    </RootLayout>
  );
}
