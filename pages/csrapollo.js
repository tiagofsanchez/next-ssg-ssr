import Posts from "../components/Posts";
import styles from "../styles/Home.module.css";

const CsrApollo = () => {
  return (
    <div className={styles.container}>
      <h1>This is CSR with Apollo</h1>
      <p className={styles.code}>http://localhost:3000/api/graphql</p>
      <p>
        Here we are using apollo client and Nextjs and data will be requested on
        a specific component and not a page
      </p>
      <Posts />
    </div>
  );
};

export default CsrApollo;
