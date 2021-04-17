import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a> experimentation
        </h1>

        <div className={styles.grid}>
          <Link href="/ssg">
            <a>
              <div className={styles.card}>
                <p>Start Treck Sessions SSG</p>
              </div>
            </a>
          </Link>
          <Link href="/ssgapollo">
            <a>
              <div className={styles.card}>
                <p>SSG with apollo client</p>
              </div>
            </a>
          </Link>
          <Link href="/ssrapollo">
            <a>
              <div className={styles.card}>
                <p>SSR with apollo</p>
              </div>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
}
