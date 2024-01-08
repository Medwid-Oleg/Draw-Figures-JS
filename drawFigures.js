const len = 7;

function drawSquare(length) {
	for (let i = 0; i < length; i++) {
		let row = '';
		for (let j = 0; j < length; j++) {
			row += '*';
		}
		console.log(row);
	}
}

drawSquare(len)

console.log('')

function drawIsoscelesTriangle(length) {
	for (let i = 0; i < length; i+=2) {
		let row = '';
		let spacesBefore = Math.floor((length - i - 1) / 2);
		let starsInRow = length - 2 * spacesBefore;

		for (let j = 0; j < spacesBefore; j++) {
			row += ' ';
		}
		for (let k = 0; k < starsInRow; k++) {
			row += '*';
		}
		console.log(row);
	}
}

drawIsoscelesTriangle(len);

console.log('')

function drawInvertedIsoscelesTriangle(length) {
	for (let i = length; i > 0; i-=2) {
		let row = '';
		let spacesBefore = Math.floor((length - i) / 2);
		let starsInRow = length - 2 * spacesBefore;

		for (let j = 0; j < spacesBefore; j++) {
			row += ' ';
		}
		for (let k = 0; k < starsInRow; k++) {
			row += '*';
		}
		console.log(row);
	}
}

drawInvertedIsoscelesTriangle(len)
console.log("")

function drawRightIsoscelesTriangle(height) {
	let mid = Math.round(height / 2);

	for (let i = 0; i < mid; i++) {
		let row = '';


		for (let k = 0; k < i + 1; k++) {
			row += '*';
		}

		console.log(row);
	}

	for (let i = mid - 2; i >= 0; i--) {
		let row = '';

		for (let k = 0; k < i + 1; k++) {
			row += '*';
		}

		console.log(row);
	}
}

drawRightIsoscelesTriangle(len);

console.log('')

function drawLeftIsoscelesTriangle(length) {
	let mid = Math.round(length / 2);

	for (let i = mid; i > 0; i--) {
		let row = '';
		for (let j = 0; j < mid; j++) {
			if (j < i) {
				row += ' ';
			} else {
				row += '*';
			}
		}
		console.log(row);
	}

	for (let i = 0; i < mid; i++) {
		let row = '';
		for (let j = 0; j < mid; j++) {
			if (j < i) {
				row += ' ';
			} else {
				row += '*';
			}
		}
		console.log(row);
	}
}

drawLeftIsoscelesTriangle(len)