import "./Spaceship.css";

function Spaceship({ship, currentHealth}) {
    return(
        <div id={`${ship}-ship`} className="spaceship">
            {ship} health: <b>{currentHealth}</b>
        </div>
    )
}

export default Spaceship;