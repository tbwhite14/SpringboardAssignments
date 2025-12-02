function Pokecard({id, name, type, exp}) {
    const pic = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    const cardStyles = {
                height:250, 
                width:200, 
                textAlign: "center",
                backgroundColor:"#9ACCDB", 
                float:"left",
                margin: 2
    }
    return(
        <div style={cardStyles}>
            <h2>#{id} {name}</h2>
            <img src={pic}></img>
            <p>Type: {type}</p>
            <p>EXP: {exp}</p>
        </div>
    );
}

