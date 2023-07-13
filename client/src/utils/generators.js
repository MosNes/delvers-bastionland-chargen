import { DiceRoll } from '@dice-roller/rpg-dice-roller';
import { speciesTable, descriptorsTable } from './randomTables.js';

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