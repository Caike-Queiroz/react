import Game from "./components/Game";
import NewGameForm from "./components/NewGameForm";
import useGameCollection from "./hooks/useGameCollection";

export default function App() {
  const { games, addGame, removeGame } = useGameCollection();
  
  return (
    <div id="app">
      <h1>Biblioteca de jogos</h1>
      
      <NewGameForm 
        addGame={addGame}
      />

      <div className="games">
        {games.length > 0 ?          
          games.map((game) => (
            <Game
              key={game.id}
              title={game.title}
              cover={game.cover}
              onRemove={() => removeGame(game.id)}
            />))
          : (
            <h2 style={{margin: "4rem auto"}}>Sua biblioteca não possui nenhum jogo !</h2>
          )}
      </div>
    </div>
  )
}