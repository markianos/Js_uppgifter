// alert('min JS koppling fungerar och är redo att rocka');

const todoForm = document.querySelector('#todoForm');               // deklarerar att todoForm refererar till mitt formulär
const input = document.querySelector('#todoInput')                  // deklarerar att input refererar till id #todoInput 
const btn = document.querySelector('#btn');                         // deklarerar att btn refererar till min min knapp med id #btn
const output = document.querySelector('#output');                   // deklarerar att const output är id #output i mitt html dokument

let todos = []                                                     // Skapar en todos array som är en let, vilket senare kan ändras   

const fetchTodos = () => {                                          // skapar funktionen fetchTodos
    fetch('https://jsonplaceholder.typicode.com/todos/?_limit=10')             // hämtar/fetchar vår json placeholders
        .then(res => res.json())                                    // resultaten från json databas
        .then(data => {                                             // datan från json
            todos = data;                                           // data från json läggs in i vår todos array
            console.log(todos);
            listTodos();                                            // funktionen listTodos()
        })
}
fetchTodos();

const listTodos = () => {                                           // skapar funktionen listTodos()
    output.innerHTML = '';                                          // skapar tomt innehåll i min output
    todos.forEach(todo => {                                         // för varje objekt/todo i min array todos
        newTodo(todo);                                              // skapa en newTodo() där vi placerar varje objekt
    })
}

const newTodo = (todo) => {                                             // skapar funktionen newTodo som tar in "todo"
    
    let taskWrapper = document.createElement('div');                                                    // skapar en div i html med id "taskWrapper"
    taskWrapper.classList.add('border', 'rounded', 'bg-white', 'p-2', 'mb-2');                          // lägger till klasser till vår div

    let taskDiv = document.createElement('div');                                                        // skapar en div i html med id "taskDiv"
    taskDiv.classList.add('text', 'p-2', 'd-flex', 'justify-content-between', 'align-items-center');    // lägger till klasser till vår div

    let todoTitle = document.createElement('h4');                                                       // skapar ett h4 element
    todoTitle.classList.add('ps-2', 'm-0');                                                             // lägger till klasser
    todoTitle.innerText = todo.title;                                                                   // sätter att vår h4 ska skriva ut todo.title, som vi hämtar från json data

    let btnTrash = document.createElement('button');                                                    // skapar en button med id btnTrash
    btnTrash.classList.add('btn', 'btn-danger');                                                        // lägger till klasser

    let trashIcon = document.createElement('i');                                                        // lägger till en ikon med id "trashIcon"
    trashIcon.classList.add('fas', 'fa-trash-alt');                                                     // lägger till klasser (hämtas från font-awsome)

    taskDiv.appendChild(todoTitle);                                                                     // lägger in todoTitle som child i taskDiv
    taskDiv.appendChild(btnTrash);                                                                      // lägger in btnTrash som child i taskDiv
    btnTrash.appendChild(trashIcon);                                                                    // lägger in trashIcon som child i btnTrash
    taskWrapper.appendChild(taskDiv);                                                                   // lägger in taskDiv som child i taskWrapper
    output.appendChild(taskWrapper);                                                                    // lägger in taskWrapper som child i output

}