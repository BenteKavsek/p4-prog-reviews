let arrowButtons = document.getElementsByClassName("arrow");

for(let i = 0; arrowButtons.length; i++){
    arrowButtons[i].onclick = function(){
        console.log("testshittt");
    }
}
