import styles from "../styles/Home.module.css";

const Ssg = ({ pageProps }) => {
  const { seasons } = pageProps;
  return (
    <div className={styles.container}>
      <h1>This is SSG on a Star Trek API</h1>
      <p className={styles.code}>http://stapi.co/api/v1/rest/season/search</p>
      <p>
        Where we are just using a normal fetch and Nextjs will fetch all the
        information below on build time
      </p>
      {seasons.map((season) => {
        return (
          <p className={styles.card} key={season.uid}>
            {season.title}
          </p>
        );
      })}
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("http://stapi.co/api/v1/rest/season/search");
  const pageProps = await res.json();

  if (!pageProps) {
    return { notFound: true };
  }

  return {
    props: { pageProps },
  };
}

export default Ssg;
