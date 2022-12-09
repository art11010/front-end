<template>
  <div>
    <h1>Bar</h1>
    <div v-for="n in 10" :key="n">{{ n }} - 너꺼다!</div>
  </div>
</template>

<script>
export default {
  name: 'Bar',
  props: {},
  data() {
    return {};
  },
};
</script>
