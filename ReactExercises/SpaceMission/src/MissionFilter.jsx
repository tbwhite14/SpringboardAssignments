import "./MissionFilter.css"
function MissionFilter({setFilter}) {
    const filters = ["All","Planned","Active","Completed"];
    return(
        <div className="filter-box"> 
            {filters.map((newFilter) => 
                <button 
                    onClick={() => setFilter(newFilter)}
                    className="filter-btn"
                    key={newFilter}
                >
                    {newFilter}
                </button>)}
        </div>
    )
}

export default MissionFilter;