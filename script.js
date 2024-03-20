const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const Btn = document.getElementById("btn");
var date = new Date();


function addTask() {
    if (inputBox.value === "") {
        alert("You must write something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value+".     ";
        listContainer.appendChild(li);

        let span2 = document.createElement("span");// for storing the date 
        span2.innerHTML = "["+date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear()+"  "+"]";
        span2.setAttribute("id","span2");
        li.appendChild(span2);

        let span1 = document.createElement("span");// for storing the "cross" symbol
        span1.innerHTML = "\u00d7";
        span1.setAttribute("id","span1");
        li.appendChild(span1);
    }
    
    inputBox.value = "";
    saveData();
}

Btn.addEventListener("click",addTask); // Click event for the button


listContainer.addEventListener("click", (e)=>{
    console.log(e.target.id);
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.id === "span1"){
        e.target.parentElement.remove();
        saveData();
    }
},false);


// set data to the local storage in the form of <li>.....</li>
function saveData() {
    localStorage.setItem("data",listContainer.innerHTML);
}


// retreve data to the local storage in the form of <li>.....</li> whenever the page is opened
function showData(params) {
    listContainer.innerHTML = localStorage.getItem("data");
}

showData(); 