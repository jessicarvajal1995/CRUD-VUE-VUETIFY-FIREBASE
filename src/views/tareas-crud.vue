<template>
    <div>
         <v-container grid-list-xl>
            <v-layout row wrap>
                <v-flex xs6>
                    
                    <v-card class="mb-3" v-for="(tarea, index) in listaTareas" :key="index">
                        <v-card-text>
                            <h3><i class="fa fa-tag mr-2" aria-hidden="true"></i> {{tarea.titulo}} </h3>
                            
                            <p>{{tarea.descripcion}}</p>

                            <v-btn @click="editar(index)" color="warning" class="ml-0 mr-2 mb-2">Editar</v-btn>
                            <v-btn @click="eliminarTarea(tarea.id)" color="error" class="mb-2">Eliminar</v-btn>
                        </v-card-text>
                    </v-card>
                </v-flex>

                <v-flex wrap xs6 v-if="formAgregar">
                    <v-card class="mb-3 pa-3">
                        <v-form @submit.prevent="agregarTarea">
                            <v-text-field label="Titulo de la tarea" v-model="titulo"></v-text-field>

                            <v-textarea label="Desccripcion de la tarea" v-model="descripcion"></v-textarea>
                            <v-btn style="width: 100%" color="success" type="submit">Agregar Tarea</v-btn>
                        </v-form>
                    </v-card>
                </v-flex>

                <v-flex xs6 v-if="!formAgregar">
                    <v-card class="mb-3 pa-3">
                        <v-form @submit.prevent="editarTarea">
                            <v-text-field label="Titulo de la tarea" v-model="titulo"></v-text-field>

                            <v-textarea label="Desccripcion de la tarea" v-model="descripcion"></v-textarea>
                            <v-btn style="width: 100%" color="warning" type="submit">Modificar Tarea</v-btn>
                        </v-form>
                    </v-card>
                </v-flex>

            </v-layout>

            <v-snackbar v-model="snackbar">
                {{ mensaje }}

                <v-btn
                    color="pink"
                    text
                    @click="snackbar = false"
                >
                    Cerrar
                </v-btn>
            </v-snackbar>

          </v-container>
    </div>
</template>

<script>
    
export default {
    data(){
      return{
          listaTareas: [
              {id:1, titulo: 'Titulo Tarea 1', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit totam praesentium pariatur accusamus doloribus sequi accusantium quae quia, impedit debitis.'},
              {id:2, titulo: 'Titulo Tarea 2', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit totam praesentium pariatur accusamus doloribus sequi accusantium quae quia, impedit debitis.'},
              {id:3, titulo: 'Titulo Tarea 3', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit totam praesentium pariatur accusamus doloribus sequi accusantium quae quia, impedit debitis.'},
              {id:4, titulo: 'Titulo Tarea 4', descripcion: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit totam praesentium pariatur accusamus doloribus sequi accusantium quae quia, impedit debitis.'}
          ],
          titulo: '',
          descripcion: '',
          snackbar: false,
          mensaje: '',
          formAgregar: true,
          indexTarea: ''
      }  
    },
    methods: { 
        agregarTarea(){
            
            if(this.titulo === '' || this.descripcion === ''){
               this.snackbar = true
               this.mensaje = 'Llena todos los campos'
            }else{
                this.listaTareas.unshift({
                    id: Date.now(),
                    titulo: this.titulo,
                    descripcion: this.descripcion
                })
                /* despues que agrego datos limpia campos */
                this.titulo = ''
                this.descripcion = ''
                this.snackbar = true
                this.mensaje = 'Tarea agregada con éxito'

            }
        },
        eliminarTarea(id){
            /* para eliminar usamos el filter que recibe el ID  */
            this.listaTareas = this.listaTareas.filter(e => e.id != id)
        },
        editar(index){
            this.formAgregar = false,
            this.titulo = this.listaTareas[index].titulo
            this.descripcion = this.listaTareas[index].descripcion,
            this.indexTarea = index
        },
        editarTarea(){
            this.listaTareas[this.indexTarea].titulo = this.titulo,
            this.listaTareas[this.indexTarea].descripcion = this.descripcion,
            this.formAgregar = true,
            this.titulo = '',
            this.descripcion = '',
            this.snackbar = true,
            this.mensaje = 'Editaste la tarea con éxito'
        }
    },
        
}
</script>

<style lang="scss" scoped>

</style>