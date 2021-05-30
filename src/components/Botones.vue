<template>
    <div>
        
        <h1 class="display-2 text-center">BOTONES</h1>

         <v-container class="">
            <v-layout>
                <v-flex>
                    <v-btn color="primary">texto</v-btn>

                    <v-btn color="accent">texto</v-btn>

                    <v-btn dark class="blue">texto</v-btn>

                    <v-btn color="primary" text>boton sin fondo</v-btn>

                    <v-btn color="accent" large disabled>boton sin fondo</v-btn>

                    <v-btn color="primary" depressed>boton sin fondo</v-btn>

                    <h1 class="display-1">botones de iconos</h1>
                    <v-btn text  ><i class="fa fa-address-card" aria-hidden="true"></i></v-btn>
                    <v-btn text color="blue"><i class="fa fa-user-circle-o" aria-hidden="true"></i></v-btn>
                    <v-btn elevation="9" color="primary"><i class="fa fa-envelope-open" aria-hidden="true"></i></v-btn>

                    <v-btn elevation="9" color="primary" fab><i class="fa fa-envelope-open" aria-hidden="true"></i></v-btn>
                    <v-btn elevation="9" color="primary" fab small><i class="fa fa-envelope-open" aria-hidden="true"></i></v-btn>

                    <v-btn color="success">
                        Texto
                        <i class="fa fa-envelope-open ml-2" aria-hidden="true"></i>
                    </v-btn>

                    <v-btn color="success" outlined>
                        <i class="fa fa-envelope-open mr-2" aria-hidden="true"></i>
                        Texto
                    </v-btn>

                    <v-btn color="success" outlined block>
                        <i class="fa fa-envelope-open mr-2" aria-hidden="true"></i>
                        Texto
                    </v-btn>

                    <v-btn color="success" outlined rounded>
                        <i class="fa fa-envelope-open mr-2" aria-hidden="true"></i>
                        Texto
                    </v-btn>

                     <v-btn color="success" rounded>
                        <i class="fa fa-envelope-open mr-2" aria-hidden="true"></i>
                        Texto
                    </v-btn>
                    
                    
                </v-flex>
            </v-layout>
          </v-container>
    </div>
</template>

<script>


    export default {
  components: { 
      
   },
    }
</script>

<style lang="scss" scoped>
.v-btn{
    margin-right:  2rem;
    margin-top: 1rem;
}
</style>