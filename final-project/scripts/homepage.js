// Gold Members information cards
const cards = document.querySelector('#gold-cards');

async function getMembersData() {
    const response = await fetch('data/members.json');
    const data = await response.json();
    //console.table(data.prophets);
    displayGoldMembers(data.members);
}

getMembersData();

const displayGoldMembers = (members) => {
    const filteredMembers = members.filter(member => member.filter === 1);

    filteredMembers.forEach((member) => {
        let card = document.createElement('section');

        let name = document.createElement('h3');
        let logo = document.createElement('img');

        // Build the h3 and other content out to show the members information
        name.textContent = `${member.name}`;

        // Build the image logo by setting all the relevant attributes
        logo.setAttribute('src', member.image);
        logo.setAttribute('alt', `${member.name} Logo`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '350');
        logo.setAttribute('height', '250');


        // Append the section(card) with the created elements
        card.appendChild(logo);
        card.appendChild(name);

        cards.appendChild(card);

    });
}