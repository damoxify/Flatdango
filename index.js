const main = document.querySelector("main")
document.addEventListener("DOMContentLoaded", ()=> {
    return fetch("http://localhost:3000/films/2")
    .then((res)=> res.json())
    .then((data)=> {
        const poster = document.createElement("img")
        poster.src = data.poster
        main.appendChild(poster)
        const h2 = document.createElement("h2")
        h2.innerHTML = `Title: ${data.title}`
        main.appendChild(h2);
        const firstParagraph = document.createElement("p")
        firstParagraph.textContent = `Runtime: ${data.runtime} ` 
        main.appendChild(firstParagraph)
        const secondParagraph = document.createElement("p")
        secondParagraph.textContent = `Showtime: ${data.showtime}`
        main.appendChild(secondParagraph)
        const capacity =  data.capacity
        const ticketSold = data.tickets_sold
        console.log(data)
        const paragraph = document.createElement("p")
        paragraph.textContent = `Available tickets: ${capacity - ticketSold}`
        main.appendChild(paragraph) 
    })
})

