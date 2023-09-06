// it's speking input ----------------------------
let p2_text = document.querySelector(".speak_h2")
let timeoutId;
const debounce = (calback) =>{
    clearTimeout(timeoutId)
    timeoutId = setTimeout(()=> calback(),1100)
}

p2_text.oninput = (e)=>{
    let utterance = new SpeechSynthesisUtterance(e.target.innerHTML)
    debounce(()=>{
        speechSynthesis.speak(utterance);
    })
}
// -----------------------------------------------


// it's background animation ---------------------------
let bubbles = document.querySelector('.bubbles')
for(let i = 1;i<=37;i++){
    let box = document.createElement('span')
    box.style = `--i:${Math.floor(Math.random()*30) + 4};`
    bubbles.appendChild(box)
}
//-------------------------------------------------

// it's animation time opacity --------------------------
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    })
})

const hiddenElements = document.querySelectorAll('.container');
hiddenElements.forEach((el)=>observer.observe(el));
const text = document.querySelectorAll('.select_input');
text.forEach((el)=>observer.observe(el))
// -----------------------------------------------------------

// it's animation scrolbar -----------------------------
const div = document.querySelector(".scrol")

window.addEventListener("scroll",()=>{
    const {scrollTop,clientHeight,scrollHeight}= document.documentElement;
    const scrolled = (scrollTop/(scrollHeight-clientHeight)*100)
    div.style.width = `${scrolled}%`
})

//----------------------------------------------------------------

let wrap = document.querySelector('.wrapper')

wrap.onclick = ()=>{
    let bub = document.querySelector('.bubbles')
    // bub.classList.toggle('var')
    bub.style.filter = 'blur(20px)'
    nimadir()
}

function nimadir(){
    let bub = document.querySelector('.bubbles')
    debounce(()=>{
        bub.style.filter = 'blur(0)'
    })
}

// window.addEventListener("scroll",()=>{
//     const {scrollTop,clientHeight,scrollHeight}= document.documentElement;
//     const scrolled = (scrollTop/(scrollHeight-clientHeight)*100)
//     // div.style.width = `${scrolled}%`
//     if(scrolled>50){
//         wrap.style.top = `${scrollTop}px`
//         wrap.style.left = `${-1*scrolled*5}px`
//         console.log(scrolled);
//     }else{
//         wrap.style.top = `${scrollTop}px`
//         wrap.style.left = `${scrolled*5}px`
//         console.log(scrolled);
//     }
// })

const list = document.querySelectorAll('.list')
function activeLink(){
    list.forEach((item)=>
    item.classList.remove('active'));
    this.classList.add('active')
    
}
list.forEach((item)=>
item.addEventListener('click',activeLink));

// ----------------------------------------------
let a = true
const body = document.querySelector("body")
const card = document.querySelectorAll('.box .card')
const indicator = document.querySelector('.indicator')
const nima = document.querySelector('.container3 a span')
const effect_h2 = document.querySelector('.effect_h2 h2')
function bos(){
    if(a == true){
        effect_h2.style.color = '#fff'
        nima.textContent = 'white'
        nima.style.color = '#0e1538'
        nima.style.background = '#fff'
        indicator.className = 'indicator1'
        body.style.background = '#fff'
        card.forEach(item =>
            item.style.background = 'rgba(63, 60, 60, 0.467)')
    }else{
        effect_h2.style.color = '#0c192c'
        nima.textContent = 'dark'
        nima.style.background = '#0e1538'
        nima.style.color = '#fff'
        indicator.className = 'indicator'
        body.style.background = '#0c192c'
        card.forEach(item =>
            item.style.background = 'rgba(225,225,225,0.1)')
    }
    a = !a
}

let count = true
const b_span = document.querySelector('.bubbles')
const b_div = document.querySelectorAll(".box3 div")
function filter(e){
    b_span.style.filter = `blur(${e/10}px)`
    b_div.forEach(item=>{
        item.style.filter = `blur(${e/10}px)`
    })
}

// function check(){
//     if(count == true){
//         b_span.style.opacity = '0'
//     }
//     else{
//         b_span.style.opacity = '1'
//     }
//     count = !count
// }
let box3 = document.querySelector('.box3')
function fonlar(e){
    if(e =='fon2'){
        b_span.style.opacity = '0'
        box3.style.opacity = '1'
    }
    else if(e == 'fon1'){
        box3.style.opacity = '0'
        b_span.style.opacity = '1'
    }
}



