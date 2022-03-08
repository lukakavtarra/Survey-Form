fetch('https://bootcamp-2022.devtest.ge/api/skills')
    .then((response) => response.json())
    .then((data) => appendData(data))
    .catch((err) => console.log('error: ' + err))

function appendData(data) {
    let mainContainer = document.getElementById("language-data ");
    for (let i = 0; i < data.length; i++) {
        let div = document.createElement("option");
        div.innerHTML = data[i].title;
        mainContainer.appendChild(div);
    }
}