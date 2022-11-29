<template>
  <div>
    <h1>{{ message }}</h1>
    <!-- <h3>{{ total }}</h3> -->
    <!-- <MyComponent v-on:vOnEventName="parentMethod"></MyComponent> -->
    <!-- <MyComponent :syncEventName.sync="total"></MyComponent> -->
    <!-- <CurrencyInput v-model="price"></CurrencyInput> -->
    <!-- {{ price }} -->
    <MyComponent>
      <h1 slot="header">안뇽 나 부모 제목 ㅎㅎ</h1>
      <p>나는 메인 달락이양</p>
      <p>호호 하나 더 있엉</p>
      <p slot="footer">안뇽 나는 부모 발이양 ㅋㅋㅋ</p>
    </MyComponent>
  </div>
</template>

<script>
import MyComponent from './MyComponent.vue';
// import CurrencyInput from './CurrencyInput';
export default {
  name: 'HelloWorld',
  components: {
    MyComponent,
    // CurrencyInput,
  },
  props: [],
  data() {
    return {
      message: 'Hello, Yeji',
      total: 0,
      price: 0,
    };
  },
  methods: {
    parentMethod: function () {
      this.total += 1;
    },
  },
  computed: {},
  created() {},
  mounted() {},
  destroyed() {},
};
</script>
