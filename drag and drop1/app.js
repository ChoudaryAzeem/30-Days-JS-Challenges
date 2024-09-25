let lists = document.getElementsByClassName("list");
let leftbox = document.getElementById("left");
let rightbox = document.getElementById("right");

for(lists of lists){
    lists.addEventListener("dragstart", function(e){
        let selected = e.target;

        rightbox.addEventListener("dragover", function(e){
            e.preventDefault();
        });

        rightbox.addEventListener("drop", function(e){
            rightbox.appendChild(selected);
            selected = null;
        })

        leftbox.addEventListener("dragover", function(e){
            e.preventDefault();
        });

        leftbox.addEventListener("drop", function(e){
            leftbox.appendChild(selected);
            selected = null;
        })
    })
    
}