import {DiceRoll} from '@dice-roller/rpg-dice-roller';
import { speciesTable, descriptorsTable } from './randomTables.js';

export const generateSpecies = () => {

    //generate die size based on number of species in table
    const dieSize = speciesTable.length;


    //roll a die with the number of sides equal to the number of species in the table
    const roll = new DiceRoll(`1d${dieSize}`);

    //return the species at the index of the roll result
    return speciesTable[roll.total - 1];
};