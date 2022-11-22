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
    <h1>{{ reversedMsg }}</h1>
    <h2>{{ reversedMsg2() }}</h2>
    <button @click="message = 'yeji'">click</button>
    <h3>이름 : {{ firstName }}</h3>
    <h3>성 : {{ lastName }}</h3>
    <h3>fullname : {{ fullName }}</h3>
    <button @click="fullNameGS = 'iphone 12mini'">setter</button>
    <div class="static" v-bind:class="classObject">
      들리니 지금 내가 하는 얘기
    </div>
    -->
    <div v-bind:class="[activeClass, errorClass]">
      들리니 지금 내가 하는 얘기
    </div>
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
      // firstName: "yeji",
      // lastName: "Lee",
      // isActive: true,
      // hasError: false,
      // error: null,
      // classObject: {
      //   active: true,
      //   "text-danger": false,
      // },
      activeClass: 'active',
      errorClass: 'text-danger',
    };
  },
  methods: {
    // reverseMessage() {
    //   this.message = this.message.split("").reverse().join("");
    // },
    // reversedMsg2() {
    //   return this.message.split("").reverse().join("");
    // },
  },
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
  computed: {
    // reversedMsg() {
    //   return this.message.split("").reverse().join("");
    // },
    // fullName() {
    //   return this.firstName + " " + this.lastName;
    // },
    // fullNameGS: {
    //   // getter
    //   get: function () {
    //     return this.firstName + " " + this.lastName;
    //   },
    //   set: function (newValue) {
    //     const name = newValue.split(" ");
    //     this.firstName = name[0];
    //     this.lastName = name[name.length - 1];
    //   },
    // },
    // classObject() {
    //   return {
    //     active: this.isActive && !this.error,
    //     'text-danger': this.error && this.error.type === 'fatal',
    //   };
    // },
  },
};
</script>
