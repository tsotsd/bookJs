// Вынесли логику, связанную с обработчиком, и сам обработчик в отдельную функцию.
const initEventListeners = () => {
    const studentElements = document.querySelectorAll(".student");

    for (const studentElement of studentElements) {
        studentElement.addEventListener("click", () => {
            console.log(1);
        });
    }
};

// При нажатии на кнопку происходит перерисовка контента.
buttonElement.addEventListener("click", () => {
...

    // На этой строке разметка перезаписывается и обработчики слетают.
    listElement.innerHTML =
        listElement.innerHTML +
        `<li class="student">
            <p class="student-name">
              ${nameInputElement.value}, любимый цвет
              <span style="color: ${colorInputElement.value}"> ${colorInputElement.value}</span>
            </p>
          </li>`;

    // Вызвали функцию, которая повторно нависит обработчики
    // после перерисовки контента.
    initEventListeners();

    nameInputElement.value = "";
});