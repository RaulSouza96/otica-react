Óticas Vida
Projeto em React com Vite.

Executar no computador
Abra a pasta no VS Code.
Abra o terminal e execute npm install.
Execute npm run dev.
Organização
src/main.jsx: inicia o React.
src/App.jsx: reúne os componentes e configura a animação de rolagem.
src/components/Topo.jsx: logo e menu.
src/components/SecaoCapa.jsx: apresentação inicial.
src/components/SecaoProdutos.jsx: produtos, preços e benefícios.
src/components/SecaoSobre.jsx: informações da loja.
src/components/SecaoContato.jsx: contatos e redes sociais.
src/components/Rodape.jsx: texto final da página.
src/styles.css: cores, tamanhos e adaptações para celular.
public/assets: imagens utilizadas.
A animação usa o IntersectionObserver do navegador. Quando um elemento aparece na tela, recebe a classe is-visible. O CSS faz a transição de posição e transparência.

Publicar na Vercel
Framework: Vite. Comando de build: npm run build. Pasta de saída: dist
