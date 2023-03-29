import Advertisement from "@/component/advertisement/Advertisement";
import RootLayout from "@/layout/layout";
import Hero from "./components/Hero/Hero";
import NewsBox from "@/component/news-box/NewsBox";
import HomeWeekly from "@/component/weekly/HomeWeekly";
import styles from './page.module.scss';

function News() {

  return (
    <RootLayout>
      <main className={styles.main}>
        <Hero />
        <HomeWeekly title='home' />
        <Advertisement /> 
        <NewsBox />
      </main>
    </RootLayout>
  )
}

export default News;