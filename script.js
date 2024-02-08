

const main = document.querySelector('#main');
const addUserBtn = document.querySelector('#add-user');
const doubleBtn = document.querySelector('#double');
const showMillionairesBtn = document.querySelector('#show_millionaires');
const sortBtn = document.querySelector('#sort');
const calculateWealthBtn = document.querySelector('#calculate_wealth');

// Array of persons
let data = [];

// Fetch random user and add money
async function getRandomUser(){
    const res = await fetch('https://randomuser.me/api');
    const data = await res.json();
    
    // Random users data
    const user = data.results[0];

    // Create new user 
    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 1000000)
    };

    // Add new person's data to data array
    addData(newUser);
}
getRandomUser();


// Add new person's data to data array
function addData(personData){
    data.push(personData);
    
    // Update DOM
    updateDOM();
}

// Update DOM
function updateDOM(providedData = data){
    // Clear main div
    main.innerHTML = '<h2> <strong>Person</strong> Wealth</h2>';

    providedData.forEach((item) => {
        const element = document.createElement('div');
        element.classList.add('person');
        element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)}`;
        main.appendChild(element);
    })
}

// Format provided money
function formatMoney(number){
    return '$' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

// Double Everyones money
function doubleMoney(){
    data = data.map(person => {
        return {...person, money: person.money * 2}
    })

    updateDOM();
}

// Sort List by Richest
function sortPersons(){
     data.sort((firstObject, secondObject) => secondObject.money - firstObject.money);

    updateDOM();
}

// Event Listeners
// Add New User
addUserBtn.addEventListener('click', getRandomUser)

// Double Everyones Money
doubleBtn.addEventListener('click', doubleMoney);

// Sort List by Richest
sortBtn.addEventListener('click', sortPersons)
