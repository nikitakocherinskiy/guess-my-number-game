'use strict'

let secretNumber = Math.trunc(Math.random() * 20) + 1
let score = 20
let highscore = 0

const displayText = (text, elem) => {
	document.querySelector(`${elem}`).textContent = text
}

document.querySelector('.check').addEventListener('click', function () {
	const guess = Number(document.querySelector('.guess').value)

	if (!guess) {
		displayText('⛔️ No number!', '.message')
	} else if (guess === secretNumber) {
		displayText('🎉 Correct number!', '.message')
		displayText(secretNumber, '.number')

		document.querySelector('body').style.backgroundColor = '#60b347'
		document.querySelector('.number').style.width = '30rem'
		if (score > highscore) {
			highscore = score
			displayText(highscore, '.highscore')
		}
	} else if (guess !== secretNumber) {
		if (score > 1) {
			displayText(
				guess > secretNumber ? '📈 Too high!' : '📉 Too low!',
				'.message'
			)
			score--
			displayText(score, '.score')
		} else {
			displayText('💥 You lost the game!', '.message')
			document.querySelector('.score').textContent = 0
			displayText(0, '.score')
		}
	}
})

document.querySelector('.again').addEventListener('click', () => {
	score = 20
	secretNumber = Math.trunc(Math.random() * 20) + 1
	displayText(score, '.score')
	document.querySelector('.number').textContent = '?'
	displayText('?', '.number')
	document.querySelector('.message').textContent = 'Start guessing...'
	displayText('Start guessing...', '.message')
	document.querySelector('.guess').value = ''
	document.querySelector('.number').style.width = '15rem'
	document.querySelector('body').style.backgroundColor = '#222'
})
