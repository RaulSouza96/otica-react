import React, { useEffect, useRef } from "react";
import Topo from "./components/Topo.jsx";
import Rodape from "./components/Rodape.jsx";
import SecaoCapa from "./components/SecaoCapa.jsx";
import SecaoProdutos from "./components/SecaoProdutos.jsx";
import SecaoSobre from "./components/SecaoSobre.jsx";
import SecaoContato from "./components/SecaoContato.jsx";
import "./styles.css";

// Cada parte da página está em um componente separado.
export default function App() {
  const pagina = useRef(null);
  // Mostra os elementos quando eles entram na tela.
  useEffect(() => {
    if (
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
      return;
    const elementos = pagina.current.querySelectorAll(
      ".produtos h2, .produtos > .limite > p, .produto, .produtos > .limite > h3, .beneficios, .sobre h2, .sobre > .limite > p, .grade-sobre > *, .contato h2, .contato > .limite > p, .bloco",
    );
    const observador = new IntersectionObserver(
      (itens) => {
        itens.forEach((item) => {
          if (item.isIntersecting) {
            item.target.classList.add("is-visible");
            observador.unobserve(item.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -20px 0px" },
    );
    elementos.forEach((elemento) => {
      if (elemento.matches(".produto, .grade-sobre > *, .bloco")) {
        const indice = Array.from(elemento.parentElement.children).indexOf(
          elemento,
        );
        elemento.style.setProperty("--reveal-delay", `${(indice % 2) * 100}ms`);
      }
      elemento.classList.add("reveal");
      observador.observe(elemento);
    });
    return () => {
      observador.disconnect();
      elementos.forEach((elemento) =>
        elemento.classList.remove("reveal", "is-visible"),
      );
    };
  }, []);
  return (
    <div ref={pagina}>
      <Topo />
      <main>
        <SecaoCapa />
        <SecaoProdutos />
        <SecaoSobre />
        <SecaoContato />
      </main>
      <Rodape />
    </div>
  );
}
