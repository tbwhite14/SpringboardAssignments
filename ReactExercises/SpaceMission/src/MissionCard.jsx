import MissionAction from "./MissionAction";

function MissionCard ({name, status, crew}) {
    return (
        <div>
            <h3>{name}</h3>
            <p>Status: {status}</p>
            <p>Crew: {crew[0]}, {crew[1]}</p>
            <MissionAction />
        </div>
    )
}

export default MissionCard;