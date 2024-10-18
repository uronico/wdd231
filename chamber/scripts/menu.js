const hamButton = document.querySelector('#myButton');
const navigation = document.querySelector('#animateMe');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('show');
	hamButton.classList.toggle('show');
});

document.querySelectorAll('.navigation a').forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
});
