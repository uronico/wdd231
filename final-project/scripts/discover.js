// Main Directory Section

const cards = document.querySelector('#company-cards');

async function getMembersData() {
    const response = await fetch('data/members.json');
    const data = await response.json();
    //console.table(data.prophets);
    displayMembers(data.members);
}

getMembersData();

const displayMembers = (members) => {
    members.forEach((member) => {

        let card = document.createElement('section');

        let name = document.createElement('h3');
        let logo = document.createElement('img');
        let description = document.createElement('p');

        // Build the h2 content out to show the prophet's full name
        name.textContent = `${member.name}`;
        description.textContent = `Description: ${member.description}`;
        // Build the image portrait by setting all the relevant attributes
        logo.setAttribute('src', member.image);
        logo.setAttribute('alt', `${member.name} Logo`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '200');
        logo.setAttribute('height', '200');

        // Append the section(card) with the created elements
        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(description);

        cards.appendChild(card);
    });
}

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#company-cards");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
    // example using arrow function
    display.classList.add("grid");
    display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}