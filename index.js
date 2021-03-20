const meme = document.getElementById('new-task-description')

const submitclick = document.getElementById('malo')

const reed = []
const grn = []
const yell = []

function onTaskSubmit(e) {
  e.preventDefault()
  let reed = []
  let grn = []
  let yell = []
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

  let newArray = Array.from(document.getElementsByTagName('ul')[0].children)
  newArray.forEach(element => { 
    if (element.className === "yellow") { 
    yell.push(element)} 
    else if (element.className === "red") { 
    reed.push(element) } 
    else if (element.className === "green") { 
    grn.push(element) }
    const hi = reed.concat(yell, grn)
    hi.forEach(element => {
      tasks.appendChild(li)
      li.innerHTML += element.innerHTML
    })
  })  
  


    
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


