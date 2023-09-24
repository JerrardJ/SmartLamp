let onaddh = document.querySelector(".onaddh");
let onminush = document.querySelector(".onminush");
let oncounterh = document.querySelector(".oncounterh");

onaddh.addEventListener('click', addOnCounterH);
onminush.addEventListener('click', minusOnCounterH);

function addOnCounterH(){
    counter_num = oncounterh.innerHTML
    if (counter_num >= 23){
        oncounterh.innerHTML = "00"
    }
    else{
        oncounterh.innerHTML = (parseInt(counter_num)+1).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
    }
    
}

function minusOnCounterH(){
    counter_num = oncounterh.innerHTML
    if (counter_num <= 0){
        oncounterh.innerHTML = "23"
    }
    else{
        oncounterh.innerHTML = (parseInt(counter_num)-1).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
    }
}

let onaddm = document.querySelector(".onaddm");
let onminusm = document.querySelector(".onminusm");
let oncounterm = document.querySelector(".oncounterm");

onaddm.addEventListener('click', addOnCounterM);
onminusm.addEventListener('click', minusOnCounterM);

function addOnCounterM(){
    counter_num = oncounterm.innerHTML
    if (counter_num >= 59){
        oncounterm.innerHTML = "00"
    }
    else {
        oncounterm.innerHTML = (parseInt(counter_num)+1).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
    }
}

function minusOnCounterM(){
    counter_num = oncounterm.innerHTML
    if (counter_num <= 0){
        oncounterm.innerHTML = "59"
    }
    else {
        oncounterm.innerHTML = (parseInt(counter_num)-1).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
    }
}


let offaddh = document.querySelector(".offaddh");
let offminush = document.querySelector(".offminush");
let offcounterh = document.querySelector(".offcounterh");

offaddh.addEventListener('click', addOffCounterH);
offminush.addEventListener('click', minusOffCounterH);

function addOffCounterH(){
    counter_num = offcounterh.innerHTML
    if (counter_num >= 23){
        offcounterh.innerHTML = "00"
    }
    else{
        offcounterh.innerHTML = (parseInt(counter_num)+1).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
    }
    
}

function minusOffCounterH(){
    counter_num = offcounterh.innerHTML
    if (counter_num <= 0){
        offcounterh.innerHTML = "23"
    }
    else{
        offcounterh.innerHTML = (parseInt(counter_num)-1).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
    }
}

let offaddm = document.querySelector(".offaddm");
let offminusm = document.querySelector(".offminusm");
let offcounterm = document.querySelector(".offcounterm");

offaddm.addEventListener('click', addOffCounterM);
offminusm.addEventListener('click', minusOffCounterM);

function addOffCounterM(){
    counter_num = offcounterm.innerHTML
    if (counter_num >= 59){
        offcounterm.innerHTML = "00"
    }
    else {
        offcounterm.innerHTML = (parseInt(counter_num)+1).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
    }
}

function minusOffCounterM(){
    counter_num = offcounterm.innerHTML
    if (counter_num <= 0){
        offcounterm.innerHTML = "59"
    }
    else {
        offcounterm.innerHTML = (parseInt(counter_num)-1).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
    }
}