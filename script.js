const formulario = document.querySelector("#formulario")
const titulo = document.querySelector("#titulo")
const genero = document.querySelector("#genero")
const protagonista = document.querySelector("#protagonista")
const foto = document.querySelector("#foto")
const container = document.querySelector("#container")

const lista_de_animes = [
    {
        titulo: "Dragon Ball Z",
        genero: "Ação / Aventura",
        protagonista: "Goku",
        foto: "https://br.web.img3.acsta.net/pictures/16/03/01/16/59/300795.jpg"
    },
    {
        titulo: "One Piece",
        genero: "Ação / Aventura / Fantasia",
        protagonista: "Monkey D. Luffy",
        foto: "https://br.web.img2.acsta.net/c_310_420/pictures/16/02/03/17/11/571106.jpg"
    },
    {
        titulo: "Naruto",
        genero: "Ação / Aventura / Ninja",
        protagonista: "Naruto Uzumaki",
        foto: "https://br.web.img3.acsta.net/pictures/16/04/11/16/56/089875.jpg"
    },
    {
        titulo: "Death Note",
        genero: "Suspense / Sobrenatural",
        protagonista: "Light Yagami",
        foto: "https://br.web.img3.acsta.net/c_310_420/pictures/14/05/28/20/47/033239.jpg"
    }
]

formulario.addEventListener("submit", (event) => {
    event.preventDefault()
    const novo_anime = {
        titulo: titulo.value.toUpperCase(),
        genero: genero.value.toUpperCase(),
        protagonista: protagonista.value.toUpperCase(),
        foto: foto.value
    }
    lista_de_animes.push(novo_anime)
    montar_card()
    formulario.reset()
    titulo.focus()
})

function montar_card(){
    container.innerHTML = ""

    lista_de_animes.forEach((element, index) => {

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
            lista_de_animes.splice(index, 1)
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
