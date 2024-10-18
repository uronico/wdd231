//gets the information from the form with the URL
const currentUrl = window.location.href;

const everything = currentUrl.split('?');

//Grab just second part and splitting the array
let formData = everything[1].split('&');

//Function to show the user information
function show(content) {
    formData.forEach((element) => {
        if (element.startsWith(content)) {
            information = element.split('=')[1].replace("%40", "@").replace("+", " ");
        } //end if
    });
    return (information);
}


// Format and display Thank you information
const showInfo = document.querySelector('#information');
showInfo.innerHTML = `
    <h3><strong>Your information was sent to our data base and we will contact you soon!</strong> </h3>
    <p>Review your information </p>
    <p><strong>Name:</strong> ${show('user')}  ${show('last')}</p>
    <p><strong>Title:</strong> ${show('title')}</p>
    <p><strong>Phone:</strong> ${show('phone')}</p>
    <p><strong>Email:</strong> ${show('email')}</p>
    <p><strong>Business/Organization:</strong> ${show('organization')}</p>
    <p><strong>Membership of choice:</strong> ${show('choose-membership')}</p>
`;