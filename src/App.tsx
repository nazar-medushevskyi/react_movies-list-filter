import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App: React.FC = () => {
  const [queryInfo, setQueryInfo] = useState(' ');

  const helperFunction = (text: string) => {
    const query = queryInfo.trim().toUpperCase();

    return text.toUpperCase().includes(query);
  };

  const visableMovies = moviesFromServer.filter(movie => {
    const { description, title } = movie;

    return helperFunction(title) || helperFunction(description);
  });

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="search-query" className="label">
              Search movie
            </label>

            <div className="control">
              <input
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
                onChange={event => setQueryInfo(event.target.value)}
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visableMovies} />
      </div>

      <div className="sidebar">
        Sidebar goes here
      </div>
    </div>
  );
};
