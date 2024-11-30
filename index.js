let imgOne=document.getElementById("img1")
let istdive=document.getElementById("imgeonee")

let img2 = document.getElementById("img2")
let zndimg=document.getElementById("img22")

const changebackgound = ()=>{
    istdive.style.backgroundColor = "red"; // Change to green
    console.log("clicked")
}

const changebackgound2 = ()=>{
    zndimg.style.backgroundColor = "red"; // Change to green
    console.log("clicked")
}

imgOne.addEventListener("click",changebackgound);

img2.addEventListener("click",changebackgound2)