import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { v4 as uuidv4 } from 'uuid';

const Home: NextPage = (props) => {
  console.log(props);
  return (
    <div className={styles.container}>
      <Head>
        <title>Les meilleurs joueurs de foot</title>
        <meta name="description" content="Les meilleurs joueurs de foot de la planète à travers l'histoire..." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Top Players</a>
        </h1>

        <p className={styles.description}>
          Ronaldinho, Zidane, Messi, Ronaldo{' '}
          <code className={styles.code}>maradona, pele</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>
      <div>
        <h2 className={styles.titre}>Vocabulaire de base</h2>
        <table className={styles.tableau}>
          <tbody>
            {props.array.map(el => (
              <tr key={uuidv4}>
                <td>{el.en}</td>
                <td>{el.fr}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home

export async function getStaticProps() {
  const data = await import("../data/vocabulary.json")
  const array = data.vocabulary

  return {
    props: {
      array
    }
  }
}