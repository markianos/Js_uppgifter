// alert('min JS koppling fungerar och är redo att rocka');

const regForm = document.querySelector('#regForm');                 // deklarerar att const regForm är id #regForm i mitt html dokument, vilket innesluter hela mitt formulär
const firstName = document.querySelector('#firstName')              // deklarerar att const firstName  är id #firstName i mitt html dokument
const lastName = document.querySelector('#lastName')                // deklarerar att const lastName  är id #lastName i mitt html dokument
const address = document.querySelector('#address')                  // deklarerar att const address  är id #address i mitt html dokument
const email = document.querySelector('#email');                     // deklarerar att const email  är id #email i mitt html dokument
const skill = document.querySelector('#skill');                     // deklarerar att const checkBox är id #toc i mitt html dokument
const checkBox = document.querySelector('#toc');                    // deklarerar att const checkBox är id #toc i mitt html dokument
const btn = document.querySelector('#btn');                         // deklarerar att const checkBox är id #toc i mitt html dokument
const output = document.querySelector('#output');                   // deklarerar att const output är id #output i mitt html dokument

const users = []                                                    // skapar en users som är en array

class User {                                                        // en class som är user med hjälp av av en constructor 
    constructor(firstName, lastName, email, address, skill) {       // constructor innehållande fn, ln, em, add
        this.firstName = firstName;                                 // firstName deklareras
        this.lastName = lastName;                                   // lastName deklareras
        this.email = email;                                         // email deklareras
        this.address = address;                                     // address deklareras
        this.skill = skill;                                         // Skill deklareras
        this.id = Date.now().toString()                             // ID deklareras och funktion toString() kökrs för att göra om till en string/text
    }
}

/* ------------------------------->    FUNKTIONEN createUser() -- */

const createUser = (firstName, lastName, email, address, skill) => {               // skapar funktionen createUser 
    const user = new User(firstName, lastName, email, address, skill);             // deklarerar const user att vara new User  

    users.push(user);                                                       // lägger till/pushar till vår array users[] 
    output.insertAdjacentHTML('beforeend', newUser(user))                   // väljer vår output och att vi ska skriva ut vår template (nedan) i HTML innan slutet av vårt element som last child
    console.log(users);

}

/* ------------------------------->    FUNKTIONEN newUser() med TEMPLATE --- */

const newUser = (user) => {                                                 // skapar newUser med template av html sklett som placeras innanför backticks och där information hämtas från vår user input
    let template = `
    <div class="border rounded bg-white p-2 d-flex justify-content-between align-items-center mb-2" id="${user.id}">
        <div class="text">
            <h4 class="ps-2 m-0">${user.firstName} ${user.lastName}</h4>
            <p class="ps-2">${user.address}</p>
            <small class="ps-2 text-danger">${user.email}</small>
            <p class="mini ps-2">Level: ${user.skill}</p>
        </div>
        <div class="buttons p-2">
            <button class="btn btn-info m-2"><i class="fas fa-user-edit"></i></button>
            <button class="btn btn-danger "><i class="fas fa-trash-alt"></i></button>
        </div>
    </div>    
    `
    return template                                         // returnerar vår template                                                        
}


/* ------------------------------->    VALIDERINGAR   <------------- */


/* ------------------------------->    validate() FUNKTIONEN FÖR INPUTS - OCH SKRIVER UT FELMEDDELANDE ---  */ 

const validate = (id) => {                                          // Skapar en funktion som heter validate
    const input = document.querySelector(id);                       // deklarerar en const input som pekar på id
    const error = document.querySelector(id + '-error');            // deklarerar en const error som pekar på alla ID "# + -error"

    if(input.value.trim() === '') {                                 // om värdet i vår input är tomt
        error.innerText = 'Enter text please'                       // skriv ut i id-error div, "Enter text please"
        input.focus();                                              // sätter inputen i fokus med ouline
        return false;                                               // avbryter och skickar inte vidare
    }
    else if (input.value.length < 2) {                              // annars om värdet i vår input är mindre än 2 tecken långt
        error.innerText = 'Enter at least 2 characters'             // skriv ut i id-error div, "Enter at least 2 characters"
        input.focus();                                              // sätter inputen i fokus med ouline
        return false;                                               // avbryter och skickar inte vidare
    }
    else {                                                          // Annars...
        error.innerText = ''                                        // lämna id-error div tom
        return true;                                                // gå vidare
    }
    
}

/* ------------------------------->    VALIDERAR EMAIL MED specialCharValidate -  OCH SKRIVER UT FELMEDDELANDE  --- */

