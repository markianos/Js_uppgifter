// alert('min JS koppling fungerar och är redo att rocka');

const regForm = document.querySelector('#regForm');                 // skapar const regForm på hela formuläret via ID #regForm
const email = document.querySelector('#email');                     // skapar const email via ID #email

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

/* ------------------------------->    funktion validateEmail */

const validateEmail = (_email) => {
    
}

/* ------------------------------->    ADD EVENTLISTNER PÅ SUBMIT */

regForm.addEventListener('submit', (e) => {                             // lyssnar till en submit i vårt event
    e.preventDefault();                                                 // förhindrar att sidan laddas om

    validate('#firstName');                                                // kör vår validate funktion på id med firstName
    validate('#lastName');                                                // kör vår validate funktion på id med lastName
    validate('#email');                                                // kör vår validate funktion på id med lastName
    validate('#address');                                                // kör vår validate funktion på id med lastName
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