"use strict";
const API = "https://github-contributions-api.jogruber.de/v4/";
const totalContributions = document.querySelector("#totalContributions");
const inputUsername = document.querySelector("#username");
const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    let username = inputUsername.value;
    fetch(API + username)
        .then(res => res.json())
        .then(data => {
        let contributions = data.total;
        let total = 0;
        for (let value of Object.values(contributions)) {
            console.log(value);
            total += Number(value);
        }
        console.log(total);
        if (totalContributions) {
            totalContributions.innerHTML = String(total);
        }
    })
        .catch(err => {
        alert("User not found");
        totalContributions.innerHTML = "";
        inputUsername.value = "";
    });
});
