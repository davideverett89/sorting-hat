const showForm = () => {
    let element = document.getElementById("name-form");
    element.classList.toggle("disappear");
}

const printToDOM = (name, house) => {
    document.getElementById("root").innerHTML += `
        <div class="card text-center my-card" style="width: 18rem;">
            <div class="card-body body-card">
                <h5 class="card-title new-name">${name}</h5>
                <p class="card-text new-house ">${house}</p>
                <button id="expel-button" class="btn btn-primary expel-button">Expel</button>
            </div>
        </div>`;
    document.getElementById("student-name").value = "";
    let DOMarray = document.getElementsByClassName("expel-button");
    console.log(DOMarray);
}

// const sorter = (name) => {
//     const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
//     let randomNum = Math.floor(Math.random() * houses.length);
//     printToDOM(name, houses[randomNum]);
// }

const sortStudent = () => {
    const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
    let randomNum = Math.floor(Math.random() * houses.length);
    let studentName = document.getElementById("student-name").value;
    (studentName === "" || studentName === " ") ? alert("Please enter a name.") : printToDOM(studentName, houses[randomNum]);
}


document.getElementById("show-form").addEventListener("click", showForm);
document.getElementById("sort-student").addEventListener("click", sortStudent);