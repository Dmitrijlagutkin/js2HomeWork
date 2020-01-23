let userInput = prompt('Enter any symbol')

if (userInput === null) {
	alert('Ввод был отменен')
} else {
	userInput = userInput.length > 1 || userInput === "" ? " " : userInput.toLowerCase()

	switch (userInput) {
		case " ":
			alert(!!userInput, typeof userInput)
		case "a":
		case "e":
		case "o":
			alert(userInput.toUpperCase())
			break
		case "x":
		case "y":
			alert(userInput + userInput)
			break
		case "s":
		case "d":
		case "q":
		case "m":
			let randomFirstNumber = Math.random()
			let randomSecondNumber = Math.random()
			let randomNumberResult = Math.trunc(randomFirstNumber + randomSecondNumber)
			let randomNumber = randomNumberResult === 0 ? 1 : randomNumberResult
			alert(randomNumber)
			break
		default:
			let randomX = Math.random()
			let randomY = Math.random()
			let randomZ = Math.random()
			console.log(randomX, randomY, randomZ)
			alert(`max value = ${Math.max(randomX, randomY, randomZ)}`)
	}
}