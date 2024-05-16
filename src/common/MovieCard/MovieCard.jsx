import React from "react";
import { Badge } from "react-bootstrap";
import "./MovieCard.style.css";
import { useMovieGenreQuery } from "../../hooks/useMovieGenre";

const MovieCard = ({ movie }) => {
  const {data:genreData} = useMovieGenreQuery();

  const showGenre=(genreIdList)=>{
    if(!genreData)  return []
    const genreNameList= genreIdList.map((id)=>{
      const genreObj = genreData.find((genre)=>genre.id===id)
      return genreObj.name;
    })

    return genreNameList;
  }

  return (
    <div
      style={{
        backgroundImage:
          "url(" +
          `https://media.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}` +
          ")",
      }}
      className="movie-card"
    >
      <div className="overlay">
        <h1>{movie.title}</h1>
        {showGenre(movie.genre_ids).map((id, index) => (
          <Badge bg="danger" key={index}>
            {id}
          </Badge>
        ))}
        <div className="overlay-bottom">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFYJdWCzbK8OIQI2XYcaggSzn7Ga6pX2m_bw&usqp=CAU"
            className="rounded"
            alt="..."
            height="20px"
          />
          <div>{movie.vote_average}</div>

          <img
            src="https://i.pinimg.com/564x/cd/d6/9d/cdd69ddb0d57f4109a5fa5d4012c0ffc.jpg"
            className="rounded"
            alt="..."
            height="20px"
          />
          <div>{movie.popularity}</div>
          <div>
            {movie.adult ? (
              <img
                src="https://static.vecteezy.com/system/resources/previews/021/933/003/original/sign-of-adult-only-for-eighteen-plus-or-18-plus-and-twenty-one-plus-or-21-plus-age-in-the-filmstrip-age-rating-movie-icon-symbol-for-movie-poster-apps-website-or-graphic-design-element-vector.jpg"
                alt="over18"
                width="20px"
              />
            ) : (
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b8/Republic_Of_Korea_Broadcasting-TV_Rating_System%28ALL%29.png"
                alt="under18"
                width="20px"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
