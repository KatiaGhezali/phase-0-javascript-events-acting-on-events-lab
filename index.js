// Your code here

const dodger = document.getElementById('dodger');

function moveDodgerLeft() {
    const left = parseInt(dodger.style.left);
    
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  
  
  function moveDodgerRight() {
    const left = parseInt(dodger.style.left);
    
    if (left < (400 - 40)) { 
      dodger.style.left = `${left + 1}px`;
    }
  }
  
  
  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    } else if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });
  //PS: I am still trying top wrap my head around the code, a loot of it was copy pasted :D