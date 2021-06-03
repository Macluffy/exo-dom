


let div=document.querySelector("div")
console.log(div);
addEventListener("click",(e)=>{
    if(e.target.getAttribute("id")=="content"){
        console.log("click");
        div.style.border = "solid 1px black"
        
    }
})
let a = document.querySelector("div").lastElementChild
console.log(a);
let p =  document.querySelector("p")
addEventListener("click",(e)=>{
    if(e.target.querySelector("div").lastElementChild=="p"){
        console.log("click");
        p.style.color = "red"
        p.style.fontWeight = "bold"

        
    }
})


// document.body.addEventListener("click",(e)=>{
//     if(e.target.tagName=="content"){
        
//     }
// })