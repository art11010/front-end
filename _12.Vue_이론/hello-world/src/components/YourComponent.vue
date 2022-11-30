<template>
  <div>
    <slot>
      <div v-for="n in 1000" :key="n">{{ n }} - 너꺼다!</div>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'YourComponent',
  props: {},
  data() {
    return {};
  },
};
</script>
