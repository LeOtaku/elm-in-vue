<template>
  <div id="app">
    <div>
      <button @click="ports.counter.send(10)">Multiply by 10</button>
    </div>
    <img src="./assets/logo.png">
    <Counter :ports="setupPorts" :flags="{initialCount: 10}"></Counter>
    <Hello msg="This shit actually worked!"></Hello>
  </div>
</template>

<script>
import elmBridge from './elm-bridge'
import Hello from './components/HelloWorld.vue'
import { Main as Counter } from './components/Counter.elm'

export default {
  name: 'app',
  components: {
    'Hello': Hello,
    'Counter': elmBridge(Counter)
  },
  methods: {
    setupPorts: function (ports) {
      ports.watchCounter.subscribe((counter) => {
        console.log(counter)
      })
      this.ports = ports
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
