import { Movie } from "./Movie";

function Movielist({movies}){

    return (
        <div className="Movielist">
                {
                    movies.map((movie) => {
                    return(
                        <Movie
                            key={movie.id} 
                            image={movie.poster_path} 
                            title={movie.original_title}
                            ratingAvg={movie.vote_average}
                            details={movie.overview}>
                        </Movie>)
                    })
                }
        </div>
    )
}
export{Movielist}

