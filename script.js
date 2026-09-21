const zadniF = document.querySelector(".zadniFon")
const button = document.querySelectorAll(".buttonS")
const closeBtn = document.querySelector(".closeButten")


button.forEach (function(buttonS) {
buttonS.onclick = function() {
    zadniF.style.display = "flex";
}

});

closeBtn.onclick = function() {

zadniF.style.display = "none" ;

};


window.onclick = function(event) {
    if (event.target === zadniF){
        zadniF.style.display = "none"
    }




};
