import Head from "next/head";
import HomePage from "../components/Homepage.jsx";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Anish Shrestha</title>
        <meta name="description" content="Anish Shrestha web app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="text-2xl">
        <HomePage />
      </main>
    </div>
  );
}
