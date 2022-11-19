<template>
  <div>
    <h1>Hello world</h1>
    <h3>{{ message }}</h3>
    <button v-on:click="reverseMessage">Click</button>
    <h3 v-bind:title="mouse">마우스</h3>
    <h3 v-if="seen">You can see me, now.</h3>
    <ol>
      <li v-for="todo in todos" :key="todo.text">
        {{ todo.text }}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      message: 'Hello, Yeji',
      mouse: '현재 시각 : ' + new Date(),
      seen: true,
      todos: [
        {text: '?'},
        {text: '??'},
        {text: '???'},
      ]
    }
  },
  methods: {
    reverseMessage() {
      this.message = this.message.split('').reverse().join('')
    }
  },
}
</script>
