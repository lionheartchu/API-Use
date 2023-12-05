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
        document.querySelector('.shrimp').style.width="5vw"

        document.querySelector('.betta').style.width="7vw"
        document.querySelector('.snail').style.width="12vw"
        document.querySelector('.fancy').style.width="10vw"
        document.querySelector('.comet').style.width="12vw"
        document.querySelector('.danio').style.width="15vw"
        document.querySelector('.koi').style.width="20vw"
        document.querySelector('.angel').style.width="17vw"

        document.querySelector('.betta').style.opacity="0.4"
        document.querySelector('.snail').style.opacity="0.4"
        document.querySelector('.fancy').style.opacity="0.4"
        document.querySelector('.comet').style.opacity="0.4"
        document.querySelector('.danio').style.opacity="0.4"
        document.querySelector('.angel').style.opacity="0.4"
        document.querySelector('.koi').style.opacity="0.4"
    }
    if (userInput>=5 && userInput<=40){
        document.querySelector('.shrimp').style.opacity="1"
        document.querySelector('.shrimp').style.width="5vw"
        document.querySelector('.betta').style.opacity="1"
        document.querySelector('.betta').style.width="8vw"
        document.querySelector('.snail').style.opacity="1"
        document.querySelector('.snail').style.width="14vw"

        document.querySelector('.fancy').style.width="10vw"
        document.querySelector('.comet').style.width="12vw"
        document.querySelector('.danio').style.width="15vw"
        document.querySelector('.koi').style.width="20vw"
        document.querySelector('.angel').style.width="17vw"

        document.querySelector('.fancy').style.opacity="0.4"
        document.querySelector('.comet').style.opacity="0.4"
        document.querySelector('.danio').style.opacity="0.4"
        document.querySelector('.angel').style.opacity="0.4"
        document.querySelector('.koi').style.opacity="0.4"
    }
    if (userInput>=40 && userInput<=120){
        document.querySelector('.shrimp').style.opacity="1"
        document.querySelector('.betta').style.opacity="1"
        document.querySelector('.snail').style.opacity="1"
        document.querySelector('.fancy').style.opacity="1"
        document.querySelector('.shrimp').style.width="5vw"
        document.querySelector('.betta').style.width="8vw"
        document.querySelector('.snail').style.width="14vw"
        document.querySelector('.fancy').style.width="12vw"

        document.querySelector('.comet').style.width="12vw"
        document.querySelector('.danio').style.width="15vw"
        document.querySelector('.koi').style.width="20vw"
        document.querySelector('.angel').style.width="17vw"

        document.querySelector('.comet').style.opacity="0.4"
        document.querySelector('.danio').style.opacity="0.4"
        document.querySelector('.angel').style.opacity="0.4"
        document.querySelector('.koi').style.opacity="0.4"
    }
    if (userInput>=120 && userInput<=200){
        document.querySelector('.shrimp').style.opacity="1"
        document.querySelector('.betta').style.opacity="1"
        document.querySelector('.snail').style.opacity="1"
        document.querySelector('.fancy').style.opacity="1"
        document.querySelector('.comet').style.opacity="1"
        document.querySelector('.shrimp').style.width="5vw"
        document.querySelector('.betta').style.width="8vw"
        document.querySelector('.snail').style.width="14vw"
        document.querySelector('.fancy').style.width="12vw"
        document.querySelector('.comet').style.width="14vw"

        document.querySelector('.danio').style.width="15vw"
        document.querySelector('.koi').style.width="20vw"
        document.querySelector('.angel').style.width="17vw"

        document.querySelector('.danio').style.opacity="0.4"
        document.querySelector('.angel').style.opacity="0.4"
        document.querySelector('.koi').style.opacity="0.4"
    }
    if (userInput>=200 && userInput<=500){
        document.querySelector('.shrimp').style.opacity="1"
        document.querySelector('.betta').style.opacity="1"
        document.querySelector('.snail').style.opacity="1"
        document.querySelector('.fancy').style.opacity="1"
        document.querySelector('.comet').style.opacity="1"
        document.querySelector('.danio').style.opacity="1"
        document.querySelector('.shrimp').style.width="5vw"
        document.querySelector('.betta').style.width="8vw"
        document.querySelector('.snail').style.width="14vw"
        document.querySelector('.fancy').style.width="12vw"
        document.querySelector('.comet').style.width="14vw"
        document.querySelector('.danio').style.width="16vw"

        document.querySelector('.koi').style.width="20vw"
        document.querySelector('.angel').style.width="17vw"

        document.querySelector('.angel').style.opacity="0.4"
        document.querySelector('.koi').style.opacity="0.4"
    }
    if (userInput>=500 && userInput<=1000){
        document.querySelector('.shrimp').style.opacity="1"
        document.querySelector('.betta').style.opacity="1"
        document.querySelector('.snail').style.opacity="1"
        document.querySelector('.fancy').style.opacity="1"
        document.querySelector('.comet').style.opacity="1"
        document.querySelector('.danio').style.opacity="1"
        document.querySelector('.angel').style.opacity="1"
        document.querySelector('.shrimp').style.width="5vw"
        document.querySelector('.betta').style.width="8vw"
        document.querySelector('.snail').style.width="14vw"
        document.querySelector('.fancy').style.width="12vw"
        document.querySelector('.comet').style.width="14vw"
        document.querySelector('.danio').style.width="16vw"
        document.querySelector('.angel').style.width="19vw"
        document.querySelector('.koi').style.opacity="0.4"
        document.querySelector('.koi').style.width="20vw"
    }
    if (userInput>=1000){
        document.querySelector('.shrimp').style.opacity="1"
        document.querySelector('.betta').style.opacity="1"
        document.querySelector('.snail').style.opacity="1"
        document.querySelector('.fancy').style.opacity="1"
        document.querySelector('.comet').style.opacity="1"
        document.querySelector('.danio').style.opacity="1"
        document.querySelector('.angel').style.opacity="1"
        document.querySelector('.koi').style.opacity="1"
        document.querySelector('.shrimp').style.width="5vw"
        document.querySelector('.betta').style.width="8vw"
        document.querySelector('.snail').style.width="14vw"
        document.querySelector('.fancy').style.width="12vw"
        document.querySelector('.comet').style.width="14vw"
        document.querySelector('.danio').style.width="16vw"
        document.querySelector('.koi').style.width="23vw"
        document.querySelector('.angel').style.width="19vw"
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

const shrimp=document.querySelector('.shrimp')
const betta=document.querySelector('.betta')
const snail=document.querySelector('.snail')
const fancy=document.querySelector('.fancy')
const comet=document.querySelector('.comet')
const danio=document.querySelector('.danio')
const angel=document.querySelector('.angel')
const koi=document.querySelector('.koi')

const shrimpInfo=document.querySelector('.info1')
const bettaInfo=document.querySelector('.info2')
const snailInfo=document.querySelector('.info3')
const fancyInfo=document.querySelector('.info4')
const cometInfo=document.querySelector('.info5')
const danioInfo=document.querySelector('.info6')
const angelInfo=document.querySelector('.info7')
const koiInfo=document.querySelector('.info8')

shrimp.addEventListener('mouseover',()=>{
    shrimpInfo.style.opacity='1'
})
shrimp.addEventListener('mouseout',()=>{
    shrimpInfo.style.opacity='0'
})

betta.addEventListener('mouseover',()=>{
    bettaInfo.style.opacity='1'
})
betta.addEventListener('mouseout',()=>{
    bettaInfo.style.opacity='0'
})

snail.addEventListener('mouseover',()=>{
    snailInfo.style.opacity='1'
})
snail.addEventListener('mouseout',()=>{
    snailInfo.style.opacity='0'
})

fancy.addEventListener('mouseover',()=>{
    fancyInfo.style.opacity='1'
})
fancy.addEventListener('mouseout',()=>{
    fancyInfo.style.opacity='0'
})

comet.addEventListener('mouseover',()=>{
    cometInfo.style.opacity='1'
})
comet.addEventListener('mouseout',()=>{
    cometInfo.style.opacity='0'
})

danio.addEventListener('mouseover',()=>{
    danioInfo.style.opacity='1'
})
danio.addEventListener('mouseout',()=>{
    danioInfo.style.opacity='0'
})

angel.addEventListener('mouseover',()=>{
    angelInfo.style.opacity='1'
})
angel.addEventListener('mouseout',()=>{
    angelInfo.style.opacity='0'
})

koi.addEventListener('mouseover',()=>{
    koiInfo.style.opacity='1'
})
koi.addEventListener('mouseout',()=>{
    koiInfo.style.opacity='0'
})