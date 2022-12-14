<template>
  <div>
    <h1>ㅎㅇ</h1>
    <h2>{{ counterState }}, {{ countGetters }}</h2>
    <button @click="increment">클릭해바</button>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
  data() {
    return {};
  },
  mounted() {},
  computed: {
    // counterState() {
    //   return this.$store.state.count;
    // },
    // countGetters() {
    //   return this.$store.getters.countGetters(2);
    // },
    ...mapState({
      counterState: 'count',
    }),
    ...mapGetters({
      countGetters: 'countGetters',
    }),
  },
  methods: {
    increment() {
      this.$store.commit('increment', 10);
    },
  },
};
</script>

<style></style>
