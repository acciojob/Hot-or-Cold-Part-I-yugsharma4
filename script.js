//your code here
const button = document.querySelector("#btn");
const randomNum = document.querySelector("#num");
const respond = document.querySelector("#respond");
const input = document.querySelector("#guess");

function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
	// write your solution here
    if(rangeStart > rangeEnd) return `Start range(${rangeStart}) should be smaller than End range(${rangeEnd}).`;

    const randomValue = Math.ceil(Math.random()*(rangeEnd));

    //both positive range
    if(rangeStart > 0 && rangeEnd > 0){
        if(randomValue < rangeStart) return rangeStart + Math.floor(Math.random()*(rangeEnd - rangeStart));
   
        return randomValue;
    }
    //negative nd positive range
    else if(rangeStart < 0 && rangeEnd > 0){
        const negative = Math.ceil(Math.random()*(rangeStart));
        const randomNum100 = Math.floor(Math.random()*100);
        if(randomNum100 % 2 == 0){
            return randomValue;
        }
        return negative;
    }

    //both negative range for ex.(-40,-20)
    else if(rangeStart < 0 && rangeEnd < 0){
        const negativeLong = Math.ceil(Math.random()*(rangeStart));
        if(negativeLong > rangeEnd) return rangeEnd - Math.floor(Math.random()*(rangeEnd - rangeStart));

        return negativeLong;

    }
  
}

button.addEventListener("click", () => {
	const randomNumber = randomNumberGeneratorInRange(-20,20);
	const guessNumber = input.value;
	randomNum.textContent = randomNumber;
	
	const absDiff = Math.abs(guessNumber-randomNumber);
	
	if(absDiff<=5){
		respond.textContent = "Hot";
	}else{
		respond.textContent = "Cold";
	}
	
})



