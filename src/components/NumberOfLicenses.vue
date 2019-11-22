<template>
  <div class="number-of-licenses">
  Number of licenses: <select :value="value" @change="onChange" class="licenses-select">
    <option
      v-for="item in items"
      :key="item"
    >{{ item }}</option>
  </select>
  </div>
</template>
<script>
export default {
  name: 'NumberOfLicenses',
  props: {
    items: Array,
    value: {
      type: Number,
      default: null,
    },
  },
  model: {
    prop: 'value',
    event: 'update:value',
  },
  methods: {
    onChange({ target }) {
      this.$emit('update:value', Number(target.value));
    },
  },
};
</script>
<style scoped lang="scss">
  .number-of-licenses {
    flex-direction: row;
    display: flex;
    justify-content: flex-end;
    padding-right: 40%;
    margin: 20px 0;
    font-weight: 500;
  }
  .licenses-select {
    margin-left: 10px;
  }
</style>
