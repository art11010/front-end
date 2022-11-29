<template>
  <div>
    안녕 난 예징가징 ㅎㅅㅎ <br />
    인사 : {{ count }}번 <br />
    <button @click="count += 1">인사해줭</button>
  </div>
</template>

<script>
export default {
  name: 'SimpleCounter',
  data() {
    return {
      count: 0,
    };
  },
};
</script>

<style></style>
