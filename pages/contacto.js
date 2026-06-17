import Head from "next/head";
import Link from "next/link";

export default function Contacto() {
  return (
    <>
      <Head>
        <title>Contacto - Hablemos de tu Proyecto</title>
        <meta name="description" content="Ponte en contacto con nosotros para asesorías de SEO y desarrollo web." />
        <meta name="keywords" content="contacto, asesoría, ayuda, desarrollo web" />
        <meta property="og:title" content="Página de Contacto" />
        <meta property="og:description" content="Ponte en contacto con nosotros." />
        <meta property="og:type" content="website" />
      </Head>
      <main style={{ padding: "2rem" }}>
        <h1>Contacto</h1>
        <p>Mándanos un mensaje y te responderemos a la brevedad posible.</p>
        <br />
        <Link href="/" style={{ color: "blue", textDecoration: "underline" }}>
          Volver al Inicio
        </Link>
      </main>
    </>
  );
}
