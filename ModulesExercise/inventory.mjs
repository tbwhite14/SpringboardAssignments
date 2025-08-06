const itemList = [];

export function addItem(itemName){
    itemList.push(itemName);
}

export function removeItem(itemName){
    const itemIndex = itemList.indexOf(itemName);
    if(itemIndex === -1){
        console.log("Item not listed.")
    } else{
    itemList.splice(itemIndex,1);
    }
}

export function listItems(){
    for (const item of itemList){
        console.log(item);
    }
}
