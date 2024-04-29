const display = document.querySelector('#display');
const btn = document.querySelectorAll('.btn');
const clear = document.querySelector('.clear');
const del = document.querySelector('.del');
const equals = document.querySelector('.equals');

for(let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', ()=> {
    display.value += btn[i].value;
    console.log(btn[i].value);
  })
};
clear.addEventListener('click', ()=> {
  display.value = "";
});
del.addEventListener('click', () => {
  display.value = display.value.slice(0,-1);
});
equals.addEventListener('click', () => {
  try{
    display.value = eval(display.value);
  }
  catch(error) {
    display.value = '';
  }
});