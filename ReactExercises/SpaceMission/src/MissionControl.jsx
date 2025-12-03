import { useState } from "react";
import MissionCard from "./MissionCard";
import MissionFilter from "./MissionFilter";

function MissionControl ({allMissions}) {
    const [missions, setMissions] = useState(allMissions);
    const removeFilter = () => {
        if(missions !== allMissions) setMissions(allMissions)
    };
    const filterMissions = (condition) => {
        //const current = missions;
        //setMissions(current.filter((m) => {m.status === condition}))
    };
    return (
        <>
            <MissionFilter removeFilter={removeFilter} filterMissions={filterMissions} />
            {
                missions.map((m) => {
                    return (<MissionCard key={m.id} name={m.name} status={m.status} crew={m.crew} />)
                })
            }
        </>
    )
}

export default MissionControl;