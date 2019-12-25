<template>
  <div class="teste">
      <div class="fixed">
          <h1> V-MODEL and PROPS/EVENT </h1>
          <p> input: {{input}}, inputObject: {{inputObject}}</p>
      </div>
      <main>
          <section>
              <div>
                  <h4>v-model</h4>
                  <label>input: </label> 
                  <input v-model="input">
                  <p> input: {{input}} </p>
              </div>
              <div>
                  <prism language="html">{{html}}</prism>
              </div>
          </section>
          <hr>

          <section>
              <div>
                  <h4>v-model com modifiicador .lazy</h4>
                  <label>input lazy:</label> 
                  <input v-model.lazy="input">
                  <p> input: {{input}} </p>
              </div>
              <div>
                  <prism language="html">{{html1}}</prism>
              </div>
          </section>

          <hr>
          
          <section>
              <div>
                  <h4>props/events</h4>
                  <label>input:</label> 
                  <input @input="inputAction($event)" :value="input">
                  <p> input: {{input}} </p>
              </div>
              <div>
                  <prism language="html">{{html2}}</prism>
              </div>
          </section>

          <hr>

          <section>
              <div>
                  <h4>props common pattern</h4>
                  <sync-prop 
                    v-bind:name="inputObject.name" 
                    v-on:update:name="inputObject.name = $event"

                    v-bind:value="inputObject.value" 
                    v-on:update:value="inputObject.value = $event"
                  />
              </div>
              <div>
                  <prism language="html">{{html3}}</prism>
              </div>
          </section>

          <hr>

          <section>
              <div>
                  <h4>.sync sugar</h4>
                  <p>inputObject: {{inputObject}}</p>
                  <sync-prop v-bind.sync="inputObject" />
              </div>
              <div>
                  <prism language="html">{{html4}}</prism>
              </div>
          </section>

          <hr>

          <section>
              <div>
                  <h4>Model Custom</h4>
                  <model-custom v-model="input"/>
                  <p>input: {{input}}</p>
              </div>
              <div>
                  <prism language="html">{{html5}}</prism>
              </div>
          </section>

          <section>
              <div>
                  <h4>Model Custom</h4>
                  <model-custom v-model="input"/>
                  <p>input: {{input}}</p>
              </div>
              <div>
                  <prism language="html">{{html5}}</prism>
              </div>
          </section>
          <section>
              <div>
                  <h4>v-model vuex</h4>
                  <label>input: </label> 
                  <input v-model="name">
                  <p> input: {{input}} </p>
              </div>
              <div>
                  <prism language="html">{{html}}</prism>
              </div>
          </section>

        </main>

        <footer>
            <h4><a href="https://github.com/wouerner">wouerner</a></h4>
            <h5> <a href="https://codigodehonra.tech">codigodehonra.tech</a></h5>
            <a href="https://codigodehonra.tech"><img style=" height: 24px" src="@/assets/logo.png"/></a>
        </footer>
  </div>
</template>

<script>

import syncProp from './Sync'
import modelCustom from './ModelCustom'
import { mapGetters, mapActions } from 'vuex'

import 'prismjs'
import 'prismjs/themes/prism.css'

import prism from 'vue-prism-component'

export default {
  name: 'Teste',
  components:{
    syncProp,
    modelCustom,
    prism
  },
  data() {
    return {
        input: '',
        inputObject: { name: '', value: '' },
        inputObjectVuex: { name: '', value: '' },
        html: `
               <label>input: </label> 
               <input v-model="input">
               <p> input: {{input}} </p>
               `,

        html1: `
              <h4>v-model com modifiicador .lazy</h4>
              <label>input lazy:</label> 
              <input v-model.lazy="input">
              <p> input: {{input}} </p>
               `,
        html2: `
                  <h4>props/events</h4>
                  <label>input:</label> 
                  <input @input="inputAction($event)" :value="input">
                  <p> input: {{input}} </p>
               `,
        html3: `
                  <h4>props common pattern</h4>
                  <sync-prop 
                    v-bind:name="inputObject.name" 
                    v-on:update:name="inputObject.name = $event"

                    v-bind:value="inputObject.value" 
                    v-on:update:value="inputObject.value = $event"
                  />
               `,
        html4: `
                  <h4>.sync sugar</h4>
                  <p>inputObject: {{inputObject}}</p>
                  <sync-prop v-bind.sync="inputObject" />
               `,
        html5: `
                  <h4>Model Custom</h4>
                  <model-custom v-model="input"/>
                  <p>input: {{input}}</p>
               `,
    }
  },
  computed: {
    ...mapGetters({
      getName: 'getName',
      getValue: 'getValue'
    }),
    name: {
        get(){
            return this.getName 
        },
        set(val){
            this.updateName(val)
        }
    }

  },
  methods: {
    inputAction(e) {
      this.input = e.target.value 
    },
    inputSync(e) {
      this.input = e.target.value 
    },
    ...mapActions({
        updateName: 'updateName'
    })
  }
}
</script>

<style scoped>
h1{
    font-size: 18pt;
}

h2{
    font-size: 16pt;
}
h4{
    font-size: 14pt;
    margin: 2px;
}
h5{
    font-size: 12pt;
    margin: 2px;
}
main{
    margin-top: 122px;
    margin-bottom: 122px;
}
a {
    color: white;
}

section {
    padding: 5px;
    display: flex;
    justify-content: space-between;
}

section:hover {
    background-color: #B2DBB2 
}

.fixed {
    position: fixed;
    top: 0px;
    width: 100%;
    background-color: #008A00;
    color: white;
    padding: 5px;
}

footer {
    position: fixed;
    bottom: 0px;
    width: 100%;
    background-color: #008A00;
    color: white;
    padding: 5px;
    text-align: center;
}
</style>
