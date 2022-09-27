document.addEventListener('DOMContentLoaded', function() {

let setActiveStyleSheet = function(title){          // title refererer til title i link i html fil (eg. title="dark" vs "light")
    let css = `link[rel="alternate stylesheet"]`;
    let stylesheets = document.querySelectorAll(css);
    //console.log(stylesheets)

    stylesheets.forEach(sheet => sheet.disabled = true);
    let selector = `link[title="${title}"]`;
    //console.log(selector)

    let activeSheet = document.querySelector(selector);
    //console.log(activeSheet)
    activeSheet.disabled = false;
}
setActiveStyleSheet('light')


})