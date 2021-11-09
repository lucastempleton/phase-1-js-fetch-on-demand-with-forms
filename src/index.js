// fetch('http://localhost:3000/movies')
// .then(res => res.json())
// .then(movies => console.log(movies))

const init = () => {
    const inputForm = document.querySelector('form');

    inputForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // let inputValue = (event.target.children[1].value)
    const inputValue = document.querySelector('input#searchByID').value;
        console.log(inputValue)
    
    fetch(`http://localhost:3000/movies/${inputValue}`)
    .then(res => res.json())
    .then(movies => {
        const title = document.querySelector('section#movieDetails h4');
        const summary = document.querySelector('section#movieDetails p');
        title.innerText = movies.title
        summary.innerText = movies.summary
        })

    inputForm.reset()
  });
}

document.addEventListener('DOMContentLoaded', init);