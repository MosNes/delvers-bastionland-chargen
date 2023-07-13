<template>

        <v-app-bar :elevation="2" app color="primary">

            <v-app-bar-nav-icon variant="text" color="secondary" @click.stop="data.drawer = !data.drawer" />
                <v-app-bar-title>DELVERS CHARACTER GENERATOR</v-app-bar-title>
                <v-spacer></v-spacer>
                <v-btn text>Home</v-btn>

        </v-app-bar>

        <v-navigation-drawer v-model="data.drawer" app class="bg-info">
            <v-list>
                <v-list-item v-for="link in data.links" key="link.name" router :to="link.link">
                    <v-list-item-title>
                        {{ link.name }}
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

</template>

<script setup>

    import { reactive } from 'vue';

    const data = reactive({

        drawer: false,
        links: [
            { name: 'Home', icon: 'mdi-home', link: '/' },
        ]

    })

</script>