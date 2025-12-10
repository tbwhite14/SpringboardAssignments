import { useState } from "react";
import Spaceship from "./Spaceship";
import FireButton from "./FireButton";
import ResetButton from "./ResetButton";
import BattleMessage from "./BattleMessage";
import "./SpaceBattle.css";

function SpaceBattle() {
    const staringHealth = 100;
    const [health, setHealth] = useState({player: staringHealth, enemy: staringHealth})

    const gameState = 
        health.player === 0
        || health.enemy === 0
        ? "Over"
        : "Active";

    function fire() {
        const playerDamage = Math.floor(Math.random()*50);
        const enemyDamage = Math.floor(Math.random()*50);
        const newPlayerHealth = health.player - playerDamage > 0 ? health.player - playerDamage : 0;
        const newEnemyHealth = health.enemy - enemyDamage > 0 ? health.enemy - enemyDamage : 0;
        setHealth({player: newPlayerHealth, enemy: newEnemyHealth});
    }

    function resetGame() {
        setHealth({player: staringHealth, enemy: staringHealth})
    }

    return(
        <div key="battle-sim" id="game-box">
            <BattleMessage gameState={gameState} player={health.player}/>
            <div id="ship-box">
                <Spaceship key="Player" ship="Player" currentHealth={health.player}/>
                <Spaceship key="Enemy" ship="Enemy" currentHealth={health.enemy}/>
            </div>
            {
                gameState === "Active" 
                    ? <FireButton fire={fire}/> 
                    : <ResetButton reset={resetGame}/>
            }
        </div>
    )

}

export default SpaceBattle;