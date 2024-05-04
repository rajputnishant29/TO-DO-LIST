const inputbox = document.getElementById("inputbox");
const listcontainer = document.getElementById("listcontainer")

function addTask() {
    if(inputbox.value === ''){
        alert("you must write something")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value
        listcontainer.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputbox.value = '';
    saveData();
}
listcontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false)
function saveData() {
    localStorage.setItem("data", listcontainer.innerHTML)
    
}
function showTask() {
    listcontainer.innerHTML = localStorage.getItem("data")
}
showTask()

function pageanimation() {
    let tl = gsap.timeline();
    tl.from(".todo",{
        x: "-50",
        opacity:0.2,
        duration:2,
        ease: Expo.easeInOut,
    })
    
}

pageanimation();
