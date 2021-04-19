import { gql, useQuery } from "@apollo/client";
import styles from "../styles/Home.module.css";

const QUERY_ALL_POSTS = gql`
  query Countries {
    countries {
      code
      name
      emoji
    }
  }
`;

const Posts = () => {
  const { data, loading, error } = useQuery(QUERY_ALL_POSTS);

  console.log({ data, loading, error });

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return null;
  }

  const countries = data.countries.slice(0, 4);

  return (
    <div className={styles.grid}>
      {countries.map((country) => (
        <div key={country.code} className={styles.card}>
          <h3>{country.name}</h3>
          <p>
            {country.code} - {country.emoji}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
