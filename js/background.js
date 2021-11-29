const images = ["0.jpg", "1.jpg", "2.jpg"];
const chosenImage = images[ Math.floor( Math.random() * images.length)];
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage);
if(chosenImage !== images[2]){
    document.querySelector("#quote").style.color = "yellow";
}
// console.log(chosenImage);
// console.log(bgImage);

