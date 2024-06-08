var currentPlayer;
var gameState;
var counts = [];
var state = [[]];

function start() {
	window.currentPlayer = 0;
	window.gameState = 0;
	window.counts = [0, 0, 0, 0, 0, 0, 0];
	window.state = [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]];
}

function clickNew() {
	window.currentPlayer = 0;
	window.gameState = 0;
	window.counts = [0, 0, 0, 0, 0, 0, 0];
	for (var i = 0; i < 6; i++)
		for (var j = 0; j < 7; j++) {
			window.state[i][j] = 0;
			document.getElementById("button" + String.fromCharCode(65 + j) + String.fromCharCode(65 + i)).textContent = " ";
		}
	checkState();
}

function checkState() {
	if (window.currentPlayer == 0)
		document.getElementById("GameStats").textContent = "X to click";
	else
		document.getElementById("GameStats").textContent = "O to click";
	for (var i = 0; i < 3; i++)
		for (var j = 0; j < 7; j++)
			if ((window.state[i][j] == window.state[i + 1][j]) && (window.state[i][j] == window.state[i + 2][j]) && (window.state[i][j] == window.state[i + 3][j])) {
				if (window.state[i][j] == 1)
					document.getElementById("GameStats").textContent = "X has won!";
				else if (window.state[i][j] == 2)
					document.getElementById("GameStats").textContent = "O has won!";
				if (window.state[i][j] > 0)
					window.gameState = 1;
			}
	for (var i = 0; i < 6; i++)
		for (var j = 0; j < 4; j++)
			if ((window.state[i][j] == window.state[i][j + 1]) && (window.state[i][j] == window.state[i][j + 2]) && (window.state[i][j] == window.state[i][j + 3])) {
				if (window.state[i][j] == 1)
					document.getElementById("GameStats").textContent = "X has won!";
				else if (window.state[i][j] == 2)
					document.getElementById("GameStats").textContent = "O has won!";
				if (window.state[i][j] > 0)
					window.gameState = 1;
			}
	for (var i = 0; i < 3; i++)
		for (var j = 0; j < 4; j++)
			if ((window.state[i][j] == window.state[i + 1][j + 1]) && (window.state[i][j] == window.state[i + 2][j + 2]) && (window.state[i][j] == window.state[i + 3][j + 3])) {
				if (window.state[i][j] == 1)
					document.getElementById("GameStats").textContent = "X has won!";
				else if (window.state[i][j] == 2)
					document.getElementById("GameStats").textContent = "O has won!";
				if (window.state[i][j] > 0)
					window.gameState = 1;
			}
	for (var i = 0; i < 3; i++)
		for (var j = 0; j < 4; j++)
			if ((window.state[i][j + 3] == window.state[i + 1][j + 2]) && (window.state[i][j + 3] == window.state[i + 2][j + 1]) && (window.state[i][j + 3] == window.state[i + 3][j])) {
				if (window.state[i][j + 3] == 1)
					document.getElementById("GameStats").textContent = "X has won!";
				else if (window.state[i][j + 3] == 2)
					document.getElementById("GameStats").textContent = "O has won!";
				if (window.state[i][j + 3] > 0)
					window.gameState = 1;
			}
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
	if ((window.counts[number] < 6) && (window.gameState == 0)) {
		if (window.currentPlayer == 0) {
			window.currentPlayer = 1;
			window.state[window.counts[number]][number] = 1;
			document.getElementById("button" + String.fromCharCode(65 + number) + String.fromCharCode(65 + window.counts[number])).textContent = "X";
			window.counts[number] += 1;
		} else {
			window.currentPlayer = 0;
			window.state[window.counts[number]][number] = 2;
			document.getElementById("button" + String.fromCharCode(65 + number) + String.fromCharCode(65 + window.counts[number])).textContent = "O";
			window.counts[number] += 1;
		}
		checkState();
	}
}