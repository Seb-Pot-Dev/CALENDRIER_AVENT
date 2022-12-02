const title = document.querySelector("h1");
console.log("title")

const divBoxes = document.querySelector("#boxes");
console.log (divBoxes)

const boxes = document.querySelectorAll(".txt-box");
console.log (boxes);

title.addEventListener("click", () => {
    title.style.color = "green"
})

boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        console.log("Boite n°" + (index + 1) + " a été cliquée")
        box.classList.toggle("active")
    })
})