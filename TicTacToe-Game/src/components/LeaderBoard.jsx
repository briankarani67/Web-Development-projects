import React from 'react';
import '../css/Leader.css';

function LeaderBoard() {
    const [players, setPlayers] = React.useState([
        {id:1, name: 'Precious', score: 100 },
        {id:2, name: 'Faith', score: 50 },
        {id:3, name: 'Pamela', score: 60 },
        {id:4, name: 'Tunf', score: 20 },
    ]);

    const sortedPlayers = [...players].sort((a, b) => b.score - a.score);
  return (
    <div className='leader_board'>
        <h1>LeaderBoard</h1>
        <div className='people'>
            {sortedPlayers.map((player, index) =>(
                <div className='individual'  key={player.id}>
                    <h2>{index + 1}. {player.name} </h2>
                    <p>{player.score} points</p>
                </div>
            ) )}
        </div>
    </div>
  )
}

export default LeaderBoard