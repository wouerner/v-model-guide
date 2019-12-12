<template>
  <div class="hello">

      <label>input v-model:</label> 
      <input v-model="input">
      value: {{input}}

      <hr>

      <label>input lazy:</label> 
      <input v-model.lazy="input">
      value: {{input}}

      <hr>
      
      <label>input prop/events:</label> 
      <input @input="inputAction($event)" :value="input">
      value: {{input}}

      <hr>

      <h4>props common patternl</h4>
      <sync-prop 
        v-bind:name="inputObject.name" 
        v-on:update:name="inputObject.name = $event"
      />

      <hr>

      <h4>.sync sugar</h4>
      <p>inputObject: {{inputObject}}</p>
      <sync-prop v-bind.sync="inputObject" />

      <hr>

      <h4>Model Custom</h4>
      <p>input: {{input}}</p>
      <model-custom v-model="input"/>

  </div>
</template>

<script>
import syncProp from './Sync'
import modelCustom from './ModelCustom'

export default {
  name: 'HelloWorld',
  components:{
    syncProp,
    modelCustom
  },
  data() {
    return {
        input: '',
        inputObject: { name: '' }
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
</style>
