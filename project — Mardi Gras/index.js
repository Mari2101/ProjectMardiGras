/* Nav Bar */

const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("mynavbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

/* Timer */

// Set the date we're counting down to
var countDownDate = new Date("Feb 21, 2023 00:00:01").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

/* Contact */

function fillAreas() {
  let nameInput = document.getElementById("name").value.length;
  let emailForm = document.getElementById("email-form");
  let email = document.getElementById("email").value;
  let telInput = document.getElementById("tel").value.length;
  let tel = document.getElementById("tel").value;
  let textInput = document.getElementById("text").value.length;
  let boxie = document.getElementById("box");
  if (nameInput < 2 || telInput < 8 || textInput < 10 || email.length < 5) {
    boxie.innerHTML = "One or more areas of the form are not filled";
  } else if (!email.includes("@") || !email.includes(".")) {
    boxie.innerHTML = "Email is not correct";
  } else if (isNaN(tel)) {
    boxie.innerHTML = "Phone number is not correct";
  } else {
    emailForm.submit();
    boxie.innerHTML = "Your email was sent";
  }
}

/* Quiz */
const questions = [
  {
    question: "What are the traditional colors of Mardi Gras?",
    answer: "purple, green, gold",
    choices: [
      "purple, green, gold",
      "white, black, purple",
      "black, green, purple",
      "gold, purple, white",
    ],
  },
  {
    question: "What happens if there is bad weather?",
    answer: "Carnival will be postponed only in severe weather condition.",
    choices: [
      "No Carnival in the same year",
      "Carnival will be postponed only in severe weather condition.",
      "Carnival will not be postponed even in severe weather condition.",
      "Does not matter what are the weather conditions the Carnival will take place.",
    ],
  },
  {
    question: "Why does Mardi Gras fall on different dates each year?",
    answer: "it is connected to Easter",
    choices: [
      "it is connected to Easter",
      "it is connected to Chirstmas",
      "depends on weather",
      "depends on Moon Phase",
    ],
  },
  {
    question: "What is the meaning of Mardi Gras?",
    answer: "Fat Tuesday",
    choices: ["Sour Monday", "Sweet Thursday", "Fat Tuesday", "Thin Saturday"],
  },
  {
    question: "Where was the first Mardi Gras?",
    answer: "New Orleans",
    choices: ["New York", "Los Angeles", "New Orleans", "Washington"],
  },
  {
    question: "When was the first Mardi Gras?",
    answer: "February, 1857",
    choices: [
      "February, 1992",
      "Feburary, 1724",
      "February, 1900",
      "February, 1857",
    ],
  },
  {
    question: "What is the price of entry ticket?",
    answer: "Totally Free",
    choices: ["5 US Dollars", "Totally Free", "10 US Dollars", "50 US Dollars"],
  },
  {
    question: "Who can wear masks during the Carnival?",
    answer: "Everybody",
    choices: [
      "Nobody",
      "Everybody",
      "Residents of New Orleans",
      "Restricted number of participants of Carnival",
    ],
  },
  {
    question: "What day of Week is Mardi Gras?",
    answer: "Tuesday",
    choices: ["Tuesday", "Friday", "Wednesday", "Sunday"],
  },
  {
    question: "What is Mardi Gras",
    answer: "Carnival",
    choices: ["Show", "Musicle", "Party", "Carnival"],
  },
];
const startBtn = document.getElementById("startGame");

startBtn.addEventListener("click", () => {
  trivia.classList.remove("d-none");

  startBtn.classList.add("d-none");
});

const trivia = document.getElementById("trivia");

//show the first question:
let index = 0;
let score = 0;
let res = document.getElementById("res");

function showQuestion() {
  questions[index].choices = questions[index].choices.sort(
    (a, b) => Math.random() > 0.5
  );
  trivia.innerHTML = `
    <h2 class="text-center">${questions[index].question}</h2>
    <button style="font-size:1.2em; font-family: Pattaya;" class="bg-warning">${questions[index].choices[0]}</button>
    <button style="font-size:1.2em; font-family: Pattaya;" class="bg-warning">${questions[index].choices[1]}</button>
    <button style="font-size:1.2em; font-family: Pattaya;" class="bg-warning">${questions[index].choices[2]}</button>
    <button style="font-size:1.2em; font-family: Pattaya;" class="bg-warning">${questions[index].choices[3]}</button>
`;

  //find all buttons inside #trivia
  document
    .querySelectorAll("#trivia > button")
    //respond to click events on the buttons:
    .forEach((b) =>
      b.addEventListener("click", (e) => {
        //when clicked:

        if (e.target.innerHTML === questions[index].answer) {
          score += 10;
          res.innerHTML = `<p class="text-center card  mx-auto bg-success">Your answer is correct</p>`;
        } else {
          res.innerHTML = `<p class="text-center card  mx-auto bg-danger">Your answer is incorrect</p>`;
        }

        index += 1;
        if (index === questions.length) {
          trivia.classList.add("d-none");
          res.innerHTML = `<div id="score" class="d-flex align-items-center bg-warning card mx-auto" style="font-size:30px">Game Over - Your Score is: ${score} out of 100
                              <a href="quiz.html" style="text-decoration: none;  color: rgb(255, 205, 0); background-color: purple; padding:5px;  margin: 30px; border-radius: 30px;">Start Again</a></div>
          `;
        } else {
          showQuestion();
        }
      })
    );
}

//כפתור - התחל משחק
showQuestion();
