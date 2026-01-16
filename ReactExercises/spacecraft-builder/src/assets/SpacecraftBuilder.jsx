import { useState } from "react";
import ItemForm from "./ItemForm";
import InventoryDisplay from "./InventoryDisplay";
import "./SpacecraftBuilder.css";

function SpacecraftBuilder() {
    const formDefault = {
        name: "",
        quantity: "",
        purpose: "",
        agree: false
    }
    const validDefault = {
        name: false,
        quantity: false,
        purpose: false,
        agree: false
    }
    const [ inventory, setInventory ] = useState([]);
    const [ formData, setFormData ] = useState(formDefault);
    // const [ errorList, setErrorList ] = useState([null]);
    const [ isTouched, setIsTouched ] = useState(validDefault);
    const [ isValid, setIsValid ] = useState(validDefault);

    const handleChange = e => {
        const { name, value } = e.target;
        setIsTouched(touch => ({
            ...touch,
            [name]: true
        }))
        setFormData(data => ({
            ...data,
            [name]: name === agree ? checked : value
        }))
        formData[name] === "" 
            ? setIsValid(valid => ({
                ...valid,
                [name]: false
            }))
            : setIsValid(valid => ({
                ...valid,
                [name]: true
            }))
    }

    // function validation() {
    //     if(errorList.length !== 0){
    //         setErrorList([])
    //     }
    //     if(!formData.name){
    //         setErrorList(list => [...list, "name"])
    //     }
    //     if(!formData.quantity){
    //         setErrorList(list => [...list, "quantity"])
    //     }
    //     if(!formData.purpose){
    //         setErrorList(list => [...list, "purpose"])
    //     }
    //     if(!formData.agree){
    //         setErrorList(list => [...list, "agree"])
    //     }
    // }

    const handleSubmit = e => {
        // validation();

        setIsTouched({
            name: true,
            quantity: true,
            purpose: true,
            agree: true
        })

        const inputList = Object.keys(isValid);
        let valid = true;
        
        for (let i of inputList){
            if(isValid[i] === false) valid = false;
        }
        
        // if(errorList.length === 0)
        if(valid) {
            const newItem = {...formData, id: Math.floor(Math.random()*Date.now()) };        
            setInventory(items => [...items, newItem]);
            setFormData(formDefault);
            setIsTouched(validDefault);
            setIsValid(validDefault);
        }
    }

    const handleDelete = (id) => {
        setInventory(inventory.filter(i => i.id !== id));
    }

    return(
        <div>
            <ItemForm 
                formData={formData} 
                handleChange={handleChange} 
                handleSubmit={handleSubmit} 
                isTouched={isTouched}
                isValid={isValid}
            />
            <InventoryDisplay inventory={inventory} handleDelete={handleDelete}/>
        </div>
    )

}

export default SpacecraftBuilder;