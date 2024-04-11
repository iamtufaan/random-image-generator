let button = document.querySelector("button");
let container = document.querySelector(".container");

function addNewImages() {

    let newImg = document.createElement("img");
    newImg.src = `https://picsum.photos/300?random=${Math.floor(
      Math.random() * 2000
    )}`;
    container.appendChild(newImg);
  
}

button.addEventListener("click", function () {
      // location.reload()
      addNewImages();
});


