

function MissionCard ({name, status, crew}) {
    return (
        <section className="card-section">
            <h3>{name}</h3>
            <p>Status: {status}</p>
            <p>Crew: {crew[0]}, {crew[1]}</p>
        </section>
    )
}

export default MissionCard;