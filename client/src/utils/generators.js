import { DiceRoll } from '@dice-roller/rpg-dice-roller';
import { speciesTable, descriptorsTable, careerTable } from './randomTables.js';

export const generateSpecies = () => {

    //generate die size based on number of species in table
    const dieSize = speciesTable.length;


    //roll a die with the number of sides equal to the number of species in the table
    const roll = new DiceRoll(`1d${dieSize}`);

    //return the species at the index of the roll result
    return speciesTable[roll.total - 1];
};

export const generateDescriptor = () => {

    //generate die size based on number of descriptors in table
    const dieSize = descriptorsTable.length;

    const roll = new DiceRoll(`1d${dieSize}`);

    return descriptorsTable[roll.total - 1];
};

// takes in diceString, e.g. '3d6' and returns the roll total
export const simpleRoll = (diceString) => {
    const roll = new DiceRoll(diceString);

    return roll.total;
};

export const generateCareer = (body, speed, mind) => {
    //sort ability scores from lowest to highest
    const abilityArr = [body, speed, mind].sort((a, b) => a - b);

    let careerArray = [];

    //determine which array of careers to use based on highest ability score
    switch (abilityArr[2]) {
        case (abilityArr[2] <= 9):
            careerArray = [1, 2, 3, 4, 5, 6, 7];
            break;
        case 10:
            careerArray = [8, 9, 10, 11, 12, 13, 14, 15];
            break;
        case 11:
            careerArray = [16, 17, 18, 19, 20, 21, 22, 23, 24];
            break;
        case 12:
            careerArray = [25, 26, 27, 28, 29, 30, 31, 32, 33, 34];
            break;
        case 13:
            careerArray = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44];
            break;
        case 14:
            careerArray = [45, 46, 47, 48, 49, 50, 51, 52, 53, 54];
            break;
        case 15:
            careerArray = [55, 56, 57, 58, 59, 60, 61, 62, 63, 64];
            break;
        case 16:
            careerArray = [65, 66, 67, 68, 69, 70, 71, 72, 73, 74];
            break;
        case 17:
            careerArray = [75, 76, 77, 78, 79, 80, 81, 82, 83, 84];
            break;
        case 18:
            careerArray = [85, 86, 87, 88, 89, 90, 91, 92, 93, 94];
            break;
    }

    //determine index of career array to use based on lowest ability score
    let lowestScore = abilityArr[0];

    if (lowestScore >= 12) {
        lowestScore = 12;
    }

    const careerNum = careerArray[lowestScore - 3];

    console.log('Career Num: ',careerNum);

    //return career at index of careerNum
    return careerTable[careerNum];

};

//randomly returns a career based on number of careers in the table
export const randomCareer = () => {

    const diceString = `1d${careerTable.length}`

    return careerTable[simpleRoll(diceString)];
}