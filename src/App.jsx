import { useState, useEffect } from 'react';
import './App.css';

const Producto = ({ producto }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [mostrarDetalles, setMostrarDetalles] = useState(false);

  return (
    <article className="producto">
      <h2>{producto.nombre}</h2>
      <div className="imagenes">
        <img
          src={producto.imagenes[activeImage]}
          alt={producto.nombre}
          onClick={() => setActiveImage((prev) => (prev + 1) % producto.imagenes.length)}
          loading="lazy"
        />
        {producto.oferta && <div className="badge-oferta">OFERTA</div>}
      </div>
      
      <div className={`detalles-producto ${mostrarDetalles ? 'visible' : ''}`}>
        <p><i className="icono">📏</i> {producto.medidas}</p>
        <p className="precio">
          {producto.precioAnterior && <span className="tachado">{producto.precioAnterior}</span>}
          <strong> {producto.precio}</strong>
        </p>
        <p><i className="icono">📦</i> {producto.stock}</p>
        <p><i className="icono">🎨</i> {producto.colores}</p>
        <a 
          href="https://walink.co/35f966" 
          className="btn-compra"
          target="_blank"
          rel="noopener noreferrer"
        >
          Consultar por WhatsApp
        </a>
      </div>
      <button 
        className="btn-detalles"
        onClick={() => setMostrarDetalles(!mostrarDetalles)}
      >
        {mostrarDetalles ? '▲ Menos detalles' : '▼ Ver detalles'}
      </button>
    </article>
  );
};

function App() {
  const [colorFilter, setColorFilter] = useState("");

  const productos = [
    {
      id: 1,
      nombre: "Espejo Horizonte",
      imagenes: ["./img/espejoblanco1.jpg", "./img/espejoblanco2.jpg"],
      medidas: "50cm × 170cm",
      precio: "$75.000",
      precioAnterior: "$89.000",
      stock: "Últimas 4 unidades",
      colores: "Blanco, Hueso",
      oferta: true,
      destacado: true
    },
    {
      id: 2,
      nombre: "Espejo Serenidad",
      imagenes: ["./img/espejoblancochico1.jpg", "./img/espejoblancochico2.jpg"],
      medidas: "46cm × 69cm",
      precio: "$40.000",
      stock: "4 unidades",
      colores: "Blanco, Hueso, Negro, Marrón"
    },
    {
      id: 3,
      nombre: "Espejo Raíces",
      imagenes: ["./img/espejochicomarron1.jpg", "./img/espejochicomarron2.jpg"],
      medidas: "50cm × 70cm",
      precio: "$50.000",
      stock: "2 unidades",
      colores: "Blanco, Marrón"
    },
    {
      id: 4,
      nombre: "Espejo Armonía",
      imagenes: ["./img/espejomarron1.jpg", "./img/espejomarron2.jpg"],
      medidas: "50cm × 172cm",
      precio: "$100.000",
      stock: "1 unidad",
      colores: "Marrón"
    },
    {
      id: 5,
      nombre: "Espejo Esencia",
      imagenes: ["./img/espejonegro1.jpg", "./img/espejonegro2.jpg"],
      medidas: "50cm × 127cm",
      precio: "$60.000",
      stock: "4 unidades",
      colores: "Turquesa, Negro, Blanco, Hueso"
    },
    {
      id: 6,
      nombre: "Espejo Aurora",
      imagenes: ["./img/espejoredondo1.jpg", "./img/espejoredondo2.jpg"],
      medidas: "50cm × 50cm",
      precio: "$55.000",
      stock: "1 unidad",
      colores: "Negro"
    }
  ];

  const filteredProducts = colorFilter 
    ? productos.filter(p => p.colores.toLowerCase().includes(colorFilter.toLowerCase()))
    : productos;

  useEffect(() => {
    document.title = 'Roma Mora - Espejos Artesanales en Neuquén';
  }, []);

  return (
    <div className="app">
      <header>
        <div className="header-content">
          <img className="logo" src="./img/logo.jpg" alt="Roma Mora Espejos Artesanales" />
          <h1>Roma Mora</h1>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-text">
            <h2>Espejos Artesanales Únicos</h2>
            <p>Hechos a mano en Neuquén con materiales de primera calidad</p>
          </div>
        </section>

        <section className="productos-section">
          <div className="filtros">
            <label>Filtrar por color:</label>
            <select 
              value={colorFilter}
              onChange={(e) => setColorFilter(e.target.value)}
            >
              <option value="">Todos los colores</option>
              <option value="blanco">Blanco</option>
              <option value="hueso">Hueso</option>
              <option value="negro">Negro</option>
              <option value="marrón">Marrón</option>
              <option value="turquesa">Turquesa</option>
            </select>
          </div>

          <div className="productos-grid">
            {filteredProducts.map((producto) => (
              <Producto key={producto.id} producto={producto} />
            ))}
          </div>
        </section>

        <section className="ubicacion">
          <h2>Visítanos en Neuquén Capital</h2>
          <div className="mapa-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3102.8363786220457!2d-68.0852641!3d-38.9505662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x960a33a4e8e44b9f%3A0xe36aa0a6d7e20147!2sVidrios%20y%20aluminios%20jl!5e0!3m2!1ses-419!2sar!4v1744690434802!5m2!1ses-419!2sar" 
              width="100%" 
              height="450" 
              style={{border:0}} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Roma Mora"
            ></iframe>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-content">
          <div className="contacto">
            <h3>Contacto</h3>
            <a 
              href="https://walink.co/35f966" 
              className="whatsapp-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>📱 WhatsApp: 299 461-0135</span>
            </a>
            <a 
              href="https://www.instagram.com/romamora_espejos" 
              className="instagram-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>📸 Instagram: @romamora_espejos</span>
            </a>
          </div>
          <div className="derechos">
            <p>© {new Date().getFullYear()} Roma Mora - Todos los derechos reservados</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;