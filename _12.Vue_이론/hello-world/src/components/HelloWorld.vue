<template>
  <div>
    <h1>{{ message }}</h1>
    <!-- <h3>{{ total }}</h3> -->
    <!-- <MyComponent v-on:vOnEventName="parentMethod"></MyComponent> -->
    <!-- <MyComponent :syncEventName.sync="total"></MyComponent> -->
    <!-- <CurrencyInput v-model="price"></CurrencyInput> -->
    <!-- {{ price }} -->
    <!-- <MyComponent>
      <h1 slot="header">안뇽 나 부모 제목 ㅎㅎ</h1>
      <p>나는 메인 달락이양</p>
      <p>호호 하나 더 있엉</p>
      <p slot="footer">안뇽 나는 부모 발이양 ㅋㅋㅋ</p>
    </MyComponent> -->
    <!-- <MyComponent>
      <template slot-scope="{ text }">
        <span>나는 부모의 span</span>
        <br />
        <span>{{ text }}</span>
      </template>
    </MyComponent> -->
    <button @click="toggle">두유노 토글?</button>
    <keep-alive>
      <component :is="currentView"></component>
    </keep-alive>
  </div>
</template>

<script>
import MyComponent from './MyComponent.vue';
import YourComponent from './YourComponent.vue';
// import CurrencyInput from './CurrencyInput';
export default {
  name: 'HelloWorld',
  components: {
    'my-component': MyComponent,
    'your-component': YourComponent,
    // CurrencyInput,
  },
  props: [],
  data() {
    return {
      message: 'Hello, Yeji',
      total: 0,
      price: 0,
      currentView: 'my-component',
    };
  },
  methods: {
    parentMethod: function () {
      this.total += 1;
    },
    toggle() {
      this.currentView == 'my-component'
        ? (this.currentView = 'your-component')
        : (this.currentView = 'my-component');
    },
  },
  computed: {},
  created() {},
  mounted() {},
  destroyed() {},
};
</script>
