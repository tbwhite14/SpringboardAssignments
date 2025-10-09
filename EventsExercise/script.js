document.addEventListener("DOMContentLoaded", function(){
    const boxContainer = document.getElementById("box-container");
    const newBox = document.getElementById("new-box-button");
    const colorForm = document.getElementById("color-form");
    const colorImput = document.getElementById("color-input");

    let boxColor = null;
    let idCounter = 1;

    colorForm.addEventListener("submit", function(event){
        event.preventDefault();
        const newColor = colorImput.value.trim();
        const boxes = document.querySelectorAll(".box");
        for (let box of boxes){
            box.style.backgroundColor = newColor;
        }
        colorImput.value = "";
        boxColor = newColor;
    })

    function addBox (){
        const box = document.createElement("div");
        box.textContent = `Box ${idCounter}`;
        box.className = 'box';
        box.style.backgroundColor = boxColor;
        box.setAttribute("data-box-id", idCounter.toString());
        idCounter ++;
        boxContainer.appendChild(box);
    }

    newBox.addEventListener("click", function (){
        addBox();
    })

    document.addEventListener("dblclick", function(event){
        if (event.target.classList.contains("box")) {
            event.target.remove();
        }
    })

    document.addEventListener("mouseover", function(event){
        if (event.target.classList.contains("box")){
            event.target.textContent = `x: ${event.pageX}, y: ${event.pageY}`;
        }
    })

    document.addEventListener("mouseout", function(event){
        if (event.target.classList.contains("box")){
            const id = event.target.getAttribute("data-box-id");
            event.target.textContent = `Box ${id}`;
        }
    })

    document.addEventListener("keydown", function(event){
        if(event.key === "n" || event.key === "N"){
            if (event.target.id !== "color-input"){
                addBox();
            }
        }
    })


})
