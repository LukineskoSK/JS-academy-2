let cardsContainer = document.querySelector('.cards ul');

let arrayOfObject = [
    {
        title: "Playdate SDK",
        content: "Our full development environment, available for Mac, PC, and Linux. Includes Lua and C APIs, as well as a Simulator for local development, with profiling and more. "
    },
    {
        title: "Inside Playdate",
        content: "Reference documentation for programming Playdate games. Covers both Lua and C programming. "
    },
    {
        title: "Caps",
        content: "Bitmap font editor for Playdate fonts—draw your own characters, import desktop fonts, kern and preview them."
    }
]

function createNewCard(title, content){
    let newCard = document.createElement('li');

    newCard.innerHTML = `
                <h3>${title}</h3>
                <p>${content}</h3>
    `;

    cardsContainer.appendChild(newCard);
};

document.getElementById('createButton').addEventListener('click', function(event) {
    event.preventDefault();

    let heading = document.getElementById('heading').value;
    let message = document.getElementById('message').value;

    createNewCard(heading,message);

    document.getElementById('heading').value = '';
    document.getElementById('message').value = '';
});

// ------------------
// ----HLAVNY KOD----
// ------------------

arrayOfObject.forEach(object => {
    createNewCard(object.title, object.content);
})

fetch('../data/data.json')
    .then(response => 
        response.json())
        .then(data => {
            data.forEach(object => {
                createNewCard(object.title, object.content);
            })
            
        })

