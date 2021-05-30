<template>
    <div>
        

         <v-container grid-list-md>
            <v-layout row wrap>
                <v-flex xs12 sm6>
                    <v-card>
                        <v-img
                            height="250"
                            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                        ></v-img>

                        <v-card-title><h2>Recetas</h2></v-card-title>

                        <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, nihil molestias praesentium commodi eaque blanditiis impedit modi molestiae labore consectetur accusantium dolore distinctio suscipit dolorem doloribus neque cum. Dolorum, nihil.</v-card-text>

                        <v-card-actions><v-btn text color="info"  @click="dialog = true">Ver más</v-btn></v-card-actions>
                    </v-card>
                </v-flex>

                 <v-flex xs12 sm6>
                    <v-card>
                        <v-img
                            height="250"
                            src="https://cdn.vuetifyjs.com/images/cards/cooking.png">
                             <v-container>
                                <v-layout>
                                    <v-flex>
                                        <span class="headline white--text">Lorem, ipsum dolor.</span>
                                    </v-flex>
                                </v-layout>
                              </v-container>
                        </v-img>

                        <v-card-title><h2>Recetas</h2></v-card-title>

                        <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, nihil molestias praesentium commodi eaque blanditiis impedit modi molestiae labore consectetur accusantium dolore distinctio suscipit dolorem doloribus neque cum. Dolorum, nihil.</v-card-text>

                        <v-card-actions><v-btn text color="info">Ver más</v-btn></v-card-actions>
                    </v-card>
                </v-flex>

                
            </v-layout>

            <v-dialog v-model="dialog" width="500" persistent>
                <v-card>
                    <v-card-title>titulo</v-card-title>
                    <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet consequatur sit eaque totam dolore repellat eum, facere, pariatur natus voluptatem, doloribus modi quas hic et ad iusto qui voluptatum aperiam.</v-card-text>
                    <v-divider></v-divider>
                    <v-card-actions>
                        <v-btn text @click="dialog = false">Cerrar</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

          </v-container>
    </div>
</template>

<script>
   
export default {
    data(){
            return {
               drawer: false,
               dialog: false
            }
        },
        components: { 
           
        },
    
        
    }
</script>

<style lang="scss" scoped>

</style>