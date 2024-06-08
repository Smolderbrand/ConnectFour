var currentPlayer;
var gameState;
var counts = [];
var state = [[]];
var moves;

function start() {
	currentPlayer = 0;
	gameState = 0;
	counts = [0, 0, 0, 0, 0, 0, 0];
	state = [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]];
	moves = 0;
}

function clickNew() {
	currentPlayer = 0;
	gameState = 0;
	counts = [0, 0, 0, 0, 0, 0, 0];
	for (var i = 0; i < 6; i++)
		for (var j = 0; j < 7; j++) {
			state[i][j] = 0;
			document.getElementById("button" + String.fromCharCode(65 + j) + String.fromCharCode(65 + i)).textContent = " ";
		}
	moves = 0;
	checkState();
}

function checkState() {
	if (currentPlayer === 0)
		document.getElementById("GameStats").textContent = "X to click";
	else
		document.getElementById("GameStats").textContent = "O to click";
	for (var i = 0; i < 3; ++i)
		for (var j = 0; j < 7; ++j)
			if (state[i][j] === state[i + 1][j] && state[i][j] === state[i + 2][j] && state[i][j] === state[i + 3][j]) {
				if (state[i][j] == 1)
					document.getElementById("GameStats").textContent = "X has won!";
				else if (state[i][j] == 2)
					document.getElementById("GameStats").textContent = "O has won!";
				if (state[i][j] > 0)
					gameState = 1;
			}
	for (var i = 0; i < 6; ++i)
		for (var j = 0; j < 4; ++j)
			if (state[i][j] === state[i][j + 1] && state[i][j] === state[i][j + 2] && state[i][j] === state[i][j + 3]) {
				if (state[i][j] == 1)
					document.getElementById("GameStats").textContent = "X has won!";
				else if (state[i][j] == 2)
					document.getElementById("GameStats").textContent = "O has won!";
				if (state[i][j] > 0)
					gameState = 1;
			}
	for (var i = 0; i < 3; ++i)
		for (var j = 0; j < 4; ++j)
			if (state[i][j] === state[i + 1][j + 1] && state[i][j] === state[i + 2][j + 2] && state[i][j] === state[i + 3][j + 3]) {
				if (state[i][j] == 1)
					document.getElementById("GameStats").textContent = "X has won!";
				else if (state[i][j] == 2)
					document.getElementById("GameStats").textContent = "O has won!";
				if (state[i][j] > 0)
					gameState = 1;
			}
	for (var i = 0; i < 3; i++)
		for (var j = 0; j < 4; j++)
			if (state[i][j + 3] === state[i + 1][j + 2] && state[i][j + 3] === state[i + 2][j + 1] && state[i][j + 3] === state[i + 3][j]) {
				if (state[i][j + 3] == 1)
					document.getElementById("GameStats").textContent = "X has won!";
				else if (state[i][j + 3] == 2)
					document.getElementById("GameStats").textContent = "O has won!";
				if (state[i][j + 3] > 0)
					gameState = 1;
			}
	if ((gameState === 0) && (moves == 42))
		document.getElementById("GameStats").textContent = "Draw!";
}

function clickA() {
	wrapperButton(0);
}

function clickB() {
	wrapperButton(1);
}

function clickC() {
	wrapperButton(2);
}

function clickD() {
	wrapperButton(3);
}

function clickE() {
	wrapperButton(4);
}

function clickF() {
	wrapperButton(5);
}

function clickG() {
	wrapperButton(6);
}

function wrapperButton(number) {
	if ((counts[number] < 6) && (gameState === 0)) {
		if (currentPlayer == 0) {
			currentPlayer = 1;
			state[counts[number]][number] = 1;
			document.getElementById("button" + String.fromCharCode(65 + number) + String.fromCharCode(65 + counts[number])).textContent = "X";
			counts[number] += 1;
		} else {
			currentPlayer = 0;
			state[counts[number]][number] = 2;
			document.getElementById("button" + String.fromCharCode(65 + number) + String.fromCharCode(65 + counts[number])).textContent = "O";
			counts[number] += 1;
		}
		++moves;
		checkState();
	}
}