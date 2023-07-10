const StartBTN = window.document.getElementById ('Titulo2Top')
const ImgCavaleiro = window.document.getElementById ('cavaleiro')
const InformSobre = window.document.getElementById ('DivAreaSobre')
const ImgProjetoPHP = window.document.getElementById ('ImagemAmigoSecreto')  
const ImgProjetoCrono = window.document.getElementById ('ProjetoCronometro')

/*Funções*/

function scrollToSection () {
    const section = window.document.getElementById ('SobreMimTitulo');
    section.scrollIntoView ({behavior: "smooth"});

}

function OpenModalHTML () {
    document.getElementById ('ModalHTML').style.display = "block";
}

function OpenModalCSS () {
    document.getElementById ('ModalCSS').style.display = "block";
}

function OpenModalJS () {
    document.getElementById ('ModalJS').style.display = "block";
}

function OpenModalNode () {
    document.getElementById ('ModalNode').style.display = "block";
}

function OpenModalGit () {
    document.getElementById ('ModalGit').style.display = "block";
}

function CloseModalHTML () {

}

function CloseModalCSS () {

}

function CloseModalJS () {

}

function CloseModalNode () {

}

function CloseModalGit () {

}