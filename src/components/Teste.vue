<template>
  <div class="teste">
      <div class="fixed">
          <h1> V-MODEL and PROPS/EVENT </h1>
          <p> data: {{$data}}</p>
      </div>

      <main>
          <section>
              <h4>v-model</h4>
              <label>input: </label> 
              <input v-model="input">
              <p> input: {{input}} </p>
          </section>
          <hr>

          <section>
              <h4>v-model com modifiicador .lazy</h4>
              <label>input lazy:</label> 
              <input v-model.lazy="input">
              <p> input: {{input}} </p>
          </section>

          <hr>
          
          <section>
              <h4>props/events</h4>
              <label>input:</label> 
              <input @input="inputAction($event)" :value="input">
              <p> input: {{input}} </p>
          </section>

          <hr>

          <section>
              <h4>props common pattern</h4>
              <sync-prop 
                v-bind:name="inputObject.name" 
                v-on:update:name="inputObject.name = $event"

                v-bind:value="inputObject.value" 
                v-on:update:value="inputObject.value = $event"
              />
          </section>

          <hr>

          <section>
              <h4>.sync sugar</h4>
              <p>inputObject: {{inputObject}}</p>
              <sync-prop v-bind.sync="inputObject" />
          </section>

          <hr>

          <section>
              <h4>Model Custom</h4>
              <model-custom v-model="input"/>
              <p>input: {{input}}</p>
          </section>

        </main>
  </div>
</template>

<script>
import syncProp from './Sync'
import modelCustom from './ModelCustom'

export default {
  name: 'Teste',
  components:{
    syncProp,
    modelCustom
  },
  data() {
    return {
        input: '',
        inputObject: { name: '', value: '' }
    }
  },
  methods: {
    inputAction(e) {
      this.input = e.target.value 
    },
    inputSync(e) {
      this.input = e.target.value 
    }
  }
}
</script>

<style scoped>
h1{
    font-size: 20pt;
}
h2{
    font-size: 18pt;
}
main{
    margin-top: 122px;
}
section {
    padding: 5px;
}
section:hover {
    background-color: #B2DBB2 
}

.fixed{
    position: fixed;
    top: 0px;
    width: 100%;
    background-color: #008A00;
    color: white;
    padding: 5px;
}
</style>
