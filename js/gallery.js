/*Name this external file gallery.js*/
function upDate(previewPic){
    const c=document.querySelector("#image")
    c.innerHTML = previewPic.alt
    c.style.backgroundImage = `url(${previewPic.src})`;
    }
function unDo(){
    const c=document.querySelector("#image")
    c.innerHTML = "Hover over an image below to display here.";
    c.style.backgroundImage = "";
    }