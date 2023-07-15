<template>
    <v-container class="d-flex justify-center flex-wrap">
        <v-btn size ="x-large" block color="primary" @click="createCharacter" class="my-3">
            GENERATE A CHARACTER
        </v-btn>
        <v-btn v-if="data.showSheet" size ="x-large" block color="primary" class="my-3" @click="newCareer">
            REDO CAREER
        </v-btn>
    </v-container>
    <v-container v-if="data.showSheet">
        <div class="mb-6 text-center">
            <h1>You are {{ vowelCheck }} {{ data.descriptor }} {{ data.species }}.</h1>
            <h4>{{ data.species }}: {{ data.speciesDesc }}</h4>
        </div>

        <v-row>
            <v-col cols="12" md="5">
                <v-card class="bg-primary text-secondary pa-3">
                    <v-row>
                        <v-col cols="6">
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
                        </v-col>

                        <v-col cols="6">
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
                        </v-col>
                    </v-row>

                </v-card>
            </v-col>

            <v-col cols="12" md="7">
                <v-card class="bg-primary text-secondary pa-3">
                    <v-row>

                        <v-col cols="12" md="9">
                            <v-card-title>
                                <h3>Failed Career</h3>
                            </v-card-title>
                            <v-card-text>
                                <v-list class="bg-primary text-secondary text-body-1">
                                    <v-list-item>
                                        <v-list-item-title class="font-weight-bold mb-1">
                                            {{ data.title }}
                                        </v-list-item-title>
                                        <v-list-item-text>
                                            {{ data.careerDesc }}
                                        </v-list-item-text>
                                    </v-list-item>
                                    <v-divider class="ma-4" />
                                    <v-list-item>
                                        <v-list-item-title class="font-weight-bold mb-1">
                                            Suggested Names
                                        </v-list-item-title>
                                        <v-list-item-text>
                                            {{ data.names }}
                                        </v-list-item-text>
                                    </v-list-item>
                                    <v-divider class="ma-4" />
                                    <v-list-item>
                                        <v-list-item-title class="font-weight-bold mb-1">
                                            You Get:
                                        </v-list-item-title>
                                        <v-list-item-text>
                                            {{ data.gear }}
                                        </v-list-item-text>
                                    </v-list-item>
                                    <v-divider class="ma-4" />
                                    <v-list-item>
                                        <v-list-item-title class="font-weight-bold mb-1">
                                            {{ data.careerLabel1 }}
                                        </v-list-item-title>
                                        <v-list-item-text>
                                            {{ data.coinResult }}
                                        </v-list-item-text>
                                    </v-list-item>
                                    <v-divider class="ma-4" />
                                    <v-list-item>
                                        <v-list-item-title class="font-weight-bold mb-1">
                                            {{ data.careerLabel2 }}
                                        </v-list-item-title>
                                        <v-list-item-text>
                                            {{ data.hpResult }}
                                        </v-list-item-text>
                                    </v-list-item>
                                </v-list>
                            </v-card-text>
                        </v-col>
                    </v-row>

                </v-card>
            </v-col>
        </v-row>


    </v-container>
</template>

<script setup>

import { reactive, computed } from 'vue';

import { generateSpecies, generateDescriptor, simpleRoll, generateCareer, randomCareer } from '../utils/generators.js';
import { isVowel } from '../utils/helpers.js';

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
    title: 'Placeholder Career',
    careerDesc: 'Placeholder Career Description',
    names: 'Placeholder Names',
    debtholder: 'Placeholder Debtholder Description',
    gear: 'Placeholder items',
    careerLabel1: 'Placeholder Question 1',
    careerLabel2: 'Placeholder Question 2',
    coinResult: 'Coin Result',
    hpResult: 'HP Result',

});

const newCareer = () => {
    const career = randomCareer();

    data.title = career.title;
    data.careerDesc = career.desc;
    data.names = career.names;
    data.debtholder = career.debtholder;
    data.gear = career.gear;
    data.careerLabel1 = career.careerLabel1;
    data.careerLabel2 = career.careerLabel2;
    data.coinResult = career.coinTable[data.coin];
    data.hpResult = career.hpTable[data.hp];
}

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

    const career = generateCareer(data.body, data.speed, data.mind);

    data.title = career.title;
    data.careerDesc = career.desc;
    data.names = career.names;
    data.debtholder = career.debtholder;
    data.gear = career.gear;
    data.careerLabel1 = career.careerLabel1;
    data.careerLabel2 = career.careerLabel2;
    data.coinResult = career.coinTable[data.coin];
    data.hpResult = career.hpTable[data.hp];

    data.showSheet = true;
}

//todo: add computed value to change a/an based on species name
const vowelCheck = computed(() => {
    if (isVowel(data.descriptor.charAt(0))) {
        return 'an';
    } else {
        return 'a';
    }
})

</script>