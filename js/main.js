const btnAdd = document.querySelector(".btn-danger");
const emptyNote = document.querySelector("#emptyDiv");
const notes = document.querySelector("#notes"); // donde se van a agregar las notas
const formNote = document.querySelector("#form");
const btnSuccess = document.querySelector(".btn-success");
const newDiv = document.querySelector(".card");

const logs = {
    title: document.querySelector("#floatingTextarea"),
    message: document.querySelector("#floatingTextarea2"),
}

const notas =[
    console.log(notes),
];

document.addEventListener("DOMContentLoaded", () => {

    if(notes.innerHTML.trim() === ""){
        console.log("DOM Completo");
        console.log("el div esta vacio");
    } else {
        console.log("el div tiene contenido");
    }    
});


function openNotesMenu(){
    console.log("menu abierto");
    btnAdd.innerHTML = "X";
    if(btnAdd.innerHTML == "X"){
        console.log("hola");
        emptyNote.classList.add('d-none');
        formNote.classList.remove('d-none');
        notes.classList.add('d-none');
        
    }

    btnAdd.removeEventListener("click", openNotesMenu);
    btnAdd.addEventListener("click", closeNotesMenu);

}

function closeNotesMenu(){
    console.log("menu cerrado");
    btnAdd.innerHTML = "+";
    emptyNote.classList.remove('d-none');
    formNote.classList.add('d-none');
    notes.classList.remove('d-none');

    btnAdd.removeEventListener("click", closeNotesMenu);
    btnAdd.addEventListener("click", openNotesMenu);
}

btnAdd.addEventListener("click", openNotesMenu);

//a?adir un div dentro del div vacio que hace referencia arriba
// mas adelante veremos como guardarlo ya sea en una API o una data
function agregarNota(){

    let txtTitle = logs.title.value;
    let txtMessage = logs.message.value;
    // Crear los elementos de la tarjeta
    let card = document.createElement('div');
    card.className = 'card mt-2';
    card.style.width = '18rem';

    let img = document.createElement('img');
    img.className = 'card-img-top';
    img.src = '/assets/notas.jpg';
    img.alt = '#';

    let cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    let cardTitle = document.createElement('h5');
    cardTitle.className = 'titulo';
    cardTitle.textContent = `${txtTitle}`;

    let cardText = document.createElement('p');
    cardText.className = 'mensaje';
    cardText.textContent = `${txtMessage}`;

    let cardLink = document.createElement('a');
    // cardLink.href = '#';
    cardLink.className = 'btn btn-primary mb-2 ml-2';
    cardLink.style.width = "14rem"
    cardLink.textContent = 'opciones de carta';

    // Estructurar la tarjeta
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);

    card.appendChild(img);
    card.appendChild(cardBody);
    card.appendChild(cardLink);

    // Agregar la tarjeta al div
    notes.appendChild(card);
    notas.push(card);
    
    notes.classList.remove('d-none');

    if(notes.innerHTML.trim() != ""){
        console.log("tiene contenido");
        emptyNote.classList.add('d-none');
    } else {
        return "no tiene contenido";
    }
    
    

}



function notaAgregada(){
    console.log("nota agregada");
    alert("nota agregada");
    agregarNota();
    closeNotesMenu();
    emptyNote.classList.add('d-none');
    logs.title.value = "";
    logs.message.value = "";
}

btnSuccess.addEventListener("click", notaAgregada);