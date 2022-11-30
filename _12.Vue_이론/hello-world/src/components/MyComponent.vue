<template>
  <div>
    <!-- <button v-on:click="childMethod">{{ counter }}</button> -->
    <!-- <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot>
        아무 것도 주지않으면 수면 위로 떠오르지 이런 날 보면 어떤 게 떠오르는가
      </slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer> -->
    <slot>
      <div v-for="n in 1000" :key="n">{{ n }} - 마이컴포넌트다!</div>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'MyComponent',
  props: {},
  data() {
    return {
      counter: 0,
    };
  },
  computed: {},
  methods: {
    // childMethod: function () {
    //   this.counter += 1;
    //   // this.$emit('vOnEventName');
    //   this.$emit('update:syncEventName', this.counter);
    // },
  },
};
</script>
