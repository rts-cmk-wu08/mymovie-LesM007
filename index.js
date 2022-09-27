document.addEventListener("DOMContentLoaded", () =>{

    let popularPage = 1         //lazy loading skal vide hvor den skal starte
    let wrapper = document.querySelector("#wrapper")
    let imgpath = "https://image.tmdb.org/t/p/original"
    let baseURL = "https://api.themoviedb.org/3"
    let key = "d27cfb6baa191e1cd0eaa5f32b9e1d80&language=en-US&page=1"
    
    let headerElm = document.createElement("header")
    headerElm.classList.add("index_header")
    wrapper.append(headerElm)

    let mainElm = document.createElement("main")
    wrapper.append(mainElm)

    let footerElm = document.createElement("footer")
    wrapper.append(footerElm)

    footerElm.innerHTML=`
    <p><i class="fa-solid fa-film"></i></p>
    <p><i class="fa-regular fa-ticket"></i></p>
    <p><i class="fa-regular fa-bookmark"></i></p>
    `

    headerElm.innerHTML= `
        <h1>MyMovies</h1>
        <label class="switch"><input type="checkbox"><span class="slider round"></span></label>
        `

    let nowElm = document.createElement("section")
    nowElm.classList.add("now_playing")
    mainElm.append(nowElm)

    let nowHeader = document.createElement("header")
    nowHeader.innerHTML=`
    <h2>Now Showing</h2>
    <a class="btn" href>See more</a>
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
            link.classList.add("now_card")
            let rat = result.vote_average
            let newRat = Math.round(rat* 10)/ 10
            link.setAttribute("href", `details.html?id=${result.id}`)
            link.innerHTML = `
            <img src="${imgpath+result.poster_path}" alt="movie poster ${result.title}" class="now_img">
            <div class="now_info"><h3>${result.title}</h3>
            <p><i class="fa-solid fa-star"></i>${newRat}/10 IMDb</p>
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
    <a class="btn" href>See more</a>
    `

    popElm.append(popHeader)

    let popMovies = document.createElement("div")
    popElm.append(popMovies)

    function fetchPopluar (page) {
        fetch(`${baseURL}/movie/popular?api_key=${key}&page=${page}`)
            .then(response => response.json())
            .then(data => {

                console.log(data)

            data.results.forEach((result, index )=>{
                let link = document.createElement("a")
                let rat = result.vote_average
                let newRat = Math.round(rat* 10)/ 10
                link.classList.add("pop_card")
                link.setAttribute("href", `details.html?id=${result.id}`)
                link.innerHTML = `
                <img src="/image/placeholder.gif" alt="movie poster ${result.title}" class="pop_img">
                <div class="pop_info"><h3>${result.title}</h3>
                <p><i class="fa-solid fa-star"></i>${newRat}/10 IMDb</p>
                <p class="genres"></p></div>
            `
            popMovies.append(link)

            let imgElm = link.querySelector("img") //lazy loading start
            //console.log(imgElm)

            let posterImg = new Image()
            posterImg.src = `${imgpath+result.poster_path}`

            posterImg.onload = () =>{
                imgElm.src = posterImg.src
            }                                      //lazy loading slut

            let genButton = link.querySelector(".genres")

            //console.log(genButton)
            result.genre_ids.forEach(id =>{
                let genList = genres.find(genre => genre.id == id)
                console.log(genList)
                let genSpan = document.createElement("span")
                genSpan.innerText = genList.name
                genButton.append(genSpan)
                })

            if (index === 18){                      //infinite scroll start
                const intersectionObserver = new IntersectionObserver((entries) => {
                    // If intersectionRatio is 0, the target is out of view
                    // and we do not need to do anything.
                    if (entries[0].intersectionRatio <= 0) return;

                    popularPage++
                    console.log('in the viewport');
                    fetchPopluar(popularPage)
                    intersectionObserver.unobserve(link)
                  });
                intersectionObserver.observe(link);
            }
            })
        })
    }
    fetchPopluar()                                  //infinite scroll slut
});