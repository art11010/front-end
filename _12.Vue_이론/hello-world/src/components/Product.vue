<template>
  <div>
    <h1>Product {{ news }}</h1>
    <h1>Product {{ $route }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: {
    news: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
};
</script>
