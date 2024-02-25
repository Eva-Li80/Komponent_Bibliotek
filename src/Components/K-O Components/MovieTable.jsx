import React from "react";
import "./styles/movies.css"

const MovieTable = ({ data }) => {
  return (
    <table>
      <tbody className="movies">
        {data.map((item, index) => (
          <tr className="movie-container" key={index}>
            <td className="title">{item.title}</td>
            <td className="year">{item.year}</td>
            <td className="genre">{item.genre}</td>
            <td className="director">{item.director}</td>
            <td>
              <img className="bild" src={item.posterUrl} alt={item.title} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MovieTable;
