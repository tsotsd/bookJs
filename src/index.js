const buttonElement = document.getElementById("add-button");
const listElement = document.getElementById("list");
const nameInputElement = document.getElementById("name-input");
const colorInputElement = document.getElementById("color-input");
const studentElements = document.querySelectorAll(".student");
// новый код
//const elements = document.querySelectorAll(".span");

//const initEventListeners2 = () => {
//const elements = document.querySelectorAll("span");

//for (const spanElement of elements) {
//spanElement.addEventListener("click", () => {
//spanElement.style.backgroundColor = "red";
// });
//}
//};
//initEventListeners2();
// новый код 2
const elementss = document.querySelectorAll("body");

const initEventListeners3 = () => {
    const elementss = document.querySelectorAll("body");

    for (const bodyElement of elementss) {
        bodyElement.addEventListener("click", () => {
            bodyElement.style.backgroundColor = "red";
        });
    }
};
initEventListeners3();

const initEventListeners = () => {
    const studentElements = document.querySelectorAll(".student");

    for (const studentElement of studentElements) {
        console.log(studentElement);
        studentElement.addEventListener("click", () => {
            console.log(1);
        });
    }
};

buttonElement.addEventListener("click", () => {
    nameInputElement.classList.remove("input-error");

    if (nameInputElement.value === "") {
        nameInputElement.classList.add("input-error");
        return;
    }

    listElement.innerHTML =
        listElement.innerHTML +
        `<li class="student">
        <p class="student-name">
          ${nameInputElement.value}, любимый цвет
          <span style="color: ${colorInputElement.value}"> ${colorInputElement.value}</span>
        </p>
      </li>`;

    initEventListeners();

    nameInputElement.value = "";
});
