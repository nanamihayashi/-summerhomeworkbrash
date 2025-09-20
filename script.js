'use strict';
document.querySelectorAll('button.eat').forEach(function(button){
    button.addEventListener('click',function(){
    this.style.backgroundColor= "#d3ccabff";
    setTimeout(() => {
        this.style.backgroundColor = "antiquewhite";
    }, 500);
});
});
