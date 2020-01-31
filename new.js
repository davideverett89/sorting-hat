const admittedStudents = [];
const voldemortsArmy = [];

const showForm = () => {
    const element = document.getElementById("name-form");
    element.classList.toggle("reappear");
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
    (studentName.length > 40) ? alert("Student name is too long.") :
    createNewStudent(studentName, houses[randomNum]);
}

const printStudents = (arr) => {
    let domString = "";
    for (let i = 0; i < arr.length; i++) {
        domString += '<div class="card text-center my-card col-lg-3">';
        domString +=    '<div class="card-body body-card">';
        domString +=        `<h5 class="card-title new-name">${arr[i].name.charAt(0).toUpperCase() + arr[i].name.slice(1)}</h5>`;
        domString +=        `<p class="card-text new-house ">${arr[i].house}</p>`;
        domString +=        `<button class="btn btn-primary btn-class" id="${arr[i].name}-${arr[i].house}-${i}">Expel</button>`;
        domString +=    '</div>';
        domString += '</div>';
    }
    printToDOM("root", domString);
}

const printVoldemortsArmy = (arr) => {
    let domString = "";
    for (let i = 0; i < arr.length; i++) {
        domString += '<div class="card text-center my-card col-lg-3">';
        domString +=    '<div class="card-body body-card">';
        domString +=        `<h5 class="card-title new-name">${arr[i][0].name}</h5>`;
        domString +=        `<p class="card-text new-house ">Expelled from: ${arr[i][0].house}</p>`;
        domString +=        '<p class="voldemort">Member of Voldemort\'s Army!</p>'
        domString +=    '</div>';
        domString += '</div>';
      }
      printToDOM("expelled", domString);
}

const clickHandler = (e) => {
    let buttonId = e.target.id;
    for (let i = 0; i < admittedStudents.length; i++) {
        if (buttonId === `${admittedStudents[i].name}-${admittedStudents[i].house}-${i}`) {
            let expelledStudent = admittedStudents.splice(i, 1);
            console.log(expelledStudent);
            voldemortsArmy.push(expelledStudent);
        }
    }
    printStudents(admittedStudents);
    printVoldemortsArmy(voldemortsArmy);
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


            
                
        