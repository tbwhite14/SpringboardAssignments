function ItemForm({ formData, handleChange, handleSubmit, isTouched, isValid }) {
    
    const errorStyle = {
        borderColor: "red",
        borderWidth: "2px",
        borderStyle: "solid"
    }
    
    const defaultStyle = {
        borderColor: "black",
        borderWidth: "3px"
    }

    const inputs = Object.keys(formData);

    const styleList = {
        name: defaultStyle,
        quantity: defaultStyle,
        purpose: defaultStyle,
        agree: defaultStyle
    }

    for(let i of inputs){
        if(isTouched[i] && !isValid[i]) {
            styleList[i] = errorStyle;
        }
    }
    
    return(
        <>
            <div 
                className="input-box"
                style={styleList.name}
            >
                <input 
                    id="name" 
                    name="name" 
                    type="text" 
                    placeholder="name" 
                    value={formData.name} 
                    onChange={handleChange}
                />
            </div>    
            <div 
                className="input-box"
                style={styleList.quantity}
            >
                <input 
                    id="quantity" 
                    name="quantity" 
                    type="text" 
                    placeholder="quantity" 
                    value={formData.quantity} 
                    onChange={handleChange}
                />
            </div>    
            <div 
                className="input-box"
                style={styleList.purpose}
            >
                <input 
                    id="purpose" 
                    name="purpose" 
                    type="text" 
                    placeholder="purpose" 
                    value={formData.purpose} 
                    onChange={handleChange}
                />
            </div>    
            <div 
                className="input-box"
                style={styleList.agree}
            >
                <input 
                    id="agree" 
                    name="agree" 
                    type="checkbox" 
                    checked={formData.agree} 
                    onChange={handleChange}
                />
                <label htmlFor="agree">Agree? </label>
            </div>
            <button onClick={() => handleSubmit()}>Add Item</button> 
        </>
    )
}

export default ItemForm;