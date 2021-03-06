// alert('min JS koppling fungerar och är redo att rocka');

const todoForm = document.querySelector('#todoForm');
const btn = document.querySelector('#btn');                         // deklarerar att const checkBox är id #toc i mitt html dokument
const output = document.querySelector('#output');                   // deklarerar att const output är id #output i mitt html dokument

const users = []                                                    // skapar en users som är en array

class User {                                                        // en class som är user med hjälp av av en constructor 
    constructor(firstName) {              // constructor innehållande fn, ln, em, add
        this.firstName = firstName;                                 //firstName deklareras
        this.id = Date.now().toString()                             //ID deklareras och funktion toString() kökrs för att göra om till en string/text
    }
}

/* ------------------------------->    FUNKTIONEN createUser() */
const createUser = (firstName, lastName, email, address, skill) => {               // skapar funktionen createUser 
    const user = new User(firstName, lastName, email, address, skill);             // deklarerar const user att vara new User  

    users.push(user);                                                       // lägger till/pushar till vår array users[] 
    output.insertAdjacentHTML('beforeend', newUser(user))                   // väljer vår output och att vi ska skriva ut vår template (nedan) i HTML innan slutet av vårt element som last child
    console.log(users);

}

/* ------------------------------->    FUNKTIONEN newUser() med TEMPLATE */

const newUser = (user) => {                                                 // skapar newUser med template av html sklett som placeras innanför back-ticks och där information hämtas från vår user input
    let template = `
    <div class="border rounded bg-white p-2 d-flex justify-content-between align-items-center mb-2">
        <div class="text">
            <h4 class="ps-2 m-0">${user.firstName}</h4>
        </div>
        <div class="buttons p-2">
            <button class="btn btn-danger"><i class="fas fa-trash-alt"></i></button>
         </div>
    </div>   
    `
    return template                                                         // returnerar vår template                                                        
}


/* ------------------------------->   Validering av Todo input <------------- */

const todoValidate = (id) => {                                      // Skapar en funktion som heter todovalidate
    const input = document.querySelector(id);                       // deklarerar en const input som pekar på id
    const error = document.querySelector(id + '-error');            // deklarerar en const error som pekar på  ID "# + -error"

    if (input.value.trim() === '') {                                // om värdet är tomt så...
        error.innerText = 'Enter a todo please'                     // skriv ut i ID-error  "Enter a todo please"
        input.focus();                                              // fokus kring input
        return false;                                               // returnera false dvs. avbryt
    }
    else {                                                          // annars...
        error.innerText = ''                                        // skriv inte ut något i ID-error    
        return true;                                                // returnera true och gå vidare
    }
}


/* ------------------------------->    RESET FORMULÄR */

const resetTodo = () => {                                           // deklarera resetTodo som funktion
    document.querySelectorAll('input').forEach(input => {           // välja varje input och gör för varje input följande
      input.value = '';                                             // Vidsa som tom (reset)
    })
  }

/* ------------------------------->    ADD EVENTLISTNER PÅ SUBMIT */

todoForm.addEventListener('submit', e => {                                   // lyssnar till en submit i vårt event
    e.preventDefault();                                                      // förhindrar att sidan laddas om
        
    todoValidate('#todoInput');                                              // kör vår todoValidate funktion på id #todoInput
      
      if( todoValidate('#todoInput')){                                       // Om funktionen todoValidate går igenom på #todoInput så,,,
      createUser(todoInput.value);                                           // kör createUser funktionen med värdet i todoInput
      }

      resetTodo();                                                          // kör vår resetTodo funktion och reset'ar vår input

})
    