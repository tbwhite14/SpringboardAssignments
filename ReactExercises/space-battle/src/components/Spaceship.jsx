function Spaceship({ship, currentHealth}) {
    return(
        <div id={`${ship}-ship`} className="spaceship">
            {ship} health :{currentHealth}
        </div>
    )
}

export default Spaceship;