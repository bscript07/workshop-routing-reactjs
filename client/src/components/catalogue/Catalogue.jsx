import { useEffect, useState } from 'react';
import * as gameService from "../../services/gameService";
import GameList from '../game-item/GameList';

const Catalogue = () => {

  const [games, setGames] = useState([]);

  useEffect(() => {
    gameService.getAll()
      .then(result => setGames(result))
  }, []);

  console.log(games)
  return (
    <section id="catalog-page">
      <h1>All Games</h1>

      {games.map(game => (
        <GameList key={game._id} {...game} />
      ))}

      {games.length === 0 && (
        <h3 className="no-articles">No articles yet</h3>
      )}
    
    </section>
  );
};

export default Catalogue;
