//---> Step-1 Generate random color
const randomColor = function () {
  const hexValues = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hexValues[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalID; //-- Global Scope
//--> Step-2 --- Function to Start Change Color
const startChangingColor = function () {
  if (!intervalID) {
    intervalID = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};

//--> Step-3 --- Function to Stop Change Color
const stopChangingColor = function () {
  clearInterval(intervalID);
  intervalID = null;
  console.log("Function Stopped");
};

//--> Step-4 Now putting event listner on start button
document.querySelector("#start").addEventListener("click", startChangingColor);

//--> Step-5 Now putting event listner on stop button
document.querySelector("#stop").addEventListener("click", stopChangingColor);
