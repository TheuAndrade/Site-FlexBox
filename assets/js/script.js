const textarea = document.querySelector('textarea');
const tweetar = document.querySelector('button');
const feed = document.querySelector(".conteudoPrincipa__listaTweets");

function pegarTweet(event){

    event.preventDefault();
    const tweetTextarea = textarea.value;
    criarTweet(tweetTextarea);

}

tweetar.addEventListener('click', pegarTweet);

function criarTweet(tweetText){
    
    let data = new Date()
    let hora = data.getHours()
    let minutos = data.getMinutes()

    const tweet = {
        nome: "Daniel",
        foto: "./assets/img/ProfilePic.png",
        usuario: "@danielOficial",
        texto: tweetText,
        tempo: `${hora}:${minutos}`
    }

    listarTweet(tweet)

}

function listarTweet(tweet){

    const {nome,foto,usuario,texto,tempo} = tweet


    let li = document.createElement('li')
    li.classList.add("conteudoPrincipal__tweet")
   
    let img = document.createElement('img')
    img.src = foto
    img.classList.add("tweet__fotoPerfil")
    
    let div = document.createElement('div')
    div.classList.add("tweet__conteudo")

    let h2 = document.createElement('h2')
    h2.innerText = nome
    
    let p = document.createElement('p')
    p.innerText = texto
    
    let span = document.createElement('span')
    span.innerText = `${usuario} - ${tempo}`

    
    div.appendChild(h2)
    div.appendChild(span)
    div.appendChild(p)

    li.appendChild(img)
    li.appendChild(div)

    console.log(li)

    feed.appendChild(li)
    textarea.value = " "
}
