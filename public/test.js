const btn2 = document.getElementById("btn-2");
const input = document.getElementById("input");
const paragraph = document.getElementById("paragraph");

btn2.addEventListener("click", () => {
    getData();
})

async function getData() {
    const userInput = input.value;

    input.value = "";

    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({userText: userInput})
    }
    

    // atbilde no servera, kad pieprasa /api celu
    const response = await fetch('/input', options);
    // atbilde tiek sanemta json formata un parversta atpakal
    const json = await response.json();
    

    

}