document.addEventListener("DOMContentLoaded", () =>{

    let params = new URLSearchParams(window.location.search)
    let movie_id = params.get("id")

    let wrapper = document.querySelector("#wrapper")
    let imgpath = "https://image.tmdb.org/t/p/original"
    let baseURL = "https://api.themoviedb.org/3"
    let key = "d27cfb6baa191e1cd0eaa5f32b9e1d80&language=en-US&page=1"

    let headerElm = document.createElement("header")
    headerElm.classList.add("header")
    wrapper.append(headerElm)

    let mainElm = document.createElement("main")
    wrapper.append(mainElm)

    let footerElm = document.createElement("footer")
    wrapper.append(footerElm)

    let detailElm = document.createElement

    fetch(`${baseURL}/movie/${movie_id}?api_key=${key}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
})