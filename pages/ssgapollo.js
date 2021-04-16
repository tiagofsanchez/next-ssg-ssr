import styles from "../styles/Home.module.css";
import { gql } from "@apollo/client";
import client from "../apollo-client";

const SsgApollo = ({ data }) => {
  const { allPosts } = data;
  return (
    <div className={styles.container}>
      <h1>This is SSG with Apollo Client</h1>
      {allPosts.map((post) => (
        <p className={styles.card}>{post.title}</p>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query {
        allPosts {
          title
        }
      }
    `,
  });
  return { props: { data } };
}

export default SsgApollo;
