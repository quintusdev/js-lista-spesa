//SCRIVERE LA LISTA DELLA SPESA CON CICLO WHILE

//CREO ARRAY CON LA LISTA DELLA SPESA
const listaSpesa = ['Pasta', 'Uovo', 'Guanciale', 'Pecorino', 'Sale', 'Pepe Nero', 'Acqua'];

//RICHIAMO L'ELEMENTO UL 
const lista = document.getElementById('lista_spesa');

let counter = 0;

while (counter < listaSpesa.length) {
      
    let item = `<li>${listaSpesa[counter]}</li>`;
    lista.innerHTML += item;
    counter++;
}
