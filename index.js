document.addEventListener("DOMContentLoaded", () =>{

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

    headerElm.innerHTML= `
        <h1>MyMovies</h1>
        <button>Switch</button>
        `

    let nowElm = document.createElement("section")
    nowElm.classList.add("now_playing")
    mainElm.append(nowElm)

    let nowHeader = document.createElement("header")
    nowHeader.innerHTML=`
    <h2>Now Showing</h2>
    <a href>See more</a>
    `
    nowElm.append(nowHeader)

    let nowMovies = document.createElement("div")
    nowElm.append(nowMovies)

    fetch(`${baseURL}/movie/now_playing?api_key=${key}`)
        .then(response => response.json())
        .then(data => {

            console.log(data)

        data.results.forEach(result => {
            let link = document.createElement("a")
            let rat = result.vote_average
            let newRat = Math.round(rat* 10)/ 10
            link.classList.add("now_img")
            link.setAttribute("href", `details.html?id=${result.id}`)        //id er bedre til videre
            link.innerHTML = `
            <img src="${imgpath+result.poster_path}" alt="movie poster ${result.title}">
            <div><h3>${result.title}</h3>
            <p><i class="fa-solid fa-sharp fa-star"></i>${newRat}/10 IMDb</p>
            </div>
        `
        nowMovies.append(link)

            });
        });

    let popElm = document.createElement("section")
    popElm.classList.add("pop_movie")
    mainElm.append(popElm)

    let popHeader = document.createElement("header")
    popHeader.innerHTML = `
    <h2>Popular</h2>
    <a href>See more</a>
    `

    popElm.append(popHeader)

    let popMovies = document.createElement("div")
    popElm.append(popMovies)

    fetch(`${baseURL}/movie/popular?api_key=${key}`)
        .then(response => response.json())
        .then(data => {

            console.log(data)

        data.results.forEach(result =>{
            let link = document.createElement("a")
            let rat = result.vote_average
            let newRat = Math.round(rat* 10)/ 10
            link.classList.add("now_img2")
            link.setAttribute("href", `details.html?id=${result.id}`)
            link.innerHTML = `
            <img src="${imgpath+result.poster_path}" alt="movie poster ${result.title}">
            <div><h3>${result.title}</h3>
            <p><i class="fa-solid fa-sharp fa-star"></i>${newRat}/10 IMDb</p>
            <p class="genres"></p>
            <p></p></div>
        `
        popMovies.append(link)

        let genButton = link.querySelector(".genres")

        //console.log(genButton)
        result.genre_ids.forEach(id =>{
            let genList = genres.find(genre => genre.id == id)
            console.log(genList)
            let genSpan = document.createElement("span")
            genSpan.innerText = genList.name
        })
    })
        })
        });