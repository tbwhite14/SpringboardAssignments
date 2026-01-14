function ItemForm({ formData, handleChange, handleSubmit, isValid }) {
    
    const markInvalid = [];
    
    if (!isValid) {
        const inputs = Object.keys(formData);
        inputs.map((key) => {!formData[key] ? markInvalid.push(key) : null})
    }
    
    const errorStyle = {
        borderColor: "red",
        borderWidth: "3px"
    }
    
    const defaultStyle = {
        borderColor: "black",
        borderWidth: "3px"
    }
    
    return(
        // <form onSubmit={handleSubmit}>
        <>
            <div style={markInvalid.includes("name") ? errorStyle : defaultStyle}>
                <input 
                    id="name" 
                    name="name" 
                    type="text" 
                    placeholder="name" 
                    value={formData.name} 
                    onChange={handleChange}
                />
            </div>    
            <div style={markInvalid.includes("quantity") ? errorStyle : defaultStyle}>
                <input 
                    id="quantity" 
                    name="quantity" 
                    type="text" 
                    placeholder="quantity" 
                    value={formData.quantity} 
                    onChange={handleChange}
                />
            </div>    
            <div style={markInvalid.includes("purpose") ? errorStyle : defaultStyle}>
                <input 
                    id="purpose" 
                    name="purpose" 
                    type="text" 
                    placeholder="purpose" 
                    value={formData.purpose} 
                    onChange={handleChange}
                />
            </div>    
            <div style={markInvalid.includes("agree") ? errorStyle : defaultStyle}>
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
        // </form>
       
    )
}

export default ItemForm;