let user_score = document.getElementById("user-score");
let computer_score = document.getElementById("computer-score");
let win_score = 5;
let buttons = document.querySelectorAll(".choice");

let user_choice = document.getElementById("user-choice");
let computer_choice = document.getElementById("computer-choice");
let result = document.getElementById("result");

let userPoints = 0;
let computerPoints = 0;

let reset = document.getElementById("reset-btn");

// Get computer's random choice
function computer() {
    const choices = ["stone", "paper", "scissor"];
    const cc = Math.floor(Math.random() * 3);
    return choices[cc];
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (userPoints >= win_score || computerPoints >= win_score) return;

        const userPick = button.id;
        const compPick = computer();

        user_choice.textContent = userPick;
        computer_choice.textContent = compPick;

        if (
            (userPick === "stone" && compPick === "scissor") ||
            (userPick === "paper" && compPick === "stone") ||
            (userPick === "scissor" && compPick === "paper")
        ) {
            userPoints++;
            result.textContent = "You Win!";
        } else if (userPick === compPick) {
            result.textContent = "It's a Draw!";
        } else {
            computerPoints++;
            result.textContent = "You Lose!";
        }

        user_score.textContent = userPoints;
        computer_score.textContent = computerPoints;

        if (userPoints === win_score || computerPoints === win_score) {
            result.textContent += userPoints === win_score ? " 🎉 You won the game!" : " 😞 Computer won the game!";
            buttons.forEach(b => b.disabled = true);
        }
    });
});
reset.addEventListener("click", () => {
    userPoints = 0;
    computerPoints = 0;

    user_score.textContent = "0";
    computer_score.textContent = "0";

    user_choice.textContent = "-";
    computer_choice.textContent = "-";
    result.textContent = "Result will appear here";

    buttons.forEach(b => b.disabled = false);
});

