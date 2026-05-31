const formulario = document.querySelector("#formulario")
const titulo = document.querySelector("#titulo")
const genero = document.querySelector("#genero")
const protagonista = document.querySelector("#protagonista")
const foto = document.querySelector("#foto")
const container = document.querySelector("#container")
const campoPesquisa = document.querySelector("#pesquisa")

const lista_de_animes = [
    {
        titulo: "Dragon Ball Z",
        genero: "Ação / Aventura",
        protagonista: "Goku",
        foto: "https://m.media-amazon.com/images/M/MV5BNmFiM2FkYTYtY2FiOS00ZWJkLTkyOTgtNmFmODI4NjcwNDgzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
    {
        titulo: "One Piece",
        genero: "Ação / Aventura / Fantasia",
        protagonista: "Monkey D. Luffy",
        foto: "https://br.web.img2.acsta.net/pictures/16/02/03/17/11/571106.jpg"
    },
    {
        titulo: "Naruto",
        genero: "Ação / Aventura / Ninja",
        protagonista: "Naruto Uzumaki",
        foto: "https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg"
    },
    {
        titulo: "Death Note",
        genero: "Suspense / Sobrenatural",
        protagonista: "Light Yagami",
        foto: "https://br.web.img3.acsta.net/pictures/14/05/28/20/47/033239.jpg"
    }
]

formulario.addEventListener("submit", (event) => {
    event.preventDefault()
    const novo_anime = {
        titulo: titulo.value,
        genero: genero.value,
        protagonista: protagonista.value,
        foto: foto.value
    }
    lista_de_animes.unshift(novo_anime)
    montar_card()
    formulario.reset()
    titulo.focus()
})

function montar_card(){
    container.innerHTML = ""

    const termoBusca = campoPesquisa ? campoPesquisa.value.toLowerCase() : ""
    const listaFiltrada = lista_de_animes.filter(anime => anime.titulo.toLowerCase().includes(termoBusca))

    listaFiltrada.forEach((element, index) => {

        const novo_card = document.createElement("div")
        novo_card.className = "card"

        const nova_foto = document.createElement("img")
        nova_foto.src = element.foto
        nova_foto.alt = `Imagem do ${element.titulo}`

        const novo_titulo = document.createElement("h2")
        novo_titulo.textContent = element.titulo

        const novo_genero = document.createElement("p")
        novo_genero.textContent = `Gênero: ${element.genero}`

        const novo_protagonista = document.createElement("p")
        novo_protagonista.textContent = `Nome do Protagonista: ${element.protagonista}`

        const botao_excluir = document.createElement("button")
        botao_excluir.textContent = "Excluir"

        botao_excluir.addEventListener("click", () => {
    const indiceOriginal = lista_de_animes.indexOf(element)
    lista_de_animes.splice(indiceOriginal, 1)
    montar_card()
})

        novo_card.append(
            nova_foto,
            novo_titulo,
            novo_genero,
            novo_protagonista,
            botao_excluir
        )

        container.appendChild(novo_card)
    })
}

montar_card()

campoPesquisa.addEventListener("input", montar_card)
