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
  beforeRouteEnter(to, from, next) {
    // 이 컴포넌트를 렌더링하는 라우트 앞에 호출
    // 이 가드가 호출 될 때 아직 생성되지 않았기 때문에 `this` 컴포넌트 인스턴스에 접근 할 수 없음
  },
  beforeRouteLeave(to, from, next) {
    // 이 컴포넌트를 렌더링하는 라우트가 이전으로 네비게이션 될 때 호출
    // `this` 컴포넌트 인스턴스에 접근 할 수 있음
  },
};
</script>
