let modbtn = document.querySelector("#modbtn");
let body = document.querySelector("body");

let currmodbtn = "light";

modbtn.addEventListener("mouseover", function () {

    if(currmodbtn === "light"){
        currmodbtn = "dark";
        body.classList.remove("light");
        body.classList.add("dark");
    }
    else{
        currmodbtn = "light";
        body.classList.remove("dark");
        body.classList.add("light");
    }

    console.log(currmodbtn);
});