const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: ['Python'],
        completed: true // Marked as completed
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: ['HTML', 'CSS'],
        completed: true // Marked as completed
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call, debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: ['Python'],
        completed: true // Marked as completed
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: ['C#'],
        completed: true // Marked as completed
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true // Marked as completed
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
];

function displayCourses(filteredCourses) {
    const container = document.getElementById('courses-container');
    container.innerHTML = '';
    filteredCourses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        if (course.completed) {
            courseCard.classList.add('completed');
        }
        courseCard.innerHTML = `
            <h3>${course.title}</h3>
            <p><strong>Subject:</strong> ${course.subject}</p>
            <p><strong>Number:</strong> ${course.number}</p>
            <p><strong>Credits:</strong> ${course.credits}</p>
            <p><strong>Description:</strong> ${course.description}</p>
            <p><strong>Technologies:</strong> ${course.technology.join(', ')}</p>
        `;
        container.appendChild(courseCard);
    });
    displayTotalCredits(filteredCourses);
}

function filterCourses(subject) {
    let filteredCourses;
    if (subject === 'all') {
        filteredCourses = courses;
    } else {
        filteredCourses = courses.filter(course => course.subject === subject);
    }
    displayCourses(filteredCourses);
}

function displayTotalCredits(filteredCourses) {
    const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);
    document.getElementById('total-credits').innerText = `Total Credits: ${totalCredits}`;
}

// Initial display of all courses
filterCourses('all');

document.addEventListener("DOMContentLoaded", () => {
    const mainnav = document.querySelector('nav');
    const hambutton = document.querySelector('#menu');

    hambutton.addEventListener('click', () => {
        mainnav.classList.toggle('show');
        hambutton.classList.toggle('show');
    });

    const homeLink = document.querySelector('#home');
    const chamber = document.querySelector('#chamber');
    const Githubprofile = document.querySelector('#git');
    const linkedin = document.querySelector('#linkedin');

    homeLink.addEventListener("click", () => {
        pageTitle.textContent = "Home";
    });
});
