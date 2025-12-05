function MissionAction({update, idx}) {
    const actions = ["Launch", "Complete"];
    return(
        <div className="btn-box">
            {actions.map((newAction) => 
                <button 
                    onClick={update(idx,newAction)}
                    className="action-btn"
                >
                    {newAction}
                </button>)}
        </div>
    )
}

export default MissionAction;