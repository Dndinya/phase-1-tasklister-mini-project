document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector('form')
  form.addEventListener('submit', (e) =>{
    e.preventDefault()
    takeTask(e.target.querySelector('#new-task-description').value)
    form.reset()
  })
});

function takeTask(todo){
  let li = document.createElement('li')
  let btn = document.createElement('button')
  btn.addEventListener('click',deleteTask)
  li.textContent =  `${todo}  `
  btn.textContent = 'x'
  li.appendChild(btn)
  document.querySelector('#tasks').appendChild(li)
  console.log(li)
}

function deleteTask(e){
  e.target.parentNode.remove()
}