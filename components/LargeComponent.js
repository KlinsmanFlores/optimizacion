export default function LargeComponent() {
  return (
    <div style={{ marginTop: '20px', padding: '20px', border: '1px solid #ccc' }}>
      <h2>Este es un componente grande</h2>
      <p>Ha sido cargado dinámicamente usando Lazy Loading con next/dynamic.</p>
    </div>
  );
}
