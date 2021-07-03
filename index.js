let randomNumber1 = Math.random()*6 +1
let randomDeviceImage = "dice"+Math.floor(randomNumber1)+".png"
let randomSearchImage = "images/"+randomDeviceImage
let image1  = document.querySelectorAll("img")[0]
image1.setAttribute('src',randomSearchImage)

let randomNumber2 = Math.random()*6 +1
let randomSearchImage2 = "images/dice"+Math.floor(randomNumber2)+'.png'
let image2  = document.querySelectorAll("img")[1]
image2.setAttribute('src',randomSearchImage2)

if(randomNumber1 > randomNumber2){
    document.querySelector('h1').innerHTML = "🚩 Player1 wins"
}else if(randomNumber2 > randomNumber1){
    document.querySelector('h1').innerHTML = "Player2 wins 🚩"
}else {
    document.querySelector("h1").innerHTML = "Draw!"
  }