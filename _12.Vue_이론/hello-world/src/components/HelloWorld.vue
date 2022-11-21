<template>
  <div>
    <h1>{{ message }}</h1>
    <!--
    <input type="text" v-model="message">
    <button v-on:click="reverseMessage">Click</button>
    <h3 v-bind:title="mouse">Mouse Hover</h3>
    <h3 v-if="seen">You can see me, now.</h3>
    <ol>
      <li v-for="todo in todos" :key="todo.text">
        {{ todo.text }}
      </li>
    </ol>
    <h4>{{ fruit.name }}</h4>
    <h3>{{test.a}}</h3>
    <button @click="test.a = 2">test</button>
    <h3>{{testConst.foo}}</h3>
    <button @click="testConst.foo = 'foo'">testConst</button>
    -->
  </div>
</template>

<script>
// let test = {
//   a: 1
// }
// let testConst = {
//   foo: 'bar'
// }

// Object.freeze(testConst)

export default {
  name: 'HelloWorld',
  // props: ['fruit'],
  data() {
    return {
      message: 'Hello, Yeji',
      // mouse: '현재 시각 : ' + new Date(),
      // seen: true,
      // todos: [
      //   {text: '?'},
      //   {text: '??'},
      //   {text: '???'},
      // ]
      // test: test,
      // testConst: testConst,
    }
  },
  // methods: {
  //   reverseMessage() {
  //     this.message = this.message.split('').reverse().join('')
  //   }
  // },
  // created() {
  //   console.log('created');
  //   console.log(this.message)
  // },
  // mounted() {
  //   console.log('mounted');
  //   console.log(this.message)
  // },
  // destroyed() {
  //   console.log('destroyed');
  //   console.log(this.message)
  // },
}
</script>
