import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import("../components/LargeComponent"), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>Mi Sitio Optimizado - Home</title>
        <meta name="description" content="Aprende sobre optimización SEO y rendimiento en Next.js." />
        <meta name="keywords" content="Next.js, SEO, optimización web" />
        <meta property="og:title" content="Mi Sitio Optimizado" />
        <meta property="og:description" content="Descubre técnicas avanzadas para mejorar tu web con Next.js." />
        <meta property="og:image" content="/images/alemania.png" />
        <meta property="og:type" content="website" />
        {/* Etiqueta de verificación de Google Search Console */}
        <meta name="google-site-verification" content="sPzYu0q0Ys4tiGl7W1nKvZiZEG2Z4b_BehEveWP1hSM" />
      </Head>

      <h1>Bienvenido</h1>
      <DynamicComponent />
      <p>Aprende cómo mejorar el rendimiento y SEO en Next.js.</p>

      <Image
        src="/images/alemania.png"
        width={800}
        height={400}
        alt="Ejemplo de imagen optimizada"
        priority
      />
    </>
  );
}
