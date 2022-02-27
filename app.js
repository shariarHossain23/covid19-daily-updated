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
              <h2 class="covid-update-recovered">${data.recovered}</h2>
    
    `
    showUpdated.appendChild(newDiv)
}
const specificCountry = async () => {
    const url = `https://disease.sh/v3/covid-19/countries`
    const res = await fetch(url);
    const data = await res.json()
    showCountryDisplay(data)
}
specificCountry()
const showCountryDisplay = data => {
    let count = 0;
    const showDisplay = document.getElementById("country-details")
    data.forEach(country => {
        count++
        const newTr = document.createElement("tr")
        newTr.innerHTML = `
        <th scope="row">${count}</th>
                    <td>${country.country}</td>
                    <td>${country.cases}</td>
                    <td>${country.todayCases}</td>
                    <td>${country.deaths}</td>
                    <td>${country.todayDeaths}</td>
                    <td>${country.recovered}</td>
                    <td>${country.todayRecovered}</td>
                    <td>${country.active}</td>
                    <td>${country.critical}</td>
                    <td>${country.casesPerOneMillion}</td>
                    <td>${country.deathsPerOneMillion}</td>
                    <td>${country.tests}</td>

        `
        showDisplay.appendChild(newTr)
    });
}