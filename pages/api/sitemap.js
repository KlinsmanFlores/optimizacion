const BASE_URL = "https://optimizacion-three.vercel.app";

// Simulamos una llamada a una Base de Datos o CMS
async function getPostsFromDatabase() {
  return [
    { slug: "mi-primer-post" },
    { slug: "como-aprender-nextjs" },
    { slug: "guia-de-seo-2026" }
  ];
}

export default async function handler(req, res) {
  // Rutas estáticas de la aplicación
  const staticUrls = ["/", "/blog", "/contacto"]; 

  // Obtenemos los datos dinámicos de la "Base de datos"
  const posts = await getPostsFromDatabase();
  const dynamicUrls = posts.map(post => `/blog/${post.slug}`);

  // Combinamos las rutas estáticas y las que vienen de la base de datos
  const allUrls = [...staticUrls, ...dynamicUrls];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${allUrls
      .map((url) => `<url><loc>${BASE_URL}${url}</loc></url>`)
      .join("")}
  </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
}
