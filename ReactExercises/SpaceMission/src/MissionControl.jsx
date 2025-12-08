import { useState } from "react";
import MissionCard from "./MissionCard";
import MissionFilter from "./MissionFilter";
import MissionAction from "./MissionAction";
import "./MissionControl.css";

function MissionControl ({allMissions}) {
    const initialFilter = "All"
    const [missions, setMissions] = useState(allMissions);
    const [filter, setFilter] = useState(initialFilter);
    
    function update(idx, newStatus) {
        setMissions(prevMissions => prevMissions.map(m => m.id === idx ? {...m, status: newStatus} : m))
    }

    const current = filter === "All" ? missions : missions.filter((m) => m.status === filter);


    return (
        <>
            <MissionFilter setFilter={setFilter}/>
            {
                current.map((m) => {
                    return (
                        <div key={m.id} className="mission-card">
                            <MissionCard name={m.name} status={m.status} crew={m.crew} />
                            <MissionAction update={update} idx={m.id}/>
                        </div>
                    )
                })
            }
        </>
    )
}

export default MissionControl;