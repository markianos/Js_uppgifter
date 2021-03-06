// alert('min JS koppling fungerar och är redo att rocka');

const todoForm = document.querySelector('#todoForm');                                                   // deklarerar att todoForm refererar till mitt formulär
const input = document.querySelector('#todoInput')                                                      // deklarerar att input refererar till id #todoInput 
const btn = document.querySelector('#btn');                                                             // deklarerar att btn refererar till min min knapp med id #btn
const output = document.querySelector('#output');                                                       // deklarerar att const output är id #output i mitt html dokument

let todos = []                                                                                          // Skapar en todos array som är en let, vilket senare kan ändras   

/* ------------------------------->   fetchTodos / hämta json <------------- */

const fetchTodos = () => {                                                                              // skapar funktionen fetchTodos
    //fetch('https://jsonplaceholder.typicode.com/todos/?userId=2/?_limit=10')                          // hämtar/fetchar vår json placeholders med user id 2 och en limit på 10st objekt
    fetch('https://jsonplaceholder.typicode.com/todos/?_limit=10')                                      // hämtar/fetchar vår json placeholders en limit på 10st objekt
        .then(res => res.json())                                                                        // resultaten från json databas
        .then(data => {                                                                                 // data från json
            todos = data;                                                                               // data från json läggs in i vår todos array
            console.log(todos);
            listTodos();                                                                                // funktionen listTodos()
        })
}

const listTodos = () => {                                                                               // skapar funktionen listTodos()
    output.innerHTML = '';                                                                              // skapar tomt innehåll i min output
    todos.forEach(todo => {                                                                             // för varje objekt/todo i min array todos
        newTodo(todo);                                                                                  // skapa en newTodo() där vi placerar varje objekt
    })
}
fetchTodos();                                                                                           // kör funktionen fetchTodos() för att hämta våra todos




/* ------------------------------->   newTodo / Mall för att skapa ny todo <------------- */

const newTodo = (todo) => {                                                                             // skapar funktionen newTodo som tar in "todo"
    
    let taskWrapper = document.createElement('div');                                                    // skapar en div i html med id "taskWrapper"
    taskWrapper.classList.add('border', 'rounded', 'bg-white', 'p-2', 'mb-2');                          // lägger till klasser till vår div

    let taskDiv = document.createElement('div');                                                        // skapar en div i html med id "taskDiv"
    taskDiv.classList.add('text', 'p-2', 'd-flex', 'justify-content-between', 'align-items-center');    // lägger till klasser till vår div

    let todoTitle = document.createElement('h4');                                                       // skapar ett h4 element
    todoTitle.classList.add('ps-2', 'm-0');                                                             // lägger till klasser
    todoTitle.innerText = todo.title;                                                                   // sätter att vår h4 ska skriva ut todo.title, som vi hämtar från json data

    let btnTrash = document.createElement('button');                                                    // skapar en button med id btnTrash
    btnTrash.classList.add('btn-trash', 'btn', 'btn-danger');                                           // lägger till klasser
    //btnTrash.addEventListener('click',(e) => {                                                        // skapar en eventlistner för btnTrash som lyssnar på click
    //  console.log(e.target.parentNode.parentNode)                                                     // hämtar parent elementet vid musklick och skriver ut i konsolen
    //})

    let trashIcon = document.createElement('i');                                                        // lägger till en ikon med id "trashIcon"
    trashIcon.classList.add('fas', 'fa-trash-alt');                                                     // lägger till klasser (hämtas från font-awsome)

    taskDiv.appendChild(todoTitle);                                                                     // lägger in todoTitle som child i taskDiv
    taskDiv.appendChild(btnTrash);                                                                      // lägger in btnTrash som child i taskDiv
    btnTrash.appendChild(trashIcon);                                                                    // lägger in trashIcon som child i btnTrash
    taskWrapper.appendChild(taskDiv);                                                                   // lägger in taskDiv som child i taskWrapper
    output.appendChild(taskWrapper);                                                                    // lägger in taskWrapper som child i output

}
/* ------------------------------->   addTodo / skapa ny todo <------------- */

const addTodo = (title) => {                                                                            // skapa funktionen addTodo och stoppa in title
    fetch('https://jsonplaceholder.typicode.com/todos', {                                               // fetch json placeholder
        method: 'POST',                                                                                 // metoden är POST för att skriva ut
        headers: {                                                                                      
            'Content-type': 'application/json; charset=UTF-8',                                          // vad för typ av innehåll är det
        },
        body: JSON.stringify({                                                                          // gör om till JSON från javascript
            title,                                                                                      // skriver ut title som vi anger i vår input
            userId: 2,                                                                                  // skriver ut som user 2
            completed: false                                                                            // vår todo är inte avklarad, det är alltså false
        })
    })
    .then(res => res.json())                                                                            // sen får vi respons från json
    .then(data => {                                                                                     // sen får vi data tillbaka från json
        console.log(data)                                                                               // skriver ut till console om vi så vill

        let newTodo = {                                                                                 // deklarerar att newTodo ska innehålla följande... 
            ...data,                                                                                    // vi spread'ar vår data
            id: Date.now().toString()                                                                   // fastställer ID till unikt ID och inte 201
        }
        console.log(newTodo);                                                                           // skriver till console vår newTodo om vi så vill
        todos.unshift(newTodo);                                                                         // lägger till newTodo i början av vår array så det kommer först
        listTodos();                                                                                    // listar våra todos med funktionen listTodos()
    })
}



/* ------------------------------->   Validering av Todo input <------------- */

const todoValidate = (id) => {                                                                          // Skapar en funktion som heter todovalidate
    const input = document.querySelector(id);                                                           // deklarerar en const input som pekar på id
    const error = document.querySelector(id + '-error');                                                // deklarerar en const error som pekar på  ID "# + -error"

    if (input.value.trim() === '') {                                                                    // om värdet är tomt så...
        error.innerText = "You can't do nothing...Enter a todo please"                                  // skriv ut i ID-error  "Enter a todo please"
        input.focus();                                                                                  // fokus kring input
        return false;                                                                                   // returnera false dvs. avbryt
    }
    else {                                                                                              // annars...
        error.innerText = ''                                                                            // skriv inte ut något i ID-error    
        return true;                                                                                    // returnera true och gå vidare
    }
}

/* ------------------>   Eventlistner på todoForm <------------- */
todoForm.addEventListener('submit', e => {
    e.preventDefault();

    todoValidate('#todoInput');                                                                         // kör vår todoValidate funktion på id #todoInput
      
      if( todoValidate('#todoInput')){                                                                  // Om funktionen todoValidate går igenom på #todoInput så...
        addTodo(input.value)                                                                            // kör funktionen addTodo med värdet som finns i input.value
        input.value = '';                                                                               // ändra värdet i input till tomt
      }

})

/* ------------------>   Eventlistner på output click med funktionen deleteTodo() <------------- */

output.addEventListener('click', deleteTodo);                                                           // sätter en eventlistner att köra deleteTodo när click aktiveras
        
function deleteTodo(e) {                                                                                // funktionen deleteTodo()
    const item = e.target;                                                                              // deklarerar item som event.target
    if(item.classList[0] === 'btn-trash'){                                                              // OM item har en klass med "btn-trash" som första klass så...
        const parent = item.parentNode.parentNode;                                                      // deklarerar parent att vara två föräldrar över vår item
        parent.remove();                                                                                // ta bort parent
    }
}
 

