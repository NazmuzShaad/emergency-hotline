// Love Counter 
const loveButtons = document.getElementsByClassName("love-button");
let loveCountEl = document.getElementById('love-count');


for(let loveButton of loveButtons){
    loveButton.addEventListener('click',function(){
        let loveCount = parseInt(loveCountEl.innerText) ;
        loveCountEl.innerText= ++loveCount
        
    })
}


document.getElementById('copy-button-1').addEventListener('click',function(){
    const copyText  = document.getElementById('copy-text-1').innerText;
    navigator.clipboard.writeText(copyText);
})