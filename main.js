const showForm = () => {
    const element = document.getElementById("name-form");
    element.classList.toggle("disappear");
}

const clickListener = () => {
    let DOMarray = document.getElementsByClassName("expel-button");
    for (let i = 0; i < DOMarray.length; i++) {
        DOMarray[i].addEventListener("click", removeStudent);
    }
}

const printToDOM = (name, house) => {
    document.getElementById("root").innerHTML += `
        <div class="card text-center my-card" style="width: 18rem;">
            <div class="card-body body-card">
                <h5 class="card-title new-name">${name}</h5>
                <p class="card-text new-house ">${house}</p>
                <button class="btn btn-primary expel-button">Expel</button>
            </div>
        </div>`;
    document.getElementById("student-name").value = "";
    clickListener();
}

const sortStudent = () => {
    const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
    let randomNum = Math.floor(Math.random() * houses.length);
    let studentName = document.getElementById("student-name").value;
    (studentName === "" || studentName === " ") ? alert("Please enter a name.") : printToDOM(studentName, houses[randomNum]);
}

const removeStudent = (e) => {
    const element = e.path[2];
    element.parentNode.removeChild(element);
}

document.getElementById("show-form").addEventListener("click", showForm);
document.getElementById("sort-student").addEventListener("click", function(x) {
    x.preventDefault();
    sortStudent();
});


