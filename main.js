// let text1 = "hello i am front end develop. it's my porfolio"
let p2_text = document.querySelector("h2")
let timeoutId;
const debounce = (calback) =>{
    clearTimeout(timeoutId)
    timeoutId = setTimeout(()=> calback(),1200)
}

p2_text.oninput = (e)=>{
    let utterance = new SpeechSynthesisUtterance(e.target.innerHTML)
    debounce(()=>{
        speechSynthesis.speak(utterance);
    })
}




let bubbles = document.querySelector('.bubbles')
for(let i = 1;i<=37;i++){
    let box = document.createElement('span')
    box.style = `--i:${Math.floor(Math.random()*30) + 4};`
    bubbles.appendChild(box)
}

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
