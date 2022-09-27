document.addEventListener('DOMContentLoaded', function() {

let setActiveStyleSheet = function(title){
    let css = `link[rel="alternate stylesheet"]`;
    let stylesheets = document.querySelectorAll(css);
    console.log(stylesheets)
}
})