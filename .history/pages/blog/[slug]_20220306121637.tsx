import React from 'react';
import { useRouter } from 'next/router'
import Head from 'next/head'

export default function Article() {
    const router = useRouter()
    console.log(router);
    console.log(router.route);
    console.log(router.asPath);
    console.log(router.query);

    const pushFunction = () => {
        router.push("/")
    }
    return (
        <>
            <Head>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>{router.query.slug}</title>
            </Head>
            <div>
                <h1>{router.query.slug}</h1>
                <p>Les 10 joueurs de foot de ouf ⚽</p>
                <button className="btn btn-primary" onClick={pushFunction}>Retour à l accueil</button>
            </div>
        </>
    )
}