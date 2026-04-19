const form =  document.querySelector('#colorpage');
const colorInput = document.querySelector('#color');
const selectedColor = document.querySelector('#selectedColor');
const colorCode = document.querySelector('#colorCode');
const clearHistory = document.querySelector('#clearHistory');
const newColorHistory = document.querySelector('#colorHistory');



colorInput.addEventListener('input', function(){
    colorCode.textContent = "Color code: " + colorInput.value;
    colorCode.textContent = "Color code: " + colorInput.value;
    

    selectedColor.style.backgroundColor = colorInput.value;
    


})




// // form.addEventListener('submit', function(event){
// //     event.preventDefault();




  

// // })

// const form = document.querySelector('#colorpage');
// const colorInput = document.querySelector('#color');
// const selectedColor = document.querySelector('#selectedColor');
// const colorCode = document.querySelector('#colorCode');

// colorInput.addEventListener('input', function() {
//     // Ku qor code-ka midabka gudaha textbox
//     selectedColor.value = colorInput.value;

//     // Bedel background-ka textbox si uu u noqdo midabka la doortay
//     selectedColor.style.backgroundColor = colorInput.value;

//     // Ku qor code-ka midabka hoosta textbox
//     colorCode.textContent = "Color code: " + colorInput.value;
// });

// form.addEventListener('submit', function(event){
//     event.preventDefault();
// });

