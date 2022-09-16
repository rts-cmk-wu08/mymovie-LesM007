document.addEventListener("DOMContentLoaded", () =>{

    let wrapper = document.querySelector("#wrapper")
    let popSec = document.createElement("section")
    let imgpath = "https://image.tmdb.org/t/p/original"
    let key = "d27cfb6baa191e1cd0eaa5f32b9e1d80"
        console.log(wrapper)

    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`)
        .then(response => response.json())
        .then(data => {

            console.log(data)

        let myHeader = document.createElement("header")    //konstruerer html med js
        let headDiv = document.createElement("div")
        let myH1 = document.createElement("h1")
        let headButton = document.createElement("button")
        let myMain = document.createElement("main")
        let wrapDiv = document.createElement("div")
        let myH2 = document.createElement("h2")
        let navButton = document.createElement("button")
        let nowList = document.createElement("div")
        let footer = document.createElement("footer")
        
        myH1.innerHTML = "MyMovies"
        headButton.innerHTML = "See more"
        myH2.innerHTML = "Now Showing"
        navButton.innerHTML = "See more"

        wrapper.append(myHeader)
        myHeader.append(headDiv)
        headDiv.append(myH1)
        headDiv.append(headButton)
        wrapper.append(myMain)
        myMain.append(wrapDiv)
        wrapDiv.append(myH2)
        wrapDiv.append(navButton)
        myMain.append(nowList)
        myMain.append(popSec)
        wrapper.append(footer)

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
        nowList.append(link)

            });
        });

    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`)
        .then(response => response.json())
        .then(data => {

            console.log(data)

        let popDiv = document.createElement("div")
        let poplinDiv = document.createElement("h2")
        let popButton = document.createElement("button")
        let popList = document.createElement("div")

        poplinDiv.innerHTML = "Popular"
        popButton.innerHTML = "See more"

        popSec.append(popDiv)
        popDiv.append(poplinDiv)
        popDiv.append(popButton)
        popSec.append(popList)

    data.results.forEach(result =>{
        let link = document.createElement("a")
        let rat = result.vote_average
        let newRat = Math.round(rat* 10)/ 10
        link.classList.add("now_img")
        link.setAttribute("href", `details.html?title=${result.id}`)
        link.innerHTML = `
        <img src="${imgpath+result.poster_path}" alt="movie poster ${result.title}">
        <p>${result.title}</p>
        <div><i class="fa-solid fa-sharp fa-star"></i><span>${newRat}</span>/10 IMDb</div>
        
        `
        popList.append(link)
    })
        })
        });