const specialCharValidate = (id) => {                               // Skapar en funktion som heter specialCharValidate
    const input = document.querySelector(id);                       // deklarerar en const input som pekar på id
    const error = document.querySelector(id + '-error');            // deklarerar en const error som pekar på alla ID "# + -error"

    if (input.value.includes('å')) {                                // om input värdet har tecknet/bokstaven 'å'
        error.innerText = 'The email can not contain the letter å'  // skriv ut i id-error div, "The email can not contain the letter å"
        input.focus();                                              // sätter inputen i fokus med ouline
        return false;                                               // avbryter och skickar inte vidare
    }
    else if (input.value.includes('ä')) {                           // gäller för bokstaven 'ä'
        error.innerText = 'The email can not contain the letter ä'
        input.focus();
        return false;
    }
    else if (input.value.includes('ö')) {
        error.innerText = 'The email can not contain the letter ö'  // gäller för bokstaven 'ö'
        input.focus();
        return false;
    }
    else if (input.value.includes('Å')) {
        error.innerText = 'The email can not contain the letter Å'  // gäller för bokstaven 'Å'
        input.focus();
        return false;
    }
    else if (input.value.includes('Ä')) {
        error.innerText = 'The email can not contain the letter Ä'  // gäller för bokstaven 'Ä'
        input.focus();
        return false;
    }
    else if (input.value.includes('Ö')) {
        error.innerText = 'The email can not contain the letter Ö'  // gäller för bokstaven 'Ö'
        input.focus();
        return false;
    }
    else if (input.value.trim() === '') {                           // gäller om input värdet är tomt
        error.innerText = 'Enter text please'
        input.focus();
        return false;
    }
    else if (input.value.length < 2) {
        error.innerText = 'Enter a valid email, ex. "user@mail.com"'   // Gälller om inputvärdet är mindre än 2 tecken
        input.focus();
        return false;
    }
    else if (!input.value.includes('@')) {                              // gäller om inputvärdet INTE har @ 
        error.innerText = 'Enter a valid email, ex. "user@mail.com"'
        input.focus();
        return false;
    }
    else {
        error.innerText = ''                                        // Annars håll id-error div tomt
        return true;                                                // gå vidare
    }
    
}


/* ------------------------------->    VALIDERAR EMAIL MED REGEX --- */

const validateEmail = (email) => {                                         // en funktion för validering av email med regular expressions
    if(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email.value)) {
        email.classList.add('is-valid');                                   // om email är validerad & giltlig lägg till klassen .is-valid
        email.classList.remove('is-invalid');                              // om email är validerad & giltlig ta bort klassen .is-invalid
        email.value.length > 2;
        return true;                                                        // skicka vidare
      }
      else {
        email.classList.remove('is-valid');                                // om email är validerad som ogiltlig ta bort klassen .is-nvalid
        email.classList.add('is-invalid');                                 // om email är validerad som ogiltlig lägg till klassen .is-invalid
        email.focus();                                                     // sätt fokus kring email
        
        return false;                                                       // skicka inte vidare
      }
}


/* ------------------------------->    VALIDERAR CHECKBOX --- */

const validateCheckBox = (checkbox) => {                                    // skapar en funktion med namnet validateCheckBox
    const checkBox = document.querySelectorAll('input:checked');            // skpar const "checkBox" som refererar till input checked
        
    if (checkBox.length === 0) {                                            // OM checkbox saknar värde
        alert('You must accept the terms and conditions to proceed')        // öppnar en alert med meddelandet
        return false                                                        // Skickar inte vidare
        // console.log('The terms and conditions have not been accepted');  // skriver till consolen
    } else {                                                                // Annars...
        console.log('Terms and conditions are accepted');                   // skriver till consolen medelande
        return true                                                         // skickar vidare
    }
}


/* ------------------------------->    RESET FORMULÄR --- */

const resetAll = () => {                                                    // skapar funktion med namn "resetAll"
    document.querySelectorAll('input').forEach(input => {                   // väljer alla inputs
      input.value = '';                                                     // sätter värdet till tomt
      
      input.classList.remove('is-valid');                                   // tar bort klassen "is-valid"
    })
    document.querySelectorAll('select').forEach(select => {                 // Väljer alla "select"
        select.value = '';                                                  // sätter värdet till tomt
    })
  }


/* ------------------------------->    ADD EVENTLISTNER PÅ SUBMIT */

regForm.addEventListener('submit', e => {                                    // lyssnar till en submit i vårt event
    e.preventDefault();                                                      // förhindrar att sidan laddas om
    
    
    validate('#firstName');                                                  // kör vår validate funktion på id med firstName
    validate('#lastName');                                                   // kör vår validate funktion på id med lastName
    specialCharValidate('#email')                                            // Kör vår specialCharValidate funktion på id med email
    //validate('#email');                                                    // kör vår validate funktion på id med email
    validate('#address');                                                    // kör vår validate funktion på id med address
    
    if(firstName.value.length <2){                                           // om value i firstName är färre än 2 tecken returneras false och går inte vidare
        return false                                                         // skickar inte vidare
    }
    else if(lastName.value.length <2){                                       // om value i lastName är färre än 2 tecken returneras false och går inte vidare
        return false                                                         // skickar inte vidare
    }
    else if(address.value.length <2){                                        // om value i address är färre än 2 tecken returneras false och går inte vidare
        return false                                                         // skickar inte vidare
    }
    
    validateEmail(email);                                                   // kör funktionen "validateEmail"
    


    if(!(e.currentTarget.toc.checked)) {                                    // om inte toc är iklickad
        alert('You must accept the terms and conditions')                   // alert meddelande
        return false                                                        // skicka inte vidare
      }

      if( validate('#firstName') &&  validate('#lastName') && specialCharValidate('#email') && validate('#address') && validateEmail(email)){         // om samtliga funktioner validerats och skickar vidare
      createUser(firstName.value, lastName.value, email.value, address.value, skill.value);                                                           // kör createUser funktionen
      }

      resetAll();                                                                                                                                     // funktionen resetAll för att rensa formuläret

})
    