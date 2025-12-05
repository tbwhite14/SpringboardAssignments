import { useState } from "react";
import MissionCard from "./MissionCard";
import MissionFilter from "./MissionFilter";
import MissionAction from "./MissionAction";
import "./MissionControl.css";

function MissionControl ({allMissions}) {
    const initialFilter = "All"
    const [missions, setMissions] = useState(allMissions);
    const [filter, setFilter] = useState(initialFilter);
    const current = filter === "All" ? missions : missions.filter((m) => m.status === filter);
    const update = (index, newStatus) => {
        // setMissions(prevMissions => prevMissions.map((m) => {m.id === index ? {...m, status: newStatus} : m}))
    }
    return (
        <>
            <MissionFilter setFilter={setFilter}/>
            {
                current.map((m, idx) => {
                    return (
                        <div key={m.id} className="mission-card">
                            <MissionCard name={m.name} status={m.status} crew={m.crew} />
                            <MissionAction key={`1${m.id}`} update={update} idx={idx}/>
                        </div>
                    )
                })
            }
        </>
    )
}

export default MissionControl;