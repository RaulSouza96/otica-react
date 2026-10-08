import React from "react";
export default function Topo() {
  return (
    <header>
      <div className="limite topo">
        <a href="#inicio" aria-label="Óticas Vida — início">
          <img src="/assets/logo.png" alt="Óticas Vida" />
        </a>
        <nav aria-label="Menu principal">
          <a href="#produtos">PRODUTOS</a>
          <a href="#sobre">SOBRE</a>
          <a href="#contato">CONTATO</a>
        </nav>
      </div>
    </header>
  );
}
