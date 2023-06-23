window.addEventListener("DOMContentLoaded",()=>{
    const btnBuscarShows=document.getElementById("btnBuscarShows");
    let shows=[];


    btnBuscarShows.addEventListener("click",async()=>{
        try {
            var condicionBuscar = document.getElementById("condicionBuscar").value;
            const response = await fetch(`https://api.tvmaze.com/search/shows?q=${condicionBuscar}`);
            const jsonData = await response.json(); 
            shows = jsonData;
            render(shows);
        } catch (error) {
            error => console.log(error)
        }
    }); 

    const render= arrayShows =>{
        const tarjetasShows = document.getElementById("tarjetasShows");
        tarjetasShows.innerHTML = "";    

        for (const show of shows) {
            tarjetasShows.innerHTML += `
            <div class="card col-sm-12 col-md-4 col-lg-3 mt-3 me-3">
            <img class="card-img-top" src="${show.show.image.medium}" alt="show">
            <div class="card-body">
                <h4 class="card-title">${show.show.name}</h4>
                <p class="card-text"><small class="text-muted">${show.show.rating.average}</small></p>
                <p class="card-text"><b>Género</b>: ${show.show.genres}</p>
                <p class="card-text"><b>Resumen</b>: ${show.show.summary}</p>
                <p class="card-text"><b>Tipo: </b>${show.show.type}</p>
                <p class="card-text"><b>Idioma:</b> ${show.show.language}</p>
                <p class="card-text">${show.show.status}</p>
            </div>
            </div>`
        };
    } 
}) 