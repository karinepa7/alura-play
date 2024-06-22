async function listaVideos() {
  const conexao = await fetch("http://localhost:3000/videos");
  const conexaoConvertida = await conexao.json();
  return conexaoConvertida;
}

export const conectaApi = {
  listaVideos,
};

const lista = document.querySelector("[data-lista]"); //data attributes
function constroiCard(titulo, descricao, url, imagem) {
  const video = document.createElement("li");
  video.className = "videos__item";
  video.innerHTML = `<iframe width="100%" height="72%" src="${url}"
                title="${titulo}" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            <div class="${descricao}">
                <img src="${imagem}" alt="logo canal alura">
                <h3>${titulo}</h3>
                <p>${descricao}</p>`;
  return video;
}

async function listaVideos() {
  const listaApi = await conectaApi.listaVideos();
  listaApi.forEach((elemento) =>
    lista.appendChild(
      constroiCard(
        elemento.titulo,
        elemento.descricao,
        elemento.url,
        elemento.imagem
      )
    )
  );
}
listaVideos();
