<template>
  <div>
    $
    <input
      ref="input"
      v-bind:value="value"
      v-on:input="updateValue($event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'CurrencyInput',
  props: ['value'],
  methods: {
    updateValue(value) {
      let formettedValue = value
        .trim()
        .slice(
          0,
          value.indexOf('.') === -1 ? value.length : value.indexOf('.') + 3
        );
      if (formettedValue !== value) {
        this.$refs.input.value = formettedValue;
      }
      this.$emit('input', Number(formettedValue));
    },
  },
};
</script>

<style></style>
