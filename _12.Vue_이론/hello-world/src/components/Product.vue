<template>
  <div>
    <h1>Product {{ $route.params.id }}</h1>
    <h1>Product {{ $route }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: {},
  data() {
    return {};
  },
};
</script>
