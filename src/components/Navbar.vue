<template>
    <div>
        <v-app-bar app>
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-app-bar-title>Tareas</v-app-bar-title>
            <v-spacer></v-spacer>
            <v-btn class="success ml-2" @click="dialog = !dialog">Registrarse
                <v-dialog v-model="dialog" max-width="600px">
                
                    <v-card>
                        <v-card-title>
                        <span class="headline">User Profile</span>
                        </v-card-title>
                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="4"
                                    >
                                    <v-text-field
                                        label="Legal first name*"
                                        required
                                    ></v-text-field>
                                    </v-col>
                                    <v-col
                                            cols="12"
                                            sm="6"
                                            md="4"
                                        >
                                        <v-text-field
                                        label="Legal middle name"
                                        hint="example of helper text only on focus"
                                        ></v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                        md="4"
                                    >
                                    <v-text-field
                                    label="Legal last name*"
                                    hint="example of persistent helper text"
                                    persistent-hint
                                    required
                                    ></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field
                                        label="Email*"
                                        required
                                        ></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field
                                        label="Password*"
                                        type="password"
                                        required
                                        ></v-text-field>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                    >
                                        <v-select
                                        :items="['0-17', '18-29', '30-54', '54+']"
                                        label="Age*"
                                        required
                                        ></v-select>
                                    </v-col>
                                    <v-col
                                        cols="12"
                                        sm="6"
                                    >
                                        <v-autocomplete
                                        :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                                        label="Interests"
                                        multiple
                                        ></v-autocomplete>
                                    </v-col>
                                </v-row>
                            </v-container>
                            <small>*indicates required field</small>
                        </v-card-text>
                            <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                color="blue darken-1"
                                text
                                @click="dialog = false"
                            >
                                Close
                            </v-btn>
                            <v-btn
                                color="blue darken-1"
                                text
                                @click="dialog = false"
                            >
                                Save
                            </v-btn>
                        </v-card-actions>
                    </v-card>  
                
                </v-dialog>
            </v-btn>
            <v-btn class="error ml-2">Salir</v-btn>
        </v-app-bar>

        <!-- NAVEGACION AL DARLE AL BOTON -->

        <v-navigation-drawer app v-model="drawer" temporary dark>
            <v-layout mt-4 column align-center>
                <v-flex>
                    <v-avatar>
                        <img src="https://randomuser.me/api/portraits/men/78.jpg">
                    </v-avatar>
                </v-flex>
                <p class="white--text mt-3 headline">Jessika Carvajal</p>
            </v-layout>

            <v-layout column>
                <v-flex mx-3>
                    <v-btn color="success" block :to="{name: 'home'}">Home</v-btn>
                    <v-btn color="success" class="mt-2" block :to="{name: 'tareas-crud'}">Lista de Tareas</v-btn>
                    <v-btn color="success" class="mt-2" block :to="{name: 'grid'}">Ejemplos Grid</v-btn>

                </v-flex>
            </v-layout>
        </v-navigation-drawer>
    </div>
</template>

<script>
    export default {
        data(){
            return {
               drawer: false,
               dialog: false
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>