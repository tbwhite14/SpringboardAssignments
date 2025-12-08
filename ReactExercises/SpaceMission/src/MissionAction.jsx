function MissionAction({update, idx}) {
    const actions = ["Launch", "Complete"];
    return(
        <div key={`${idx}b`} className="btn-box">
            {/* {actions.map((newStatus) => 
                <button 
                    onClick={() => update(idx,newStatus)}
                    className="action-btn"
                    key={`${idx}b${newStatus}`}
                >
                    {newStatus}
                </button>)} */}
            <button
                className="action-btn"
                onClick={() => update(idx,"Active")}
            >
                Launch
            </button>
            <button
                className="action-btn"
                onClick={() => update(idx,"Completed")}
            >
                Complete
            </button>

        </div>
    )
}

export default MissionAction;