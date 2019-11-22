<template>
  <div class="cart-item">
    <div class="md-layout flex-layout">
      <div class="md-item license-plan-text">
        <md-radio :value="true" v-model="item.active" @change="onSelect">
          <div class="scaled-text">LICENSE PLAN #{{ item.planNumber }}</div>
        </md-radio>
      </div>
      <div class="md-item price-per-license">{{ item.price }} per license
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cartItem',
  props: {
    item: Object,
  },
  methods: {
    onSelect() {
      this.$emit('onSelect');
    },
  },
};

</script>

<style scoped lang="scss">
  .cart-item {
    .flex-layout {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding: 10px 20px;
      &:hover{
        background-color: #E3F2FD;
        outline: 1px solid #90CAF9;
        outline-offset: -1px;
      }
    }
    .price-per-license {
      color: #777;
      &::before {
        font-family: "Proxima Nova";
        content: "\0024";
      }
    }
    .license-plan-text {
      font-weight: 800;
      letter-spacing: 0;
      font-size: 20px;
      line-height: 32px;
      color: #666;
    }
    .scaled-text {
      transform: scale(0.8,1);
      margin: 0 0 0 -18px;
    }
  }
</style>
