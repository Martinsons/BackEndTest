const div = document.getElementById("div");

async function getAllData() {
    const response = await fetch('/all');
    const data = await response.json();
    
    
    data.map(item => {
        if(item.userText !== undefined){
            console.log(item.userText)
            const textBox = document.createElement('p');
            textBox.textContent = item.userText;
            div.appendChild(textBox);
        }
    })
}

getAllData()