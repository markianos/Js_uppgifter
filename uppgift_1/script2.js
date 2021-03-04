// alert('min JS koppling fungerar och är redo att rocka');

const regForm = document.querySelector('#regForm');                 // deklarerar att const regForm är id #regForm i mitt html dokument, vilket innesluter hela mitt formulär
const firstName = document.querySelector('#firstName')                 // deklarerar att const firstName  är id #firstName i mitt html dokument
const lastName = document.querySelector('#lastName')                // deklarerar att const lastName  är id #lastName i mitt html dokument
const address = document.querySelector('#address')                  // deklarerar att const address  är id #address i mitt html dokument
const email = document.querySelector('#email');                     // deklarerar att const email  är id #email i mitt html dokument
const checkBox = document.querySelector('#toc');                    // deklarerar att const checkBox är id #toc i mitt html dokument
const btn = document.querySelector('#btn');                         // deklarerar att const checkBox är id #toc i mitt html dokument
const output = document.querySelector('#output');                   // deklarerar att const output är id #output i mitt html dokument

const users = []                                                    // skapar en users som är en array

class user {                                                        // en class som är user av en constructor 
    constructor(firstName, lastName, email, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.address = address;
        this.id = Date.now().toString()
    }
}

/* ------------------------------->    VALIDATE FUNKTION FÖR TEXT INPUTS */ 
const validate = (id) => {                                          // Skapar en funktion som heter validate
    const input = document.querySelector(id);                       // deklarerar en const input som pekar på id
    const error = document.querySelector(id + '-error');            // deklarerar en const error som pekar på alla ID "# + -error"

    if(input.value.trim() === '') {
        error.innerText = 'Enter text please'
        input.focus();
        return false;
    }
    else if (input.value.length < 2) {
        error.innerText = 'Enter at least 2 characters'
        return false;
    }
    else {
        error.innerText = ''
        return true;
    }
    
}

const validateCheckBox = (checkbox) => {
    const checkBox = document.querySelectorAll('input:checked');
        
    if (checkBox.length === 0) {
        alert('You must accept the terms and conditions to proceed')                                             // öppnar en alert med meddelandet
        return false 
        console.log('The terms and conditions have not been accepted');
    } else {
        console.log('Terms and conditions are accepted');
        return true
    }
}


/* ------------------------------->    funktion validateEmail */

const validateEmail = (_email) => {                                         // en funktion för validering av email med regular expressions
    if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(_email.value)) {
        _email.classList.add('is-valid');                                   // om email är validerad & giltlig lägg till klassen .is-valid
        _email.classList.remove('is-invalid');                              // om email är validerad & giltlig ta bort klassen .is-invalid
        return true;                                                        // skicka vidare
      }
      else {
        _email.classList.remove('is-valid');                                // om email är validerad som ogiltlig ta bort klassen .is-nvalid
        _email.classList.add('is-invalid');                                 // om email är validerad som ogiltlig lägg till klassen .is-invalid
        
       // _email.focus();                                                     // sätt focus kring email
        return false;                                                       // skicka inte vidare
      }
}

/* ------------------------------->    FUNKTIONEN createUser() */
const createUser = (firstName, lastName, email, address) => {               // skapar funktionen createUser 
    const user = new User(firstName, lastName, email, address);             // deklarerar const user att vara new user

    users.push(user);                                                       // lägger till/pushar till vår array users[] 
    output.insertAdjacentHTML('beforeend', newUser(user))                                           // väljer vår output och att vi ska skriva in HTML innan slutet av vårt element som last child


}

/* ------------------------------->    FUNKTIONEN newUser() med TEMPLATE */

const newUser = (user) => {                                                 // skapar newUser med template av html sklett som placeras innanför backticks och där information hämtas från vår user input
    let template = `                                            
    <div class="border rounded bg-white p-2 d-flex justify-content-between align-items-center mb-2" id="${user.id}">
        <div class="text">
            <h4 class="ps-2 m-0">${user.firstName} ${user.lastName}</h4>
            <p  class="ps-2">${user.address}</p>
            <small class="ps-2 text-danger">${user.email}</small>
        </div>
        <div class="buttons p-2">
            <button class="btn btn-info"><i class="fas fa-user-edit"></i></button>
            <button class="btn btn-danger"><i class="fas fa-trash-alt"></i></button>
        </div>
    </div>    
    `
    return template                                                         
}

 
/* ------------------------------->    ADD EVENTLISTNER PÅ SUBMIT */

regForm.addEventListener('submit', e => {                             // lyssnar till en submit i vårt event
    e.preventDefault();                                                 // förhindrar att sidan laddas om
 
    if(firstName.value !== ''|| firstName.value.length <2 && lastName.value !== '' && email.value !== '' && address.value !== '') { //om inte följande value är tomma...
        createUser(firstName.value, lastName.value, email.value, address.value);                        // öppna createUser funktionen
    }

    validate('#firstName');                                                // kör vår validate funktion på id med firstName
    validate('#lastName');                                                // kör vår validate funktion på id med lastName
    validate('#email');                                                // kör vår validate funktion på id med lastName
    validate('#address');                                                // kör vår validate funktion på id med lastName
    validateEmail(email);
    validateCheckBox('#toc');
    
    /*let firstName = e.currentTarget.firstName.value;                // Skapar en let som firstName från värdet i firstName
    let lastName = e.currentTarget.lastName.value;                  // Skapar en let som lastName från värdet i lastName
    let mail = e.currentTarget.email.value;                        // Skapar en let som från värdet i email
    let address = e.currentTarget.address.value;                    // Skapar en let som address från värdet i address

    let user = {                                                    //skapar USER som ett objekt med olika parametrar
        firstName: document.querySelector('#firstName').value,      // deklarerar att värdet i #firstName ska vara firstName för objektet
        lastName: document.querySelector('#lastName').value,        // deklarerar att värdet i #laststName ska vara lastName för objektet
        mail: document.querySelector('#email').value,              // deklarerar att värdet i #email ska vara email för objektet
        address: document.querySelector('#address').value,          // deklarerar att värdet i #address ska vara address för objektet
        role: document.querySelector('#role').value                 // deklarerar att värdet i #role ska vara address för objektet
    }

    console.log(user)*/
})






/*
    if(!(e.currentTarget.toc.checked)) {                            // om INTE värdet på #toc finns så... (inte iklickat)
        alert('accept')                                             // öppnar en alert med meddelandet
        return false                                                // hoppar ur från hela funktionen och fortsätter inte
    }

    let firstName = e.currentTarget.firstName.value;                // Skapar en let som firstName från värdet i firstName
    let lastName = e.currentTarget.lastName.value;                  // Skapar en let som lastName från värdet i lastName
    let email = e.currentTarget.email.value;                        // Skapar en let som från värdet i email
    let address = e.currentTarget.address.value;                    // Skapar en let som address från värdet i address

    console.log(firstName, lastName, email, address );

    let user = {                                                    //skapar USER som ett objekt med olika parametrar
        firstName: document.querySelector('#firstName').value,      // deklarerar att värdet i #firstName ska vara firstName för objektet
        lastName: document.querySelector('#lastName').value,        // deklarerar att värdet i #laststName ska vara lastName för objektet
        email: document.querySelector('#email').value,              // deklarerar att värdet i #email ska vara email för objektet
        address: document.querySelector('#address').value,          // deklarerar att värdet i #address ska vara address för objektet
        role: document.querySelector('#role').value                 // deklarerar att värdet i #role ska vara address för objektet
    }

    console.log(user)


})*/