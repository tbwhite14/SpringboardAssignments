function MissionFilter({removeFilter, filterMissions}) {
    const handleRemoveFilter = () => removeFilter();
    const handleFilterMissions = (condition) => filterMissions(condition);
    return(
        <>
            <button onClick={handleRemoveFilter()}>All</button>
            <button onClick={handleFilterMissions("Planned")}>Planned</button>
            <button onClick={handleFilterMissions("Active")}>Active</button>
            <button onClick={handleFilterMissions("Completed")}>Completed</button>
        </>
    )
}

export default MissionFilter;