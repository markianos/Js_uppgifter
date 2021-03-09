// alert('min JS koppling fungerar och är redo att rocka');

const todoForm = document.querySelector('#todoForm');               // deklarerar att todoForm refererar till mitt formulär
const input = document.querySelector('#todoInput')                  // deklarerar att input refererar till id #todoInput 
const btn = document.querySelector('#btn');                         // deklarerar att btn refererar till min min knapp med id #btn
const output = document.querySelector('#output');                   // deklarerar att const output är id #output i mitt html dokument

let todos = []                                                     // Skapar en todos array som är en let, vilket senare kan ändras   

const fetchTodos = () => {                                          // skapar funktionen fetchTodos
    fetch('https://jsonplaceholder.typicode.com/todos')             // hämtar/fetchar vår json placeholders
        .then(res => res.json())                                    // resultaten från json databas
        .then(data => {                                             // datan från json
            todos = data;                                           // data från json läggs in i vår todos array
            console.log(todos);
        })
}
fetchTodos();