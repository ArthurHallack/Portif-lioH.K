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