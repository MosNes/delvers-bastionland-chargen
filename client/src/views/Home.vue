<template>
    <v-container>
        <v-btn color="primary" @click="createCharacter">
            GENERATE A CHARACTER
        </v-btn>
    </v-container>
    <v-container v-if="data.showSheet">
        <div class="mb-6 text-center">
            <h1>You are {{ 'a' }} {{ data.descriptor }} {{ data.species }}.</h1>
            <h4>{{ data.species }}: {{ data.speciesDesc }}</h4>
        </div>

        <v-row>
            <v-col cols="6" md="4">
                <v-card class="bg-primary text-secondary pa-3">
                    <v-card-title>
                        <h3>Ability Scores</h3>
                    </v-card-title>
                    <v-card-text>
                        <v-list class="bg-primary">
                            <v-list-item>
                                <v-list-item-title>
                                    BODY: {{ data.body }}
                                </v-list-item-title>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title>
                                    SPEED: {{ data.speed }}
                                </v-list-item-title>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title>
                                    MIND: {{ data.mind }}
                                </v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-card-text>
                </v-card>
            </v-col>

            <v-col cols="6" md="8">
                <v-card class="bg-primary text-secondary pa-3">
                    <v-card-title>
                        <h3>Other Stats</h3>
                    </v-card-title>
                    <v-card-text>
                        <v-list class="bg-primary">
                            <v-list-item>
                                <v-list-item-title>
                                    HP: {{ data.hp }}
                                </v-list-item-title>
                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title>
                                    Coin: {{ data.coin }}
                                </v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>


    </v-container>
</template>

<script setup>

import { reactive, computed } from 'vue';

import { generateSpecies, generateDescriptor, simpleRoll } from '../utils/generators.js';

const data = reactive({

    showSheet: false,
    body: 10,
    speed: 10,
    mind: 10,
    hp: 5,
    coin: 3,
    species: 'Canid',
    descriptor: 'Dorky',
    speciesDesc: 'Dogs, Wolves, Foxes, etc.',

});

const createCharacter = () => {
    const species = generateSpecies();

    data.species = species.name;
    data.speciesDesc = species.description;

    data.descriptor = generateDescriptor();

    data.body = simpleRoll('3d6');
    data.speed = simpleRoll('3d6');
    data.mind = simpleRoll('3d6');
    data.hp = simpleRoll('1d6');
    data.coin = simpleRoll('1d6');

    data.showSheet = true;
}

//todo: add computed value to change a/an based on species name

</script>