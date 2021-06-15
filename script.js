const imagem = document.querySelector ('img');
const nomedoper = document.getElementById('nomeDoPersonagem');
const numeroMaximoDePersonagens = 671;

let nomeDoPersonagem;

genernumeroaleatorio = () => {
    return Math.floor(Math.random() * numeroMaximoDePersonagens);
}

getCharacter = () => {
    const id = gerarnumeroaleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${id}`, {
    method: 'GET',
    headers: {
    Accept: 'application/json',
    "Content-Type": 'application/json'
    }
    }).then((response) => response.json()).then((data) => {
    imagem.src = data.image;
    nomedoper = data.name;
    })
}
Refresh = () => {
    this.getCharacter()
    nomedoper = nomeDoPersonagem.toLowerCase();
}

button.onclick = () => "window.location.reload();" > Refresh;