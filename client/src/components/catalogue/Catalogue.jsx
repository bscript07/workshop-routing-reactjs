import { useEffect, useState } from 'react';
import * as gameService from "../../services/gameService";
import GameList from '../game-item/GameList';

const Catalogue = () => {
  const [games, setGames] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    gameService.getAll()
      .then(result => {
        setGames(result);
      })
      .catch(err => {
        setError(err.message);
      });
  }, []);

  return (
    <section id="catalog-page">
      <h1>All Games</h1>

      {/* {error && <p>Error: {error}</p>} */}
      {games.map((game, index) => (
        <GameList key={game._id || index} {...game} />
      ))}
      {games.length === 0 && (
        <h3 className="no-articles">No articles yet</h3>
      )}
    </section>
  );
};

export default Catalogue;

