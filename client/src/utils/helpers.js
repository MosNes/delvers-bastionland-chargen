export const isVowel = (letter) => {
    letter.toLowerCase();
    return ['a', 'e', 'i', 'o', 'u'].indexOf(letter.toLowerCase()) !== -1
}