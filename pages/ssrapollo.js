import styles from "../styles/Home.module.css";
import { gql } from "@apollo/client";
import client from "../apollo-client";

const SsgApollo = ({ data }) => {
  const { allPosts } = data;
  console.log(allPosts);
  return (
    <div className={styles.container}>
      <h1>This is SSR with Apollo</h1>
      <p className={styles.code}>http://localhost:3000/api/graphql</p>
      <p>
        Where we are using apollo client and Nextjs will fetch the information
        for each page request
      </p>
      {allPosts.map((post) => (
        <p className={styles.card} key={post.id}>
          {post.title}
        </p>
      ))}
    </div>
  );
};

export async function getServerSideProps() {
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
