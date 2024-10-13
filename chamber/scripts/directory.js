document.addEventListener('DOMContentLoaded', () => {
    const membersContainer = document.getElementById('members');
    const toggleViewButton = document.getElementById('toggleView');

    // Fetch and display member information using async/await
    async function fetchMembers() {
        try {
            const response = await fetch('data/members.json');
            const data = await response.json();
            displayMembers(data.members);
        } catch (error) {
            console.error('Error fetching member data:', error);
        }
    }

    // Display members on the page
    function displayMembers(members) {
        membersContainer.innerHTML = '';
        members.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.classList.add('member-card');
            memberCard.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}">
                <h2>${member.name}</h2>
                <p>${member.address}</p>
                <p>${member.phone}</p>
                <p><a href="${member.website}" target="_blank">${member.website}</a></p>
                <div class="social-icons">
                    <a href="#"><img src="images/facebook-icon.png" alt="Facebook"></a>
                    <a href="#"><img src="images/twitter-icon.png" alt="Twitter"></a>
                    <a href="#"><img src="images/linkedin-icon.png" alt="LinkedIn"></a>
                </div>
            `;
            membersContainer.appendChild(memberCard);
        });
    }

    // Toggle between grid and list view
    toggleViewButton.addEventListener('click', () => {
        membersContainer.classList.toggle('grid-view');
        membersContainer.classList.toggle('list-view');
    });

    // Initial fetch of member data
    fetchMembers();
});
