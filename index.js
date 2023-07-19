const bDayInput = document.getElementById("birth-day");
const bMonthInput = document.getElementById("birth-month");
const bYearInput = document.getElementById("birth-year");
const year = document.getElementById("year");
const month = document.getElementById("month");
const day = document.getElementById("day");
const btn = document.getElementById("btn");

const vDay = document.querySelectorAll(".validity-day");
const vMonth = document.querySelectorAll(".validity-month");
const vYear = document.querySelectorAll(".validity-year");

const validDay = document.getElementById("validDay");
const validMonth = document.getElementById("validMonth");
const validYear = document.getElementById("validYear");

const date = new Date();
let currentDay = date.getDay();
let currentMonth = date.getMonth();
let currentYear = date.getFullYear();

btn.addEventListener("click", calculateAge);

function totalAge() {
   var bDay = bDayInput.value;
   var bMonth = bMonthInput.value - 1;
   var bYear = bYearInput.value;

   var ageYears = currentYear - bYear;
   var ageMonths = currentMonth - bMonth;
   var ageDays = currentDay - bDay;

   if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
      ageYears--;
      ageMonths += 12;
   }

   if (ageDays < 0) {
      var monthBeforeCurrent = new Date(currentYear, currentMonth - 1, bDay);
      ageDays = Math.floor((new Date() - monthBeforeCurrent) / (1000 * 60 * 60 * 24));
      ageMonths--;
   }
   day.textContent = ageDays;
   year.textContent = ageYears;
   month.textContent = ageMonths;

   bDayInput.value = "";
   bMonthInput.value = "";
   bYearInput.value = "";
}

function calculateAge() {
   validDay.textContent = "";
   validMonth.textContent = "";
   validYear.textContent = "";

   if (bDayInput.value == "") {
      validDay.textContent = "This field is required";
      vDay.forEach((inp) => inp.classList.add("error-para"));
      bDayInput.classList.add("error-input");
   } else if (bDayInput.value > 31) {
      validDay.textContent = "Must be a valid day";
      vDay.forEach((inp) => inp.classList.add("error-para"));
      bDayInput.classList.add("error-input");
   } else {
      vDay.forEach((inp) => inp.classList.remove("error-para"));
      bDayInput.classList.remove("error-input");
   }

   if (bMonthInput.value == "") {
      validMonth.textContent = "This field is required";
      vMonth.forEach((inp) => inp.classList.add("error-para"));
      bMonthInput.classList.add("error-input");
   } else if (bMonthInput.value > 12) {
      validMonth.textContent = "Must be a valid Month";
      vMonth.forEach((inp) => inp.classList.add("error-para"));
      bMonthInput.classList.add("error-input");
   } else {
      vMonth.forEach((inp) => inp.classList.remove("error-para"));
      bMonthInput.classList.remove("error-input");
   }

   if (bYearInput.value == "") {
      validYear.textContent = "This field is required";
      vYear.forEach((inp) => inp.classList.add("error-para"));
      bYearInput.classList.add("error-input");
   } else if (bYearInput.value > currentYear) {
      validYear.textContent = "Must be in the past";
      vYear.forEach((inp) => inp.classList.add("error-para"));
      bYearInput.classList.add("error-input");
   } else {
      vYear.forEach((inp) => inp.classList.remove("error-para"));
      bYearInput.classList.remove("error-input");
   }

   if (validDay.textContent == "" && validMonth.textContent == "" && validYear.textContent == "") {
      totalAge();
   }
}
