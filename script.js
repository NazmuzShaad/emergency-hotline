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
    alert(copyText + " " + "Copied to Clipboard📋")
    let copyButtonEl=document.getElementById(btnID);
    copyButtonEl.innerText = "Copied!";

})
}

// Call Function 
const callHistory=[];

function callFunction(callBtnId,serviceId,NumberId){
    const service= document.getElementById(serviceId).innerText;
    const number= document.getElementById(NumberId).innerText

    document.getElementById(callBtnId).addEventListener('click',function(){
    let coinCountEl=document.getElementById('coin-count')
    let coinCount= parseInt(coinCountEl.innerText);
    if(coinCount<20){
        alert('You do not have enough coin');
        return;
    }
    alert("📞 Calling"+ " " + service + " " + number + "....")
    coinCountEl.innerText=coinCount-20 ;

            // Call history Part 

    let data={serviceName:service,    
            number:number,  
            time:new Date().toLocaleTimeString()}

    callHistory.push(data);
    
    let historyContainer=document.getElementById('history-container');
    let div= document.createElement('div');
    div.innerHTML=`
                    <div class="p-4 rounded-lg bg-[#FAFAFA] flex justify-between items-center">
                    <div>
                         <h5 class="text-lg font-semibold">${data.serviceName}</h5>
                         <p class="text-[#5C5C5C] text-lg">${data.number}</p>
                    </div>
                    <div class="text-lg">
                        ${data.time}
                    </div>
                   

                </div>
    `
    historyContainer.appendChild(div);
})
}

// History Clear Button 
document.getElementById('clear-button').addEventListener('click', function(){

    callHistory.length = 0;
    document.getElementById('history-container').innerHTML = "";
    
})



// Button-1 
clickFunction('copy-button-1','copy-text-1');
callFunction('call-button-1','service-1','copy-text-1')

// Button-2 
clickFunction('copy-button-2','copy-text-2')
callFunction('call-button-2','service-2','copy-text-2')

// Button-3 
clickFunction('copy-button-3','copy-text-3')
callFunction('call-button-3','service-3','copy-text-3')

// Button-4 
clickFunction('copy-button-4','copy-text-4')
callFunction('call-button-4','service-4','copy-text-4')

// Button-5 
clickFunction('copy-button-5','copy-text-5')
callFunction('call-button-5','service-5','copy-text-5')

// Button-6 
clickFunction('copy-button-6','copy-text-6')
callFunction('call-button-6','service-6','copy-text-6')

// Button-7 
clickFunction('copy-button-7','copy-text-7')
callFunction('call-button-7','service-7','copy-text-7')

// Button-8
clickFunction('copy-button-8','copy-text-8')
callFunction('call-button-8','service-8','copy-text-8')

// Button-9 
clickFunction('copy-button-9','copy-text-9')
callFunction('call-button-9','service-9','copy-text-9')

