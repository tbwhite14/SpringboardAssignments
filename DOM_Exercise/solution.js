document.addEventListener("DOMContentLoaded", function(){
    executeTaskOne();
    executeTaskTwo();
    executeTaskThree();
    executeTaskFour();
    executeTaskFive();
    executeTaskSix();
    executeTaskSeven();
    executeTaskEight();
    executeTaskNine();
})

function executeTaskOne () {
    document.getElementById("task1").innerText = "Changed using 'innerText'.";
}

function executeTaskTwo () {
    document.getElementById("task2").innerHTML = "<button>Submit</button>";
}

function executeTaskThree () {
    document.body.style.backgroundColor = "#232323";
}

function executeTaskFour () {
    document.querySelectorAll(".item").forEach(item => {
        item.style.border = "2px solid black";
    });
}

function executeTaskFive () {
    document.getElementById("task5").href="https://www.springboard.com/";
}

function executeTaskSix () {
    document.getElementById("task6").value = "DOM Master";
}

function executeTaskSeven () {
    document.getElementById("task7").classList.add("new-class");
}

function executeTaskEight () {
    // document.getElementById("task8").insertAdjacentHTML("afterend", "<button>BUTTON</button>");
    const newButton = document.createElement("button");
    newButton.innerText = "New Button";
    document.getElementById("task8").appendChild(newButton);
}

function executeTaskNine () {
    const element = document.getElementById("task9");
    element.parentNode.removeChild(element);
}