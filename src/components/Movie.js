import React from 'react'

const IMG_API = "https://image.tmdb.org/t/p/w1280";

const setVoteClass = (vote) => {
    if(vote >= 8){
        return "green"
    }
    else if(vote >= 6 ) {
        return "orange"
    }
    else {
        return "red"
    }
}

const Movie = ({title, poster_path, overview, vote_average}) =>
 <div className="movie">
    
     <img src={
         poster_path 
         ? IMG_API + poster_path
        :`https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.amazon.in%2FWarehouse-hollywood-ACTION-director-camera%2Fdp%2FB01IKREDYS&psig=AOvVaw3bEYh4FjGiCKXjsf3ggHxH&ust=1642004537763000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNigr-CNqvUCFQAAAAAdAAAAABAJ`
         }
         alt={title} />
     <div className="movie-info">
         <h3>{title}</h3>
         <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
         
     </div>

     {/* ovaj tekst sto ce da se hoveruje */}
     <div className="movie-over">
         <h2>Overview:</h2>
         <p>{overview}</p>
     </div>
    
</div>


export default Movie
