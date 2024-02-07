

const main = document.querySelector('#main');
const addUserBtn = document.querySelector('#add-user');
const doubleaddUserBtn = document.querySelector('#double');
const showMillionairesaddUserBtn = document.querySelector('#show_millionaires');
const sortaddUserBtn = document.querySelector('#sort');
const calculateWealthaddUserBtn = document.querySelector('#calculate_wealth');

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

// Add new person's data to data array
function addData(personData){
    data.push(personData);
}



