// Start Nav 
let nav=document.querySelectorAll("nav span");
nav.forEach(span=>{
span.addEventListener("click",function(){
document.querySelector(span.getAttribute("data-tit")).scrollIntoView({
    behavior:"smooth"
})
})
})
// Start Show Build 
let navbar=document.querySelector("nav");
let showbuild=document.querySelectorAll(".Show_Build .buttons button")
showbuild.forEach(btn=>{
    btn.addEventListener("click",function(){
       showbuild.forEach(btn2=>{
        btn2.classList.remove("active")
       })
       btn.classList.add("active")
        if(btn.getAttribute("data-c")==="Yes"){
            navbar.classList.remove("Show")
        }else{
            navbar.classList.add("Show")

        }

    })
})
console.log(showbuild)
// End Show Build 
// End Nav
// Start Image Random
let Lading=document.querySelector(".Landing");
let array=["01.jpg","02.jpg","03.jpg","04.jpg","05.jpg"]
setInterval(function(){
    let random=Math.floor(Math.random() * array.length)
    Lading.style.backgroundImage=`url(imgs/${array[random]})`
},3000)
// End Image Random
// Start  NavBar
let button=document.querySelector(".button");
let links=document.querySelector(".button .links");
button.addEventListener("click",function(){
    links.classList.toggle("Start")
})
// Start Links 
let linklila=document.querySelectorAll(".links-rel li a");
linklila.forEach(ae=>{
    ae.addEventListener("click",function(e){
        e.preventDefault();
        document.querySelector(ae.getAttribute("data-tit"))
        .scrollIntoView({
            behavior:"smooth"    
        })
    })
})
let linkli=document.querySelectorAll(".button .links li a");
linkli.forEach(a=>{
    a.addEventListener("click",function(e){
        e.preventDefault()
        document.querySelector(a.getAttribute("data-tit")).scrollIntoView({
            behavior:"smooth"
        })
    })
})
// End NavBar
// Start Setting  
let Setting=document.querySelector(".Setting");
let Setting_Icon=document.querySelector(".Setting .icon ");
let Setting_i=document.querySelector(".Setting .icon i ");
Setting_Icon.addEventListener("click",function(){
Setting.classList.toggle("open")
Setting_i.classList.toggle("fa-spin")
})
// End Setting  
// Start Links 
let lis=document.querySelectorAll(".color ul li");
lis.forEach(li=>{
    li.addEventListener("click",function(){
        lis.forEach(list=>{
            list.classList.remove("active")
        })
        li.classList.add("active")
        document.documentElement.style.setProperty("--Main-Color",li.getAttribute("data-color"))  
    })
})
// End Links
// Start Next_Or_Back
let buttons=document.querySelectorAll(".Next_Or_Random .buttons  button");
buttons.forEach(btn=>{
    btn.addEventListener("click",function(){
        buttons.forEach(btn2=>{
            btn2.classList.remove("active")
        })
        btn.classList.add("active")
        if(btn.getAttribute("data-click")==="Next"){
            Next()
        }
        else{
            Back()
        }
    })
})
let sum=0;
function Next(){
    Lading.style.backgroundImage=`url(imgs/${array[sum]})`;
    sum++
    if(sum>=array.length){
    sum=0  
    }
}
let Last=array.length-1;
function Back(){
    Lading.style.backgroundImage=`url(imgs/${array[Last]})`;
    Last--
    if(Last==0){
        Last=array.length-1;
    }}
window.onscroll=function(){
    let OurSkills=document.querySelector(".Our_Skills");
    let skillsOffsetTop=OurSkills.offsetTop;
    let skillsOffsetHeihg=OurSkills.offsetHeight;
    let innerHeight=window.innerHeight;
    let page=this.pageYOffset;
    if(page >=(skillsOffsetTop + skillsOffsetHeihg -innerHeight)){
    let span=document.querySelectorAll(".prgras span");
    span.forEach(spane=>{
    spane.style.width=spane.getAttribute("data-width")
})
}}
// Start Our_Gallary
let Our_Gallary=document.querySelector(".Our_Gallary");
 let imgs=document.querySelectorAll(".Our_Gallary .imgs img");
 imgs.forEach(img=>{
        img.addEventListener("click",function(){
         let div=document.createElement("div");
         div.className='Overlay';
         let divFather=document.createElement("div");
         divFather.className="White"

         if(img.alt){
            let h3=document.createElement("h3");
            let H3txext=document.createTextNode(img.alt);
            h3.appendChild(H3txext)
            h3.className="img_Con"
           divFather.appendChild(h3)
           }

        let CreateImage=document.createElement("img");
        CreateImage.className="Newimg"
        CreateImage.src=img.src
        divFather.appendChild(CreateImage)

         let Span=document.createElement("span");
         let SpanText=document.createTextNode("X")
         Span.appendChild(SpanText)
         Span.className="X"
        divFather.appendChild(Span)
        divFather.onclick=function(){
            div.remove()
        }
        div.appendChild(divFather) 
         document.body.appendChild(div)
    })
 })
