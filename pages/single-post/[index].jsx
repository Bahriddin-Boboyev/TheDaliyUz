import RootLayout from "@/layout/layout";
import styles from "./styles/singlepost.module.scss";
import SingleHeader from "./components/single-header/SingleHeader";
import SingleBody from "./components/single-body/SingleBody";
import SingleMedia from "./components/single-media/SingleMedia";
import Advertisement from "@/component/advertisement/Advertisement";
import HomeWeekly from "@/component/weekly/HomeWeekly";

function SinglePost({ data }) {

  return (
    <RootLayout>
      <main className={styles.main}>
        <SingleHeader data={data} />
        <SingleBody data={data} />
        <SingleMedia />
        <Advertisement />
        <HomeWeekly  />
      </main>
    </RootLayout>
  );
}

export async function getServerSideProps({ params }) {
  const num = Number(params.index) + 1;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${num}`);
  const data = await res.json();

  return {
    props: { data },
  };
}

export default SinglePost;
