const btnhome=document.querySelector("#home")
const btnmenu=document.querySelector("#menu")
const btnourstory=document.querySelector("#ourstory")
const btncontactus=document.querySelector("#contactus")


const section2=document.querySelector("#s2")
const section3=document.querySelector("#s3")
const section4=document.querySelector("#s4")
const section5=document.querySelector("#s5")
const section6=document.querySelector("#s6")


btnhome.addEventListener("click",function(e){
    e.preventDefault()
    section2.scrollIntoView({behavior:"smooth"})
})
btnmenu.addEventListener("click",function(e){
    e.preventDefault()
    section3.scrollIntoView({behavior:"smooth"})
})
btnourstory.addEventListener("click",function(e){
    e.preventDefault()
    section4.scrollIntoView({behavior:"smooth"})
})
btncontactus.addEventListener("click",function(e){
    e.preventDefault()
    section6.scrollIntoView({behavior:"smooth"})
})
