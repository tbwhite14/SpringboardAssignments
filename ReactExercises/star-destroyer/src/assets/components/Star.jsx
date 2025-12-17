import { useEffect, useRef } from "react";
import styles from "./Star.module.css";

function Star({ id, size, position, destroy }) {
    const starRef = useRef(null);

    useEffect(() => {
        const star = starRef.current;
        star.focus();
    }, []);
    
    const starStyles = {
        fontSize: size,
        position: "absolute",
        left: position.x * window.innerWidth,
        top: position.y * window.innerHeight
    }

    return(
        <div 
            ref={starRef}
            style={starStyles} 
            tabIndex={0}
            id={id}
            onClick={() => destroy(id)}
            className={styles.star}
        >
            ★
        </div>
    )
}

export default Star;