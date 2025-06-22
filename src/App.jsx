import { useState, useEffect } from 'react';
import './App.css';

const Producto = ({ producto, index }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [mostrarDetalles, setMostrarDetalles] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <article 
      className="producto"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="producto-header">
        <h2>{producto.nombre}</h2>
        {producto.oferta && <span className="badge-oferta">Oferta especial</span>}
      </div>
      
      <div className="imagenes-container">
        <div className="imagen-principal">
          <img
            src={producto.imagenes[activeImage]}
            alt={`${producto.nombre} - Vista ${activeImage + 1}`}
            onClick={() => setActiveImage((prev) => (prev + 1) % producto.imagenes.length)}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            className={imageLoaded ? 'loaded' : ''}
          />
          {producto.imagenes.length > 1 && (
            <div className="indicadores-imagen">
              {producto.imagenes.map((_, idx) => (
                <button
                  key={idx}
                  className={`indicador ${idx === activeImage ? 'activo' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImage(idx);
                  }}
                  aria-label={`Ver imagen ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
      
      <div className="producto-info">
        <div className="precio-stock">
          <div className="precio">
            {producto.precioAnterior && (
              <span className="precio-anterior">{producto.precioAnterior}</span>
            )}
            <span className="precio-actual">{producto.precio}</span>
          </div>
          <span className="stock">{producto.stock}</span>
        </div>
        
        <button 
          className="btn-detalles"
          onClick={() => setMostrarDetalles(!mostrarDetalles)}
          aria-expanded={mostrarDetalles}
        >
          <span>{mostrarDetalles ? 'Ocultar detalles' : 'Ver detalles'}</span>
          <svg 
            className={`chevron ${mostrarDetalles ? 'rotated' : ''}`}
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
          >
            <polyline points="6,9 12,15 18,9"></polyline>
          </svg>
        </button>
        
        <div className={`detalles-producto ${mostrarDetalles ? 'visible' : ''}`}>
          <div className="detalle-item">
            <span className="detalle-label">Medidas:</span>
            <span className="detalle-valor">{producto.medidas}</span>
          </div>
          <div className="detalle-item">
            <span className="detalle-label">Colores disponibles:</span>
            <span className="detalle-valor">{producto.colores}</span>
          </div>
          <a 
            href="https://walink.co/35f966" 
            className="btn-compra"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
            Consultar por WhatsApp
          </a>
        </div>
      </div>
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

  const colores = ["blanco", "hueso", "negro", "marrón", "turquesa"];

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
            <label htmlFor="color-filter">Filtrar por color</label>
            <select 
              id="color-filter"
              value={colorFilter}
              onChange={(e) => setColorFilter(e.target.value)}
            >
              <option value="">Todos los colores</option>
              {colores.map(color => (
                <option key={color} value={color}>
                  {color.charAt(0).toUpperCase() + color.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div className="productos-grid">
            {filteredProducts.map((producto, index) => (
              <Producto key={producto.id} producto={producto} index={index} />
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
            />
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