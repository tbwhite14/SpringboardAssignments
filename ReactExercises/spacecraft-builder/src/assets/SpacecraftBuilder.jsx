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
    const [ inventory, setInventory ] = useState([]);
    const [ formData, setFormData ] = useState(formDefault);
    const [ isValid, setIsValid ] = useState(false);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(data => ({
            ...data,
            [name]: name === agree ? checked : value
        }))
    }

    const errorList = [];

    function validation() {
        setIsValid(true);
        if(!formData.name){
            setIsValid(false);
            errorList.push("name");
        }
        if(!formData.quantity){
            setIsValid(false);
            errorList.push("quantity");
        }
        if(!formData.purpose){
            setIsValid(false);
            errorList.push("purpose");
        }
        if(!formData.agree){
            setIsValid(false);
            errorList.push("agree");
        }
    }

    const handleSubmit = e => {
        // e.preventDefault();
        validation();
        if(isValid){
            const newItem = {...formData, id: Math.floor(Math.random()*Date.now()) };        
            setInventory(items => [...items, newItem]);
            setFormData(formDefault);
        }
    }

    const handleDelete = (id) => {
        setInventory(inventory.filter(i => i.id !== id));
    }

    return(
        <div>
            <ItemForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} isValid={isValid}/>
            <InventoryDisplay inventory={inventory} handleDelete={handleDelete}/>
        </div>
    )

}

export default SpacecraftBuilder;