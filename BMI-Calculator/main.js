//--> First we'll select form and storing it into variable
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value); //-- Getting value from selected id and coverting that value into string by using parseInt() method.

  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  const weightGuide = document.querySelector("#weight-guide");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please Enter Valid Height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please Enter Valid Weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    //-- Now show the result
    results.innerHTML = `<span>${bmi}</span>`;

    if (bmi < 18.5) {
      weightGuide.innerHTML =
        "You are underweight. Please consult with a nutritionist.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      weightGuide.innerHTML =
        "You have a healthy weight. Keep up the good work!";
    } else if (bmi >= 25 && bmi <= 29.9) {
      weightGuide.innerHTML =
        "You are overweight. A healthier weight range for you is from 18.5 to 24.9.";
    } else {
      weightGuide.innerHTML = "You are obese. Please consult with a doctor.";
    }
  }
});
