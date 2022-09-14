document.addEventListener("DOMContentLoaded", () =>{

    let section = document.querySelector(".now_playing")
    let section2 = document.querySelector(".movie_popular")
    let imgpath = "https://image.tmdb.org/t/p/original"
    let key = "d27cfb6baa191e1cd0eaa5f32b9e1d80"
console.log(section)

    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`)
        .then(response => response.json())
        .then(data => {

            console.log(data)

        let headlineDiv = document.createElement("div")
        let headButton = document.createElement("button")
        headlineDiv.innerHTML = "Now Showing"
        headButton.innerHTML = "See more"

        section.append(headlineDiv)
        section.append(headButton)

    data.results.forEach(result => {
        let link = document.createElement("a")
        let rat = result.vote_average
        let newRat = Math.round(rat* 10)/ 10
        link.classList.add("now_img")
        link.setAttribute("href", `details.html?title=${result.id}`)        //id er bedre til videre
        link.innerHTML = `
        <img src="${imgpath+result.poster_path}" alt="movie poster ${result.title}">
        <p>${result.title}</p>
        <div><i class="fa-solid fa-sharp fa-star"></i><span>${newRat}</span>/10 IMDb</div>
        `
        section.append(link)

            });
        });

    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`)
        .then(response => response.json())
        .then(data => {
            console.log(data)

        let poplinDiv = document.createElement("div")
        let popButton = document.createElement("button")
        poplinDiv.innerHTML = "Popular"
        popButton.innerHTML = "See more"

        section2.append(poplinDiv)
        section2.append(popButton)

    data.results.forEach(result =>{
        let link = document.createElement("a")
        let rat = result.vote_average
        let newRat = Math.round(rat* 10)/ 10
        link.setAttribute("href", `details.html?title=${result.id}`)
        link.innerHTML = `
        <img src="${imgpath+result.poster_path}" alt="movie poster ${result.title}">
        <p>${result.title}</p>
        <div><i class="fa-solid fa-sharp fa-star"></i><span>${newRat}</span>/10 IMDb</div>
        `
        section2.append(link)
    })
        })
        });