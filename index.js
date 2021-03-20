const meme = document.getElementById('new-task-description')

const submitclick = document.getElementById('malo')

submitclick.addEventListener('click', onTaskSubmit)


function onTaskSubmit(e) {
  e.preventDefault()
  const yellow = document.getElementById('yellow')
  const tasks = document.getElementById('tasks')
  let li = document.createElement('li')
  li.innerText = meme.value
  if (yellow.checked === true) {
    li.classList.add("yellow")
  }
  else if (red.checked === true) {
    li.classList.add("red")
  }
  else if (green.checked === true) {
    li.classList.add("green")
  }
  let span = document.createElement('span')
  let button = document.createElement('button')
  button.innerText = 'x'
  li.append(span)
  span.append(button)
  button.addEventListener('click', (e) => e.target.closest("li").remove())
  tasks.appendChild(li)
}

submitclick.addEventListener('click', onTaskSubmit)


  // button.addEventListener('click', () => li.remove())