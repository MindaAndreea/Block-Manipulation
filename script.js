window.addEventListener("load", () => {
  let block = document.getElementById("block");
  let scaleCoef = 1;
  let rotateDeg = 0;
  let posY = document.getElementById("pos-y");
  let posX = document.getElementById("pos-x");
  let size = document.getElementById("size");
  let opacity = document.getElementById("opacity");
  let shapeSelect = document.getElementById("shape-select");
  let shapeSelectBtn = document.getElementById("ok-shape");
  let hex = document.getElementById("hex");
  let rgbaR = document.getElementById("rgba-r");
  let rgbaG = document.getElementById("rgba-g");
  let rgbaB = document.getElementById("rgba-b");
  let rgbaA = document.getElementById("rgba-a");
  let rgbaInputs = document.querySelectorAll(".rgba-container input");

  posY.addEventListener("input", () => {
    block.style.top = posY.value + "px";
  });

  posX.addEventListener("input", () => {
    block.style.left = posX.value + "px";
  });

  size.addEventListener("input", () => {
    scaleCoef = size.value;
    block.style.transform = `scale(${scaleCoef}) rotate(${rotateDeg}deg)`;
  });

  opacity.addEventListener("input", () => {
    block.style.opacity = opacity.value;
  });

  shapeSelectBtn.addEventListener("click", () => {
    let option = shapeSelect.value;

    if (option === "1") {
      block.style.borderRadius = "0";
      block.style.transform = "rotate(0deg)";
      rotateDeg = 0;
      block.style.transform = `scale(${scaleCoef}) rotate(${rotateDeg}deg)`;
    } else if (option === "2") {
      block.style.borderRadius = "50%";
    } else if (option === "3") {
      block.style.borderRadius = "0";
      rotateDeg = 45;
      block.style.transform = `scale(${scaleCoef}) rotate(${rotateDeg}deg)`;
    }
  });

  hex.addEventListener("keyup", (enter) => {
    if (enter.key === "Enter") {
      block.style.backgroundColor = `#${hex.value}`;
    }
  });

  rgbaInputs.forEach((elem) => {
    elem.addEventListener("input", () => {
      block.style.backgroundColor = `rgba(${rgbaR.value}, ${rgbaG.value}, ${rgbaB.value}, ${rgbaA.value})`;
    });
  });
});
