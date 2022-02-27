const covidData = async () => {
    const url = `https://disease.sh/v3/covid-19/all`
    const res = await fetch(url);
    const data = await res.json()
    showDisplay(data)
}
covidData()
const showDisplay = data => {
    const showUpdated = document.getElementById('show-updated');
    const newDiv = document.createElement("div");
    newDiv.classList.add("covid19-update")
    newDiv.innerHTML = `
              <h1 class="covid-text"> Corona Virus Cases:</h1>
              <h2 class ="covid-update-text">${data.cases}</h2>
              <h1 class="covid-text"> Total Death:</h1>
              <h2 class="covid-update-text">${data.deaths}</h2>
              <h1 class="covid-text"> Recovered:</h1>
              <h2 class="covid-update-text">${data.recovered}</h2>
    
    `
    showUpdated.appendChild(newDiv)
}