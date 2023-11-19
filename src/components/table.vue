<template>
  <hr>
  <div class="row container-fluid" >
    <div class="col-lg-8  offset-lg-2">
        <div class="card  mt-4">
            <div class="card-body">
                <div class="input-group">
                    <input type="text" v-model="task"  @keyup.enter="addTask" class="form-control form-control-lg" placeholder="Agregar tarea">
                    <div class="input-group-append">
                        <button v-on:click="addTask()" @keyup.enter="addTask" class="btn btn-success btn-lg" >Agregar</button>
                    </div>
                </div>
                <br>
                <h5 v-if="taskList.length == 0">No hay tareas pendientes</h5>
                <ul class="list-group">
                    <li v-for="(task, index) of taskList" :key = "index" class="list-group-item d-flex justify-content-between">
                        <span class="cursor" v-bind:class="{'text-success' : task.status}" v-on:click="editTask(task, index)">
                            <i v-bind:class ="[task.status ? 'fa-solid fa-circle-check' :'fa-regular fa-circle']" class="fa-regular fa-circle"></i>
                           
                        </span>
                            {{ task.taskName }}
                        <span class="text-danger cursor">
                            <i class="fa-solid fa-trash-can" v-on:click="deleteTask(index)"></i>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:'Table',
    data(){
        return{
            task: '',
            taskList: []

        }
    },
    methods:{
        addTask(){
            const task = {
                taskName: this.task,
                status: false,
            }
            this.taskList.push(task);
            this.task = '';
        },
        deleteTask(index){
            this.taskList.splice(index, 1);
        },
        editTask(task, index){
            this.taskList[index].status = !task.status;
        }

}
}
</script>

<style>
.cursor{
    cursor: pointer;
}

</style>