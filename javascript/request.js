// const request = new XMLHttpRequest();
// request.open("GET", "https://bootcamp-2022.devtest.ge/api/skills");
// request.send();
// request.onload = () => {
//     console.log(request);
//     if (request.status === 200) {
//         console.log(JSON.parse(request.response));
//     } else {
//         console.log(request)
//         console.log('error ${request.status}')
//     }
// }


fetch("https://bootcamp-2022.devtest.ge/api/skills")
    .then(response => {
        return response.json();
    }).then(json => {
        console.log(json);

    })

async function getUsers() {
    let response = await fetch("https://bootcamp-2022.devtest.ge/api/skills");
    let data = await response.json();
    return data;
}
getUsers().then(response => {
    console.log(response)
})