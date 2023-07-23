let bubbles = document.querySelector('.bubbles')
for(let i = 1;i<=37;i++){
    let box = document.createElement('span')
    box.style = `--i:${Math.floor(Math.random()*30) + 4};`
    bubbles.appendChild(box)
}
