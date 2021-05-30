<template>
<div>
 
  <!-- sistema de grillas -->
  <h1 class="display-2 text-center">SISTEMA DE GRILLAS</h1>
      <v-container>
          <v-layout wrap>
            <v-flex class="primary" xs12>
              <h1>12</h1>
            </v-flex>

            <v-flex class="secondary" xs6 >
              <h1>6</h1>
            </v-flex>

            <v-flex class="error" xs6 >
              <h1>6</h1>
            </v-flex>
          </v-layout>

          <v-layout class="mt-5 secondary" justify-center align-center style="height:300px">
            <v-flex class="info" xs3>
              <h1>centrado</h1>
            </v-flex>

            <v-flex class="success" xs3>
              <h1>centrado</h1>
            </v-flex>
          </v-layout>

          <v-layout>
            <v-flex>
              <h1 class="display-1 text-uppercase">display-1</h1>
              <h1 class="display-2 primary pa-5 mt-5">display-2</h1>
              <h1 class="display-3 text-center">display-3</h1>
              <h1 class="display-4">display-4</h1>
            </v-flex>
          </v-layout>
      </v-container>

        
    </div>
</template>

<script>
    
export default {
  components: {  },
        
    }
</script>

<style lang="scss" scoped>

</style>