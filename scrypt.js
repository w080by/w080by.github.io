function button() {
  let para = document.createElement('p');
  para.textContent = 'No, pls!!! Noooooooooooo, Im tickled';
  document.body.appendChild(para);
}

const buttons = document.querySelectorAll('button');

for(let i = 0; i < buttons.length ; i++) {
  buttons[i].addEventListener('click', button);
}
