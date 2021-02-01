
let seconde= document.getElementById("seconde"),
first = document.getElementById("first"),
third =document.getElementById("third"),
first_div =document.getElementById("first-div"),
seconded_div = document.getElementById("seconde-div"),
third_div = document.getElementById("third-div")

seconde.addEventListener("click",function(){
this.classList.add("active")
first.classList.remove("active")
third.classList.remove("active")
if(seconde.getAttribute("class")=="active"){
    first_div.style.display = "none"
    third_div.style.display = "none"
    seconded_div.style.display = "block"
}
})

first.addEventListener("click",function(){
this.classList.add("active")
seconde.classList.remove("active")
third.classList.remove("active")
if(first.getAttribute("class")=="active"){
    seconded_div.style.display = "none"
    third_div.style.display = "none"
    first_div.style.display = "block"
}
})

third.addEventListener("click",function(){
this.classList.add("active")
seconde.classList.remove("active")
first.classList.remove("active")
if(third.getAttribute("class")=="active"){
    seconded_div.style.display = "none"
    first_div.style.display = "none"
    third_div.style.display = "block"
}
})

