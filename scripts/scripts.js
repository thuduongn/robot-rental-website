/****************** create variables ******************/

let modelName = "XYZ";
let duration = 0;

/****************** helper function ******************/

function recalculate(modelName, duration) {
    let costLabel = document.getElementById("calculated-cost");
    let totalCost = 0;
    if (modelName === "XYZ") {
        totalCost = duration * 100;
    }
    else if (modelName === "CPRG") {
        totalCost = duration *213;
    }

    costLabel.innerHTML = totalCost;
}

/****************** model button logic ******************/

let modelButton = document.getElementById("model-button");
function changeModel() {
    let modelText = document.getElementById("model-text");
    if (modelName === "XYZ") {
        modelName = "CPRG";
        modelText.innerHTML = "Model CPRG";
    }
    else if (modelName === "CPRG") {
        modelName = "XYZ";
        modelText.innerHTML = "Model XYZ";
    }

    recalculate(modelName, duration);
}

modelButton.addEventListener("click", changeModel);


/****************** duration button logic ******************/

let durationButton = document.getElementById("duration-button");
function changeDuration() {
    let durationText = document.getElementById("duration-text");
    let newDuration = prompt("The duration you want?");
    duration = newDuration;
    durationText.innerHTML = newDuration;
    recalculate(modelName, newDuration);
}

durationButton.addEventListener("click", changeDuration);
