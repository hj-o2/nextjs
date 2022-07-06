import Link from "next/link";
import Head from "next/head";

import styles from "../styles/Home.module.css";
import utilStyle from "../styles/utils.module.css";
import Layout, { siteTitle } from "../components/Layout";
import { getPostsData } from "../lib/post";

// SSGの場合
export async function getStaticProps() {
  const allPostsData = getPostsData(); // id, title, date, thumbnail
  // console.log(allPostsData);

  return {
    props: {
      allPostsData,
    },
  };
}

// SSRの場合!
// export async function getServerSideProps(cxt) { // context = cxt
//   const allPostsData = getPostsData(); // id, title, date, thumbnail
//   console.log(allPostsData);

//   return {
//     props: {
//       // コンポーネントに渡すためのprops
//       allPostsData,
//     },
//   };
// }

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyle.headingMd}>
        <p>こんにちは！北條祐輝です！エンジニアとして成長するため日々、勉強中です。</p>
      </section>

      <section className={`${utilStyle.headingMd} ${utilStyle.padding1px}`}>
        <h2>📝 エンジニアのPF</h2>
        <div className={styles.grid}>
          {allPostsData.map(({ id, title, date, thumbnail }) => (
            <article key={id}>
              <Link href={`/posts/${id}`}>
                <img src={`${thumbnail}`} className={styles.thumbnailImage} />
              </Link>
              <Link href={`/posts/${id}`}>
                <a className={utilStyle.boldText}>{title}</a>
              </Link>
              <br />
              <small className={utilStyle.lightText}>{date}</small>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}
