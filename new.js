const admittedStudents = [];

const showForm = () => {
    const element = document.getElementById("name-form");
    element.classList.add("reappear");
}

const createNewStudent = (name, house) => {
    let studentObj = {
        name: name,
        house: house
    }
    admittedStudents.push(studentObj);
    printStudents(admittedStudents);
}

const clickListener = () => {
    let buttonArr = document.getElementsByClassName("btn-class");
    for (let i = 0; i < buttonArr.length; i++) {
        buttonArr[i].addEventListener("click", clickHandler);
    }
}

const printToDOM = (domElement, domString) => {
    document.getElementById(domElement).innerHTML = domString;
    document.getElementById("student-name").value = "";
    clickListener();
}

const sortStudent = () => {
    const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
    let studentName = document.getElementById("student-name").value;
    let randomNum = Math.floor(Math.random() * houses.length);
    (studentName === "" || studentName === " ") ? alert("Please enter a name.") : 
    createNewStudent(studentName, houses[randomNum]);
}

const printStudents = (arr) => {
    let domString = "";
    for (let i = 0; i < arr.length; i++) {
        domString += '<div class="card text-center my-card">';
        domString +=    '<div class="card-body body-card">';
        domString +=        `<h5 class="card-title new-name">${arr[i].name}</h5>`;
        domString +=        `<p class="card-text new-house ">${arr[i].house}</p>`;
        domString +=        `<button class="btn btn-primary btn-class" id="${arr[i].name}-${arr[i].house}-${i}">Expel</button>`;
        domString +=    '</div>';
        domString += '</div>';
    }
    printToDOM("root", domString);
}

const clickHandler = (e) => {
    let buttonId = e.target.id;
    console.log(buttonId);
    for (let i = 0; i < admittedStudents.length; i++) {
        if (buttonId === `${admittedStudents[i].name}-${admittedStudents[i].house}-${i}`) {
            admittedStudents.splice(i, 1);
        }
    }
    printStudents(admittedStudents);
}



const events = () => {
    document.getElementById("show-form").addEventListener("click", showForm);
    document.getElementById("sort-student").addEventListener("click", function(x) {
    x.preventDefault();
    sortStudent();
});
}

const init = () => {
    events();
}

init();


            
                
        