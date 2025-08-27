// Love Counter 
const loveButtons = document.getElementsByClassName("love-button");
let loveCountEl = document.getElementById('love-count');


for(let loveButton of loveButtons){
    loveButton.addEventListener('click',function(){
        let loveCount = parseInt(loveCountEl.innerText) ;
        loveCountEl.innerText= ++loveCount
        
    })
}

// Copy Function 
let copyCountEl=document.getElementById('copy-count');
let copyCount= parseInt(copyCountEl.innerText) ;
let copyButtons= document.getElementsByClassName('copy-button');

for(let copyButton of copyButtons){
    copyButton.addEventListener('click', function(){
        copyCount++;
        copyCountEl.innerText=copyCount;
    })
}

function clickFunction(btnID , txtID){
    document.getElementById(btnID).addEventListener('click',function(){
    const copyText  = document.getElementById(txtID).innerText;
    navigator.clipboard.writeText(copyText);
})
}


// Button-1 
clickFunction('copy-button-1','copy-text-1');




// Button-2 
clickFunction('copy-button-2','copy-text-2')


// Button-3 
clickFunction('copy-button-3','copy-text-3')