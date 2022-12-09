<template>
  <div>
    <h1>Foo</h1>
    <button @click="move">Go to Bar</button> <br />
    안녕 난 예징가징 ㅎㅅㅎ <br />
    인사 : {{ count }}번 <br />
    <button @click="count += 1">인사해줭</button>
  </div>
</template>

<script>
export default {
  name: 'Foo',
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    move() {
      this.$router.push({ name: 'bar' });
    },
  },
};
</script>

<style></style>
