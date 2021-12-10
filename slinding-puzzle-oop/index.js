const EMPTY_STRING = "";
const WINNER_MESSAGE = "&#x1F389; You Win!! &#x1F389;";
const VISIBILITY_VISIBLE = "visible";
const VISIBILITY_HIDDEN = "hidden";
const BUTTONS_MAP = {
  b1: {
    coordinate: { x: 0, y: 0 },
    element: document.getElementById("b1"),
    textExpected: "1"
  },
  b2: {
    coordinate: { x: 0, y: 1 },
    element: document.getElementById("b2"),
    textExpected: "2"
  },
  b3: {
    coordinate: { x: 0, y: 2 },
    element: document.getElementById("b3"),
    textExpected: "3"
  },
  b4: {
    coordinate: { x: 1, y: 0 },
    element: document.getElementById("b4"),
    textExpected: "4"
  },
  b5: {
    coordinate: { x: 1, y: 1 },
    element: document.getElementById("b5"),
    textExpected: "5"
  },
  b6: {
    coordinate: { x: 1, y: 2 },
    element: document.getElementById("b6"),
    textExpected: "6"
  },
  b7: {
    coordinate: { x: 2, y: 0 },
    element: document.getElementById("b7"),
    textExpected: "7"
  },
  b8: {
    coordinate: { x: 2, y: 1 },
    element: document.getElementById("b8"),
    textExpected: "8"
  },
  b9: {
    coordinate: { x: 2, y: 2 },
    element: document.getElementById("b9"),
    textExpected: EMPTY_STRING
  }
};
let lastEmptyButtonId = "b9";

window.onload = function () {
  console.log("Page is loaded, lets play!");
  shuffleGrid();
  calculateMovementsCount(0);
};

function isGridSorted() {
  for (const property in BUTTONS_MAP) {
    if (!hasExpectedText(BUTTONS_MAP[property])) {
      console.log("Not a winner yet!");
      return false;
    }
  }
  console.log("We have a Winner!");
  return true;
}

function hasExpectedText(button) {
  return button.textExpected === button.element.innerText;
}

function buildButtonClasses(number) {
  switch (number) {
    case 9:
      return "button empty-square";
    default:
      return "button button-blue";
  }
}

function shuffleGrid() {
  let numberArray = ["1", "2", "3", "4", "5", "6", "7", "8", 9];
  shuffleArray(numberArray);

  let arrayIndex = 0;
  for (const property in BUTTONS_MAP) {
    let currentNumber = numberArray[arrayIndex++];
    let currentElement = BUTTONS_MAP[property].element;
    currentElement.className = buildButtonClasses(currentNumber);
    if (currentNumber === 9) {
      currentElement.innerText = EMPTY_STRING;
      lastEmptyButtonId = currentElement.id;
    } else {
      currentElement.innerText = currentNumber;
      displayWinnerMessage(EMPTY_STRING, VISIBILITY_HIDDEN);
      calculateMovementsCount(0);
    }
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

let count = 0;
function processClick(elementClicked) {
  const elementClickedId = elementClicked.id;
  let clickedButton = BUTTONS_MAP[elementClickedId];
  let emptyButton = BUTTONS_MAP[lastEmptyButtonId];

  if (areSwapable(clickedButton, emptyButton)) {
    swap(clickedButton, emptyButton);
    lastEmptyButtonId = elementClickedId;
    if (isGridSorted()) {
      displayWinnerMessage(WINNER_MESSAGE, VISIBILITY_VISIBLE);
    } else {
      displayWinnerMessage(EMPTY_STRING, VISIBILITY_HIDDEN);
    }
    count++;
    calculateMovementsCount(count);
  }
}

function swap(clickedButton, emptyButton) {
  let tempText = clickedButton.element.innerText;
  let tempClass = clickedButton.element.className;

  clickedButton.element.innerText = emptyButton.element.innerText;
  clickedButton.element.className = emptyButton.element.className;

  emptyButton.element.innerText = tempText;
  emptyButton.element.className = tempClass;
}

function areSwapable(buttonA, buttonB) {
  let coordinateA = buttonA.coordinate;
  let coordinateB = buttonB.coordinate;

  let coordinateDistance = Math.floor(
    Math.abs(coordinateA.x - coordinateB.x) +
      Math.abs(coordinateA.y - coordinateB.y)
  );

  return coordinateDistance === 1;
}

function displayWinnerMessage(message, isVisible) {
  let winnerMessageElement = document.getElementById("winner-message");
  winnerMessageElement.innerHTML = message;
  winnerMessageElement.style.visibility = isVisible;
}

function calculateMovementsCount(count) {
  let displayNumber = document.getElementById("movement-count");
  displayNumber.innerHTML = "Movements count: " + count + "";
}

//Obtener las instrucciones
function showInstructions(){
  console.log("Mensaje para ver si la funcion se ejecuta 2");
  alert(Board1.instructions);

}