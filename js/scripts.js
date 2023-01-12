

const gridContainer = document.getElementById("grid-container")



let size = 100; 
console.log(size)


document.getElementById("playButton").addEventListener("click", createGrid);


function createGrid() {

    for (let i=0; i < size; i++) {

        index = i + 1;

        const newCell = document.createElement("div");
        newCell.classList.add("cell");
        gridContainer.append(newCell);


        const span = document.createElement("span");
        span.innerHTML = index;
        newCell.append(span);


        newCell.addEventListener("click",

            function () {

                if(this.classList.contains("clicked")){
                    this.classList.remove("clicked");
                }
                else {
                    this.classList.add("clicked");
                }
            
            }

        );


    }
}

    function randomNumber (min, max) {
        const number = Math.floor(Math.random() * (max - min + 1)) + min;
        return number;
    }

    
