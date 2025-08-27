let choice = 42;

const numFact = async function (num){
    const apiString = `http://numbersapi.com/${num}?json`;
    try {
        const result = await fetch(apiString);
        const json1 = await result.json();
        const fact = await json1.text;
        console.log(fact);
    }
    catch (error) {
        console.error("Error fetching data:", error);
    }
}

numFact(choice);

let choiceMult = [5, 44, 16, 103];

const numFactMult = async function (nums){
    const apiString = `http://numbersapi.com/${nums}?json`;
    try {
        const result = await fetch(apiString);
        const json1 = await result.json();
        for( let n of nums ){
            console.log(json1[n]);
        }
    }
    catch (error) {
        console.error("Error fetching data:", error);
    }
}

numFactMult(choiceMult);

const fourFacts = async function (num) {
    const apiString = `http://numbersapi.com/${num}?json`;
    try {
        for(let n = 1; n <=4; n++){
            const result = await fetch(apiString);
            const json1 = await result.json();
            const fact = await json1.text;
            document.body.insertAdjacentHTML('beforeend', `<p>${fact}</p>`);
        }
    }
    catch (error) {
        console.error("Error fetching data:", error);
    }
}

fourFacts(choice);
