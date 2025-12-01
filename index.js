// cria um evento de clique
window.addEventListener("click", function(){

    // faz o fundo mudar de cor(quando for branco muda pra preto e quando for preto muda pra branco)
    if(this.document.body.style.background === "black"){
        // aqui eu seleciono o fundo e os paragrafos que eu quero mudar de cor
        document.body.style.background = "white"
        document.getElementById("h1a").style.color = "black"
        document.getElementById("h1b").style.color = "black"
        document.getElementById("h1c").style.color = "black"
    } else {
        document.body.style.background = "black"
        document.getElementById("h1a").style.color = "white"
        document.getElementById("h1b").style.color = "white"
        document.getElementById("h1c").style.color = "white"
    }
    
})

// cria o evento de tecla pressionada
window.addEventListener("keydown", event=>{

// aqui ele muda o texto do titulo com base na tecla que for pressionada (selecionando o titulo e alternando o valor dele)
    if(event.key == "s" || event.key == "S") {
        document.getElementById("porscheTitulo").innerHTML = "Sonho sobre Rodas";
    } else 
        if(event.key == "p" || event.key == "P") {
            document.getElementById("porscheTitulo").innerHTML = "PORSCHE";
        }
        else

            // aqui se for usada a tecla de "+", chama a função e aumenta o titulo
            if(event.key == "+") {
                aumentarZoom(event)
            }
            else 
                // aqui se for usada a tecla de "-", chama a função e diminui o titulo
                if(event.key == "-") {
                    diminuirZoom(event)
                }
                else
                    //cria evento para quando clicar enter mudar a escrita
                    if(event.key == "Enter") {
                        let textoC = document.getElementById("responsivo")
                        textoC.innerHTML = "O SITE É RESPONSIVEL :0"
                    }
                    else
                        //cria evento para quando clicar enter mudar a escrita
                        if(event.key == "Shift") {
                        let textoC = document.getElementById("responsivo")
                        textoC.innerHTML = "Porsche. There is no substitute."
                    }
})

//cria a variavel pra executar as funções
    let palavra = document.getElementById("contato");

// quando o mouse passa ativa a função
palavra.addEventListener("mouseover", event=>{
    passarMouse(event);
}) 

// quando o mouse sai de cima ativa a função
palavra.addEventListener("mouseleave", event=> {
    tirarMouse(event);
})


// função para aumentar a logo
function aumentarZoom(event) {
    let titulo = document.getElementById("porscheTitulo");
    //pega apenas o valor inteiro do tamanho da fonte
    let tamanho = parseInt(window.getComputedStyle(titulo).fontSize);
    tamanho += 25;

    //adiciona o tamanho
    titulo.style.fontSize = tamanho + "px";
}

// função para diminuir a logo
function diminuirZoom(event) {
    let titulo = document.getElementById("porscheTitulo");
    let tamanho = parseInt(window.getComputedStyle(titulo).fontSize);
    tamanho -= 25;
    titulo.style.fontSize = tamanho + "px"
}
 // cria a função do mouse e atribui o valor
function passarMouse(event) {
    palavra.innerHTML = "WILLIAM TASCA BAGATINI";
}

// cria a função do mouse e atribui o valor
function tirarMouse(event) {
    palavra.innerHTML = "CONTATO"
}