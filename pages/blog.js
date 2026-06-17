import Head from "next/head";
import Link from "next/link";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog - Artículos de SEO y Next.js</title>
        <meta name="description" content="Lee nuestros últimos artículos sobre optimización web, SEO, y trucos para Next.js." />
        <meta name="keywords" content="blog, artículos, SEO, nextjs, optimización" />
        <meta property="og:title" content="Blog - Artículos de SEO" />
        <meta property="og:description" content="Lee nuestros últimos artículos sobre optimización web." />
        <meta property="og:type" content="website" />
      </Head>
      <main style={{ padding: "2rem" }}>
        <h1>Nuestro Blog</h1>
        <p>Aquí encontrarás las mejores noticias sobre desarrollo web y optimización.</p>
        <br />
        <Link href="/" style={{ color: "blue", textDecoration: "underline" }}>
          Volver al Inicio
        </Link>
      </main>
    </>
  );
}
