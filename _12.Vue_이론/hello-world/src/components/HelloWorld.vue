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
    <!-- <button @click="toggle">두유노 토글?</button>
    <keep-alive>
      <component :is="currentView"></component>
    </keep-alive> -->
    <!-- <MyComponent :authors="authorObj"></MyComponent> -->
    <!-- <div id="yeji-demo">
      <button @click="show = !show">토글</button>
      <transition name="slide-fade">
        <p v-if="show">하이</p>
      </transition>
      <transition name="bounce">
        <p v-if="show">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          facilisis enim libero, at lacinia diam fermentum id. Pellentesque
          habitant morbi tristique senectus et netus.
        </p>
      </transition>
      <button v-on:click="add">Add</button>
      <button v-on:click="remove">Remove</button>
      <transition-group name="list" tag="p">
        <span v-for="item in items" v-bind:key="item" class="list-item">
          {{ item }}
        </span>
      </transition-group>
    </div> -->
    <h2>Mixins test</h2>
  </div>
</template>

<script>
// import MyComponent from './MyComponent.vue';
// import YourComponent from './YourComponent.vue';
// import CurrencyInput from './CurrencyInput';
import testMixin from '../mixins/common.js';

export default {
  name: 'HelloWorld',
  components: {
    // MyComponent,
    // 'my-component': MyComponent,
    // 'your-component': YourComponent,
    // CurrencyInput,
  },
  mixins: [testMixin],
  props: [],
  data() {
    return {
      message: 'Hello, Yeji',
      total: 0,
      price: 0,
      currentView: 'my-component',
      authorObj: {
        fistName: 'yeji',
        lastName: 'lee',
      },
      show: true,
      items: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      nextNum: 10,
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
    randomIndex: function () {
      return Math.floor(Math.random() * this.items.length);
    },
    add: function () {
      this.items.splice(this.randomIndex(), 0, this.nextNum++);
    },
    remove: function () {
      this.items.splice(this.randomIndex(), 1);
    },
  },
  computed: {},
  created() {},
  mounted() {
    console.log(this.$root.test);
  },
  destroyed() {},
};
</script>
<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
