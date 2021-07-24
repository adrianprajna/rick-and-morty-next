import Head from "next/head";
import Navbar from "../components/navbar/navbar.component";
import NextNProgress from 'nextjs-progressbar'

export default function Container({children, characters = [], setCharacters = () => {}}: any) {
    return (
        <>
            <Head>
                <title>Rick and Morty</title>
                <meta name="description" content="Ricky and Morty Simple Application"/>
            </Head>
            <NextNProgress
                color='#00a9e2'
                startPosition={0.4}
                stopDelayMs={200}
                height={4}
                options={{ easing: 'ease', speed: '100', showSpinner: true }}
            />
            <Navbar characters={characters} setCharacters={setCharacters} />
            <main>
                {children}
            </main>
        </>
    )
};
