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
