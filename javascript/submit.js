function submitFunction(event) {
    event.preventDefault();
    console.log(event.target);
    fetch("https://bootcamp-2022.devtest.ge/api/application", {
        method: "POST",
        Authorization: "9d11e4f3-dd84-4bb4-b5fd-6eac595661c1",
        "Content-Type": "application/json",
        mode: "no-cors",
        Accept: "application/json",
        body: {
            token: "89nOpas|asdanjjh^&as",
            first_name: event.target[0].value,
            last_name: event.target[1].value,
            email: event.target[2].value,
            phone: event.target[3].value,
            skills: [{
                id: 1,
                Language: event.target[4].value,
                experience: event.target[5].value,
            }, ],
            work_preference: "from_home", //radio button
            had_covid: true, //covid radio
            had_covid_at: event.target[12].value,
            vaccinated: true, //vaccine radio
            vaccinated_at: event.target[15].value,
            will_organize_devtalk: true, // radio
            devtalk_topic: event.target[18].value,
            something_special: event.target[19].value,
        },
    }).then((response) => console.log(response));
    // .then((data) => console.log(data));
}

// function submitFunction(event) {

//     event.preventDefault();
//     console.log(event.target[0].value);

// }