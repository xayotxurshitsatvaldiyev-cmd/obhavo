fetch('https://api.weatherapi.com/v1/current.json?key=62a8e7e0c26f4333b81154101251911&q=bekobod&aqi=no')
    .then(response => response.json())
    .then(data => {
        const imgD = document.getElementById('img-main')
        const textD = document.getElementById('text-main')
        const temp = document.getElementById('temp')
        const shaml = document.getElementById('shamol')

        const imgE = document.createElement('img')
        imgE.src = data.current.condition.icon 
        imgE.alt = "bu iconca"

        const p = document.createElement('p')
        p.textContent = data.current.temp_c + "℃"
        const p2 = document.createElement('p')
        p2.textContent = data.current.temp_f + "℉"
        p.classList.add('mx-2')
        p2.classList.add('mx-2')
        p.classList.add('fs-2')
        p2.classList.add('fs-2')
        p.classList.add('fw-bold')
        p2.classList.add('fw-bold')

        const shamol = document.createElement('p')
        shamol.textContent = "shamol: " + data.current.wind_mph + "ml/h" + " , " + data.current.wind_kph + "km/h"
        shamol.setAttribute('class', 'fw-bold fs-6')

        const namlik = document.createElement('p')
        namlik.textContent = "Namlik: " + data.current.humidity + "%"
        namlik.setAttribute('class', 'fw-bold fs-6')


        imgD.appendChild(imgE)
        temp.appendChild(p)
        temp.appendChild(p2)
        shaml.appendChild(shamol)
        shaml.appendChild(namlik)

        const shaharNomi = document.createElement('h3')
        shaharNomi.textContent = "📌" + data.location.name
        shaharNomi.classList.add('pt-3')
        shaharNomi.classList.add('mt-4')

        const mamlakat = document.createElement('h4')
        mamlakat.textContent = "🌍" + data.location.country
        mamlakat.classList.add('py-4')

        const vaqt = document.createElement('h4')
        vaqt.textContent = data.location.localtime



        textD.appendChild(shaharNomi)
        textD.appendChild(mamlakat)
        textD.appendChild(vaqt)

    })

