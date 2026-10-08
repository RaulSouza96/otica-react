import React from "react";
export default function SecaoProdutos() {
  return (
    <section className="produtos" id="produtos">
      <div className="limite">
        <h2>Nossos produtos</h2>
        <p>
          Trabalhamos com óculos de grau, óculos de sol, lentes transition nos
          modelos masculino, feminino e infantil.
        </p>
        <p>
          Todos os nossos preços são acessíveis e contam com a melhor qualidade
          do mercado.
        </p>
        <div className="grade-produtos">
          <article className="produto">
            <h3>Óculos de grau</h3>
            <img src="/assets/oculos01.png" alt="Óculos de grau" />
            <p>R$ 500,00</p>
          </article>
          <article className="produto">
            <h3>Óculos transition</h3>
            <img src="/assets/oculos02.png" alt="Óculos transition" />
            <p>R$ 750,00</p>
          </article>
          <article className="produto">
            <h3>Óculos de sol</h3>
            <img src="/assets/oculos03.png" alt="Óculos de sol" />
            <p>R$ 700,00</p>
          </article>
          <article className="produto">
            <h3>Óculos infantil</h3>
            <img src="/assets/oculos04.png" alt="Óculos infantil" />
            <p>R$ 500,00</p>
          </article>
        </div>
        <h3>Todos os nossos produtos incluem:</h3>
        <ul className="beneficios">
          <li>Garantia de 1 ano</li>
          <li>Manutenção preventiva</li>
          <li>Descontos especiais na compra da segunda unidade</li>
          <li>Flexibilidade de pagamento</li>
        </ul>
      </div>
    </section>
  );
}
