import { useState, useEffect, useRef } from "react";
import Star from "./Star";

function Space () {
    const STAR_SIZE = 50;
    const firstStar = {
        id: 1,
        size: STAR_SIZE,
        position: {
            x: Math.random(),
            y: Math.random()
        }
    }
    const starId = useRef(1);
    const [ stars, updateStars ] = useState([firstStar]);

    function newStar() {
        starId.current++;
        const newId = starId.current;
        const newPosition = {
            x: Math.random(), 
            y: Math.random()
        };

        const newStarData = { 
            id: newId, 
            size: STAR_SIZE, 
            position: newPosition
        };

        updateStars(stars => [...stars, newStarData]);
    }

    useEffect(() => {
        const starInterval = setInterval(()=>{
            newStar();
        }, 2500)

        return () => {
            clearInterval(starInterval);
        }
    },[])

    function destroy(targetStar) {
        updateStars(stars.filter(s => s.id !== targetStar))
    }

    return (
        <div>
            {
                stars.map((star) => {
                    return <Star key={star.id} id={star.id} size={star.size} position={star.position} destroy={destroy}/> })
                
            }
        </div>
    )
}

export default Space;