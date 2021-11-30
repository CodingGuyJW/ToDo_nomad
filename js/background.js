const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg"];
const chosenImage = images[ Math.floor( Math.random() * images.length)];
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage);
if(chosenImage == images[1]){
    document.querySelector("#quote").style.backgroundColor = "red";
    document.querySelector("#quote").style.color = "yellow";
}else if(chosenImage == images[0]){
    document.querySelector("#quote").style.backgroundColor = "yellow";
    document.querySelector("#quote").style.color = "red";
}
// console.log(chosenImage);
// console.log(bgImage);

