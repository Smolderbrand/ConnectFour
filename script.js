let currentPlayer;
let gameState;
let counts = [];
let state = [[]];
let moves;
let player = ["O", "X", "O"];

function start() {
	currentPlayer = 0;
	gameState = 0;
	counts = [0, 0, 0, 0, 0, 0, 0];
	state = [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]];
	moves = 0;
	let navButtons = document.getElementById("Buttons");
	let currenttr;
	navButtons.innerHTML = "";
	for (let i = 0; i < 7; ++i) {
		currenttr = document.createElement("tr");
		for (let j = 0; j < 7; ++j) {
			let currenttd = document.createElement("td");
			let button = document.createElement("button");
			button.setAttribute("buttonid", j);
			button.setAttribute("style", "height:40px;width:40px;font-family:Arial;font-size:18px;");
			if (i > 0) {
				button.innerHTML = " ";
			} else {
				button.innerHTML = "&#8595;"
				button.addEventListener("click", function (event) {
					let btn = event.target;
					let buttonid = btn.getAttribute("buttonid");
					buttonClicked(buttonid);
				});
			}
			currenttd.appendChild(button);
			currenttr.appendChild(currenttd);
		}
		navButtons.appendChild(currenttr);
	}
}

function clickNew() {
	currentPlayer = 0;
	gameState = 0;
	counts = [0, 0, 0, 0, 0, 0, 0];
	for (let i = 1; i < 7; ++i) {
		for (let j = 0; j < 7; ++j) {
			state[i - 1][j] = 0;
			document.getElementById("Buttons").children[i].children[j].children[0].textContent = " ";
		}
	}
	moves = 0;
	updateGameState();
}

function checkWinOnColumns() {
	for (let i = 0; i < 3; ++i) {
		for (let j = 0; j < 7; ++j) {
			if (state[i][j] === state[i + 1][j] && state[i][j] === state[i + 2][j] && state[i][j] === state[i + 3][j]) {
				if (state[i][j] > 0) {
					document.getElementById("GameStats").textContent = player[state[i][j]] + " has won!";
					gameState = 1;
				}
			}
		}
	}
}

function checkWinOnRows() {
	for (let i = 0; i < 6; ++i) {
		for (let j = 0; j < 4; ++j) {
			if (state[i][j] === state[i][j + 1] && state[i][j] === state[i][j + 2] && state[i][j] === state[i][j + 3]) {
				if (state[i][j] > 0) {
					document.getElementById("GameStats").textContent = player[state[i][j]] + " has won!";
					gameState = 1;
				}
			}
		}
	}
}

function checkWinOnDiagonals() {
	for (let i = 0; i < 3; ++i) {
		for (let j = 0; j < 4; ++j) {
			if (state[i][j] === state[i + 1][j + 1] && state[i][j] === state[i + 2][j + 2] && state[i][j] === state[i + 3][j + 3]) {
				if (state[i][j] > 0) {
					document.getElementById("GameStats").textContent = player[state[i][j]] + " has won!";
					gameState = 1;
				}
			}
		}
	}
	for (let i = 0; i < 3; i++) {
		for (let j = 0; j < 4; j++) {
			if (state[i][j + 3] === state[i + 1][j + 2] && state[i][j + 3] === state[i + 2][j + 1] && state[i][j + 3] === state[i + 3][j]) {
				if (state[i][j + 3] > 0) {
					document.getElementById("GameStats").textContent = player[state[i][j + 3]] + " has won!";
					gameState = 1;
				}
			}
		}
	}
}

function checkDraw() {
	if ((gameState === 0) && (moves == 42))
		document.getElementById("GameStats").textContent = "Draw!";
}

function updateGameState() {
	document.getElementById("GameStats").textContent = player[currentPlayer + 1] + " to click";
	checkWinOnColumns();
	checkWinOnRows();
	checkWinOnDiagonals();
	checkDraw();
}

function buttonClicked(number) {
	if ((counts[number] < 6) && (gameState === 0)) {
		state[counts[number]][number] = currentPlayer + 1;
		currentPlayer = (currentPlayer + 1) % 2;
		document.getElementById("Buttons").children[6 - counts[number]].children[number].children[0].textContent = player[currentPlayer];
		counts[number] += 1;
		++moves;
		updateGameState();
	}
}