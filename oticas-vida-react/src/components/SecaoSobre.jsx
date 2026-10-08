import React from "react";
export default function SecaoSobre() {
  return (
    <section className="sobre" id="sobre">
      <div className="limite">
        <h2>QUEM SOMOS NÓS?</h2>
        <p>
          Fundada em 2001, em Nova Iguaçu - Rio de Janeiro, a Óticas vida
          iniciou suas atividades focada no atendimento ao público de renda mais
          baixa, sempre com o objetivo de proporcionar ao cliente bom
          atendimento, qualidade e preço baixo.
        </p>
        <div className="grade-sobre">
          <img
            src="/assets/loja.png"
            alt="Produtos disponíveis em uma de nossas lojas"
          />
          <article>
            <h3>NOSSAS FILIAIS</h3>
            <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
          </article>
          <article>
            <h3>ATENDIMENTO FLEXÍVEL</h3>
            <p>Nossa equipe é treinada para te atender</p>
          </article>
          <img src="/assets/atendimento.png" alt="Atendimento ao cliente" />
        </div>
      </div>
    </section>
  );
}
