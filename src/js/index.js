/*
Objetivo 1 - Quando o usuário clicar no botão de seleção de plataformas deve exibir uma caixa com todos as opções de plataformas.

Passo 1: Pegar o botão de seleção de plataformas no JS para poder verificar quando o usuário clicar em cima dele.
Passo 2: Pegar o elemento do conteúdo que precisa ser exibido.
Passo 3: Pegar o clique do usuário no JS.
Passo 4: Quando o usuário clicar, adicionar a classe ativo na listagem de opções dentro do botão para que o conteúdo seja exibido.

Objetivo 2 - Caso a lista com as opções de plataformas já esteja aberto e o usuário clique em cima do botão, o conteúdo deve ser ocultado.

Passo: 1 Verificar se o conteúdo já está sendo exibido, se sim, devemos remover a classe ativo para que ele oculte o conteúdo novamente.
*/

const botao = document.querySelector(".btn-plataforma");
const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

botao.addEventListener("click", () => {
  elementoPlataformas.classList.toggle("ativo");
});



