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

    let backElm = document.createElement("section")
    backElm.classList.add("back_poster")
    mainElm.append(backElm)

    let backHeader = document.createElement("header")
    backHeader.innerHTML = `
    <p><i class="fa-regular fa-arrow-left"></i></p>
    <p><i class="fa-light fa-toggle-large-off"></i></p>`

    backElm.append(backHeader)

    let detailElm = document.createElement("section")
    detailElm.classList.add("detail_info")
    mainElm.append(detailElm)


    fetch(`${baseURL}/movie/${movie_id}?api_key=${key}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)

        let link = document.createElement("img")
        link.classList.add("now_img")
        link.innerHTML = `
        <img src="${imgpath+data.poster_path}" alt="movie poster ${data.title}">
        `
    backElm.append(link)

        let detailHead = document.createElement("header")
        let rat = data.vote_average
        let newRat = Math.round(rat* 10)/ 10
        let run = Math.floor(data.runtime/60)
        let time = data.runtime % 60
        detailHead.classList.add("run_time")
        detailHead.innerHTML =`
        <h1>${data.title}</h1>
        <p><i class="fa-regular fa-bookmark"></i></p>
        <p><i class="fa-solid fa-sharp fa-star"></i>${newRat}/10 IMDb</p>
        <p class="genres"></p>
        <p>Length ${run}h ${time}min</p>
        <p></p>
        `
    detailElm.append(detailHead)

    let genButton = detailHead.querySelector(".genres")

    //console.log(genButton)

        data.genres.forEach(genre => {
            let genSpan = document.createElement("span")
            genSpan.classList.add("genre_button")
            genSpan.innerText = genre.name

    genButton.append(genSpan)
    });
        })
})