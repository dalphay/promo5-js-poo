let person = new Person('Simplon','Jean', 23, true);

 console.log(person);

const formulaire = document.querySelector('#formulaire');

formulaire.addEventListener('submit', function(event){
    event.preventDefault();

    let name = document.querySelector('#name').value;
    let surname = document.querySelector('#surname').value;
    let age = document.querySelector('#age').value;
    let isDev = document.querySelector('#isDev').checked;


    console.log(name);

    let newperson = new Person(name, surname, age, isDev);
    
        console.log(newperson);

    
});

