export const getVowels = (message) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const usedVowels = [];
    for(const letter of message) {
        if(vowels.includes(letter.toLowerCase())) usedVowels.push(letter);
    }
    return usedVowels;
}