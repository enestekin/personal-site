const button = document.getElementById('button');
const textarea = document.querySelector('.text-input');
const comments = document.querySelector('#yorumlar');

button.addEventListener('click', (e) => {
  e.preventDefault();

  if ( textarea.value !== "" ){
    const comment = document.createElement("p");
    comment.textContent = textarea.value;
    comments.appendChild(comment);
    textarea.value = "";
  }
})