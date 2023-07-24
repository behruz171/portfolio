// it's speking input ----------------------------
let p2_text = document.querySelector("h2")
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
    bub.classList.toggle('var')
    nimadir()
}

function nimadir(){
    let bub = document.querySelector('.bubbles')
    debounce(()=>{
        bub.classList = 'bubbles'
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