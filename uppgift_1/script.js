// alert('min JS koppling fungerar och är redo att rocka');

const regForm = document.querySelector('#regForm');         // hämtar formuläret via ID

regForm.addEventListener('submit', (e) => {                         // Lyssnar efter en submit
    e.preventDefault();                                             // Förhindrar sidan från att laddas om

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


})