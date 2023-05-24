//SCRIVERE LA LISTA DELLA SPESA CON CICLO WHILE

// Creo un array con gli elementi della lista della spesa
const listaSpesa = ['Pasta', 'Uovo', 'Guanciale', 'Pecorino', 'Sale', 'Pepe Nero', 'Acqua', 'Altro Vino'];

// Ottengo il riferimento all'elemento <ul> della lista della spesa nel documento HTML
const lista = document.getElementById('lista_spesa');

// Inizializzo un contatore per tenere traccia dell'indice corrente nell'array
let counter = 0;

// Utilizzo un ciclo while per generare gli elementi della lista della spesa nell'HTML
while (counter < listaSpesa.length) {

    // Costruisco il markup HTML per un singolo elemento della lista
    let item = `<li>${listaSpesa[counter]}</li>`;
    
    // Aggiungo l'elemento alla lista della spesa nell'HTML
    lista.innerHTML += item;
    
    // Incremento il contatore per passare all'elemento successivo nell'array
    counter++;
}
