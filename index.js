document.addEventListener("DOMContentLoaded", () =>{

    let section = document.querySelector("section")
    let imgpath = "https://image.tmdb.org/t/p/original"
    let key = "d27cfb6baa191e1cd0eaa5f32b9e1d80"


    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`)
        .then(response => response.json())
        .then(data => {

            console.log(data)

        let link = document.createElement("div")
        section.innerHTML = `
        <div><h2>Now Showing</h2>
        <button>See more</button></div>`

    data.results.forEach(result => {
        let link = document.createElement("a")
        let rat = result.vote_average
        let newRat = Math.round(rat* 10)/ 10
        link.classList.add("now_img")
        link.setAttribute("href", `details.html?title=${result.title}`)
        link.innerHTML = `
        <img src="${imgpath+result.poster_path}" alt="movie poster ${result.title}">
        <li>${result.title}</li>
        <div><i class="fa-sharp fa-solid fa-star"></i><span>${newRat}</span>/10 IMDb</div>
       
            `
        document.body.append(link)

            });
        });

    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`)
        .then(response => response.json())
        .then(data => {
            console.log(data)

    data.results.forEach(result =>{
        let link = document.createElement("a")
        link.setAttribute("href", `details.html?title=${result.title}`)
        link.innerHTML = `
        <img src="${imgpath+result.poster_path}" alt="movie poster ${result.title}">
        <li>${result.title}</li>
        `
        document.body.append(link)
    })
        })
        });