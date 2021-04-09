"use strict";


const menu = document.getElementById("menu");
const modal = document.getElementById("modal");


menu.onclick = function() {
    modal.style.display = "block";
}

document.addEventListener('mouseup', function(e) {
    if (!modal.contains(e.target)) {
        modal.style.display = 'none';
    }
});