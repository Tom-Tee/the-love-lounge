

const first = document.getElementById("fname")
const last = document.getElementById("lname")

const callApi = (firstName, secondName) => {
  fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${firstName}&sname=${secondName}`, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "love-calculator.p.rapidapi.com",
      "x-rapidapi-key": "2f5b617ac1mshf7debee4d623250p1f9469jsndde78807ed37"
    }
  })
  .then(response => response.json())
  .then((data) => {
    console.log(data)
    matchResults.innerHTML = `<h1>${data.percentage}%</h1><br>
                              <h1>${data.result}</h1>
                              `
  })
  .catch(err => {
    console.error(err);
  });
}

const matchResults = document.querySelector('.results')

function checkMatch () {
  callApi(first.value, last.value)
}


const btn = document.querySelector('button')

btn.addEventListener('click', checkMatch)
