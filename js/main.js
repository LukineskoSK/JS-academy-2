// Premenna ktorá má v sebe zoznam Card
let cardsContainer = document.querySelector('.cards ul');
// Vytvoril som si pole objektov v JS
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
// Funkcia na vytvorenie novej karty
function createNewCard(title, content){
    let newCard = document.createElement('li');

    newCard.innerHTML = `
                <h3>${title}</h3>
                <p>${content}</h3>
    `;

    cardsContainer.appendChild(newCard);
};
// Po kliknutí na buttton sa spusti funkcia na pridanie karty
document.getElementById('createButton').addEventListener('click', function(event) {
    event.preventDefault(); // Aby sa stránka po kliknutí neresetovala

    let heading = document.getElementById('heading').value;
    let message = document.getElementById('message').value;

    createNewCard(heading,message);

    document.getElementById('heading').value = '';
    document.getElementById('message').value = '';
});

// ------------------
// ----HLAVNY KOD----
// ------------------

//Prechádzame polom objektov v JS
arrayOfObject.forEach(object => {
    createNewCard(object.title, object.content);
})

//Prechádzame polom objektov v JSON
fetch('../data/data.json')
    .then(response => 
        response.json())
        .then(data => {
            data.forEach(object => {
                createNewCard(object.title, object.content);
            })
            
        });

