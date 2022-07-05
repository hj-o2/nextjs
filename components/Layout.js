import Head from "next/head";
import Link from "next/link";

import styles from "./layout.module.css";
import utilStyle from "../styles/utils.module.css";

const names = "hojojo";
export const siteTitle = "Next.js portFolio";

function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              className={`${utilStyle.borderCircle} ${styles.headerHomeImage}`}
              src="/images/profile.png"
            />
            <h1 className={utilStyle.heading2Xl}>{names}</h1>
          </>
        ) : (
          <>
            <img
              className={`${utilStyle.borderCircle} ${styles.headerImage}`}
              src="/images/profile.png"
            />
            <h1 className={utilStyle.heading2Xl}>{names}</h1>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div>
          <Link href="/">← ホームへ戻る</Link>
        </div>
      )}
    </div>
  );
}

export default Layout;
