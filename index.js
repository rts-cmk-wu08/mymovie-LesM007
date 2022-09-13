document.addEventListener("DOMContentLoaded", () =>{

    let section = document.querySelector("section")
    let imgpath = "https://image.tmdb.org/t/p/original"
    let key = "d27cfb6baa191e1cd0eaa5f32b9e1d80"


    fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=d27cfb6baa191e1cd0eaa5f32b9e1d80&language=en-US&page=1")
        .then(response => response.json())
        .then(data => {

            console.log(data)

    data.results.forEach(result => {
        let link = document.createElement("a")
        link.setAttribute("href", `details.html?title=${result.title}`)
        link.innerHTML = `
        <li>${result.title}</li>
        <img src="${imgpath+result.poster_path}" alt="movie poster">
            `
        document.body.append(link)

            });
        });

    fetch("https://api.themoviedb.org/3/movie/popular?api_key=d27cfb6baa191e1cd0eaa5f32b9e1d80&language=en-US&page=1")
        .then(response => response.json())
        .then(data => {
            console.log(data)

    data.results.forEach(result =>{
        let link = document.createElement("a")
        link.setAttribute("href", `details.html?title=${result.title}`)
        link.innerHTML = `
        <li>${result.title}</li>
        <img src="${imgpath+result.poster_path}" alt="movie poster">
            `
        document.body.append(link)
    })
        })
        });