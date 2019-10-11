<<<<<<< HEAD

const mult = (i, j) => { return i*j }
=======
const mul = (i, j) => { return i*j }
>>>>>>> ee44779c722b3bf1601ee3a78a6c207fc28ad8e2

const updateWithAdd = async (event) => {
  document.querySelector('#result').innerHTML = ''
  
    const i = parseInt(document.querySelector('#firstInput').value)
    const j = parseInt(document.querySelector('#secondInput').value)
    const ans = `Total space required is ${mul(i, j)}.`
    document.querySelector('#result').innerHTML = ans
  }

  document.addEventListener('click', event => {
  if (event.target && event.target.id === 'addButton') { updateWithAdd(event) }
})
<<<<<<< HEAD

document.addEventListener('click', event => {
  if (event.target && event.target.id === 'getJokeButton') { updateWithJoke(event) }
})



=======
>>>>>>> ee44779c722b3bf1601ee3a78a6c207fc28ad8e2
