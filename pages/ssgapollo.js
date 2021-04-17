import styles from "../styles/Home.module.css";
import { gql } from "@apollo/client";
import client from "../apollo-client";

const SsgApollo = ({ data }) => {
  const { allPosts } = data;
  console.log(allPosts);
  return (
    <div className={styles.container}>
      <h1>This is SSG with Apollo Client</h1>
      <p className={styles.code}>http://localhost:3000/api/graphql</p>
      {allPosts.map((post) => (
        <p className={styles.card} key={post.id}>
          {post.title}
        </p>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query {
        allPosts {
          id
          title
        }
      }
    `,
  });
  if (!data) {
    return { notFound: true };
  }
  return { props: { data } };
}

export default SsgApollo;
