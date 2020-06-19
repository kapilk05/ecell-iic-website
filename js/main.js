function onClickMenu(){
    document.getElementById("hamburger").classList.toggle("change");
    document.getElementById('row1').classList.toggle("change");
    document.getElementById('row2').classList.toggle("change");
    document.getElementById('menu-bg').classList.toggle("change-bg");
}

$("#readmore").hover(function() {
    document.getElementById('heading').classList.toggle("hvr-underline-from-left");
    document.getElementById('readmore').classList.toggle("hvr-icon-forward");
    
 });

 