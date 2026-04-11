
function changeImge(){

const img = document.querySelector('#img');


const url = prompt('Gali sawir-ka dookhaaga ah:');
img.setAttribute('src', url);

const width = prompt('Gali ballaca sawirka:');

const boreder = prompt('Gali ballaca border-ka:');


}


function setGreenLight (){
    document.body.style.backgroundColor = 'green';
    
}

function setRedLight (){
    document.body.style.backgroundColor = 'red';
}