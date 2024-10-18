//Membership levels array
const memberships = [
    {
        level: '0',
        number: 0,
        title: 'None Profit',
        description: 'Institutions that are created and operated for charitable or socially beneficial purposes rather than to make a profit. A nonprofit might serve religious, scientific, charitable, educational, literary, health, or animal welfare purposes.',
        fee: 'none',
        benefits: 'Eligible to receive gifts from other registered charities. you gain increased credibility in the community. Access to Philippines Chamber of Commerce benefits',
    },
    {
        level: '1',
        number: 1,
        title: 'Bronze',
        description: 'The Bronze Membership Package recognizes the contribution these companies bring to the industry and also provides a range of opportunities to interact and network with other members.',
        fee: 'Php 300 Pesos per month',
        benefits: 'Exclusive Access to Philippines Chamber of Commerce benefits and Chamber of Commerce communications',
    },
    {
        level: '2',
        number: 2,
        title: 'Silver',
        description: 'The Silver Level Membership Package is a great option for businesses seeking to support a healthy business climate in the Philippines while teaming alongside fellow mid-size businesses.',
        fee: 'Php 500 Pesos per month',
        benefits: 'Exclusive Access to Philippines Chamber of Commerce benefits and Chamber of Commerce communications',
    },
    {
        level: '3',
        number: 3,
        title: 'Gold',
        description: 'The Gold Membership Package is a terrific and distinguished option. Invest in a pro-business environment and one of the top levels of membership. This is a potent opportunity to impact positive change for business in our County.',
        fee: 'Php 1000 Pesos per month',
        benefits: 'Exclusive Access to Philippines Chamber of Commerce benefits and Chamber of Commerce communications',
    }
];

createMembershipCard(memberships);

// To be able to display and select a membership
const selectMembership = document.querySelector('#choose-membership');

memberships.forEach((memberships) => {
    let option = document.createElement('option');
    option.value = memberships.title;
    option.innerHTML = memberships.title;
    selectMembership.appendChild(option);
});

//Displays the card with the courses
function createMembershipCard(filteredMemberships) {
    filteredMemberships.forEach(membership => {
        let membershipCard = document.createElement('section');
        let name = document.createElement('h4');
        const infoButton = document.createElement('button');


        name.textContent = membership.title;
        infoButton.innerHTML = 'More Information';

        membershipCard.appendChild(name);
        membershipCard.appendChild(infoButton);

        document.querySelector(".membership-container").appendChild(membershipCard);

        infoButton.addEventListener('click', () => {
            displayMembershipDetails(membership);
        });
    });
}

// Function to display the Modal in HTML
function displayMembershipDetails(membership) {
    const membershipDetails = document.querySelector('#membership-details');
    const closeInfo = document.createElement('button');
    const levelTitle = document.createElement('h3');
    const levelDescription = document.createElement('p');
    const levelFee = document.createElement('p');
    const levelBenefits = document.createElement('p');


    membershipDetails.innerHTML = '';
    closeInfo.textContent = `X`
    levelTitle.innerHTML = `Level: ${membership.title}`;
    levelDescription.innerHTML = `<strong>Description:</strong>${membership.description}`;
    levelBenefits.innerHTML = `<strong>Benefits:</strong> ${membership.benefits}`;
    levelFee.innerHTML = `<strong>Fee:</strong> ${membership.fee}`;

    membershipDetails.appendChild(closeInfo);
    membershipDetails.appendChild(levelTitle);
    membershipDetails.appendChild(levelDescription);
    membershipDetails.appendChild(levelBenefits);
    membershipDetails.appendChild(levelFee);

    membershipDetails.showModal();

    closeInfo.addEventListener("click", () => {
        membershipDetails.close();
    });

}