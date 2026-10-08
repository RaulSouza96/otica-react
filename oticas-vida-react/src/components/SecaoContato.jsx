import React from "react";
export default function SecaoContato() {
  return (
    <section className="contato" id="contato">
      <div className="limite">
        <h2>Fale conosco</h2>
        <p>
          Não perca tempo, venha conhecer uma de nossas lojas ou entre em
          contato através de nossas redes sociais ou da central de atendimento.
        </p>
        <div className="blocos-contato">
          <div className="bloco">
            <h3>Nossos Contatos</h3>
            <p>
              <img src="/assets/local.png" alt="" />
              Nova Iguaçu, RJ
            </p>
            <p>
              <img src="/assets/telefone.png" alt="" />
              <a href="tel:+552199999999">(21) 9999-9999</a>
            </p>
            <p>
              <img src="/assets/email.png" alt="" />
              <a href="mailto:contato@oticavida.com">contato@oticavida.com</a>
            </p>
          </div>
          <div className="bloco">
            <h3>Nossas Redes Sociais</h3>
            <p>
              <img src="/assets/fb.png" alt="Facebook" />
              /OticaVida
            </p>
            <p>
              <img src="/assets/ig.png" alt="Instagram" />
              @oticavidarj
            </p>
            <p>
              <img src="/assets/tt.png" alt="Twitter" />
              @oticavidarj
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
