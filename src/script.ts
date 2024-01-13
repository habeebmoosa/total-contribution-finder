const API: string = "https://github-contributions-api.jogruber.de/v4/";

const totalContributions = document.querySelector("#totalContributions") as HTMLParagraphElement;
const inputUsername = document.querySelector("#username") as HTMLInputElement;
const btn = document.querySelector("#btn") as HTMLButtonElement;

btn.addEventListener("click", () => {
    let username = inputUsername.value;
    fetch(API + username)
        .then(res => res.json())
        .then(data => {
            let contributions: Object = data.total;
            let total:number = 0;

            for (let value of Object.values(contributions)) {
                console.log(value);
                total += Number(value);
            }
            console.log(total);

            if(totalContributions) {
                totalContributions.innerHTML = String(total);
            }
        })
        .catch( err =>{
            alert("User not found");
            totalContributions.innerHTML = "";
            inputUsername.value = "";
        });
});
