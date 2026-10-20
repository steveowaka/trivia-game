const readline = require("readline")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const questions = [
    {
    question: "How many players does a football team have on the field?",
    options: ["9", "10", "11", "12"],
    answer: "11"
    },
    {
    question: "Which country won the 2022 FIFA World Cup?",
    options: ["France", "Argentina", "Brazil", "Germany"],
    answer: "Argentina"
    },
    {
    question: "How many points is a free throw worth in basketball?",
    options: ["1", "2", "3", "4"],
    answer: "1"
    },
    {
    question: "Which sport is played at Wimbledon?",
    options: ["Golf", "Tennis", "Cricket", "Rugby"],
    answer: "Tennis"
    },
    {
        question: "who is the greatest footballer of all time?",
        options: ["Messi", "Neymar", "Mbappe", "Ronaldo", "Dembele"],
        answer: "Messi"

    }
]

// console.log("sports questions", question.length);

function startGame() {
  console.log("Welcome to the Sports Trivia Game!");

  const question = questions[0];

  console.log("\n" + question.question);

  question.options.forEach((option, index) => {
    console.log(`${index + 1}. ${option}`);
  });

  rl.question("Enter your answer (1-5): ", (answer) => {
  const selectedOption = question.options[Number(answer) - 1];

  if (selectedOption === question.answer) {
    console.log("Correct! Well done!");
  } else {
    console.log("Incorrect! The correct answer is:", question.answer);
  }

  rl.close();
})
}

startGame();