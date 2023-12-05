const baseUrl = "https://fish-yhkg.onrender.com"

const input =document.getElementById('size-input')
const checkButton =document.querySelector('.btnCheck')

console.log("test")

let tankSize; 
checkButton.addEventListener('click',()=>{
    const userInput= parseInt(input.value)
    tankSize = parseInt(input.value); 

    
    if (userInput>=1 && userInput<=5){
        document.querySelector('.shrimp').style.opacity="1"
    }
    if (userInput>=5 && userInput<=40){
        document.querySelector('.betta').style.opacity="1"
        document.querySelector('.snail').style.opacity="1"
    }
    if (userInput>=40 && userInput<=120){
        document.querySelector('.fancy').style.opacity="1"
    }
    if (userInput>=120 && userInput<=200){
        document.querySelector('.comet').style.opacity="1"
    }
    if (userInput>=200 && userInput<=500){
        document.querySelector('.diano').style.opacity="1"
    }
    if (userInput>=500 && userInput<=1000){
        document.querySelector('.angel').style.opacity="1"
    }
    if (userInput>=1000){
        document.querySelector('.koi').style.opacity="1"
    }

    const getType=document.getElementById('type')
    getType.innerHTML = ""

    makeRequest(userInput)
})
console.log(tankSize)


const makeRequest = async function() {
   
	try {
		const response = await fetch(`${baseUrl}/gallons/:${tankSize}`)
        console.log(`${baseUrl}/gallons/:${tankSize}`)
		const json = await response.json()

        const getType=document.getElementById('type')
        const showFish=document.createElement('p')

        const fishType=document.createTextNode(json)
        showFish.appendChild(fishType)
        getType.appendChild(showFish)

        // Objects.keys(json).forEach()

		console.log(json)
	} catch (error) {
	  console.error(error)
	}
}

