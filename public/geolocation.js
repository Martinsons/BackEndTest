const btn = document.getElementById("btn");


if('geolocation' in navigator) {

    btn.addEventListener('click', () => {

        // Nospiežot pogu, ta aizsuta datus uz serveri

        navigator.geolocation.getCurrentPosition(async position => {
       
            // dati ko iegustam
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
    
            // datus saglabajam, ka objektu
            const data = {lat, lon}
            // datus nosutam uz serveri ar POST metodi, body ir kermenis kura saglabajam datus
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }
    
                // atbilde no servera, kad pieprasa /api celu
                const response = await fetch('/api', options);
                // atbilde tiek sanemta json formata un parversta atpakal
                const json = await response.json();
                console.log(json)

        })
    })
    
    
    


} else {
console.log("nestrada")
}

