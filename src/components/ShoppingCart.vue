<template>
  <div class="full-control shopping-cart">
    <CartItem
      v-for="item in items"
      :key="item.id"
      :item="item"
      @onSelect="onSelect(item.id)"
    />
    <md-divider></md-divider>
    <NumberOfLicenses
      :items="licenses"
      v-model="numberOfLicenses"
    />
    <md-divider></md-divider>
    <div class="bottom-group">
      <div
        v-if="getTotalPrice"
        class="total-price"
      >
        <span class="total-price-text">TOTAL: <span class="price">
          ${{ getTotalPrice }}<span class="price-currency">US</span>
        </span></span>
      </div>
      <md-button
        class="md-raised md-primary button-buy"
        :disabled="!getTotalPrice"
      >Buy now</md-button>
      <div
        v-if="getTotalPrice"
        class="selected-plan"
      >
        Selected plan: #{{ getSelectedPlan }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import CartItem from './ShoppingCart/CartItem.vue';
import NumberOfLicenses from './NumberOfLicenses.vue';

export default {
  name: 'ShoppingCart',
  components: {
    CartItem,
    NumberOfLicenses,
  },
  computed: {
    getTotalPrice() {
      const item = this.items.find(({ active }) => active);
      if (!this.numberOfLicenses || !item) {
        return false;
      }
      return item.price * this.numberOfLicenses;
    },
    getSelectedPlan() {
      const item = this.items.find(({ active }) => active);
      if (!item) {
        return false;
      }
      return item.planNumber;
    },
    ...mapGetters([
      'items',
      'licenses',
    ]),
  },
  mounted() {
    this.$store.dispatch('loadItems');
    this.$store.dispatch('loadNumberOfLicenses');
  },
  data() {
    return {
      numberOfLicenses: 10,
      selectedItem: null,
    };
  },
  methods: {
    onSelect(index) {
      const items = this.items
        .map(item => ({ ...item, active: index === item.id }));
      this.$store.dispatch('updateItems', items);
    },
  },
};
</script>

<style scoped lang="scss">
  .shopping-cart {
    background-color: #f8f8f8;
    width: 590px;
    border: 10px solid #ebebeb;
    padding: 30px 15px;
    .md-button {
      &.button-buy {
        border-radius: 30px;
        width: 150px;
      }
    }
    .bottom-group {
      display: flex;
      align-items: center;
      flex-direction: column;
      .price-currency {
        font-size: small;
        vertical-align: top;
      }
      .price {
        color: #3383A8;
      }
    }
    .selected-plan {
      padding-top: 30px;
      color: #3383A8;
      font-weight: 400;
      font-size: 18px;
    }
    .total-price {
      padding-top: 20px;
      font-weight: 800;
      letter-spacing: 0;
      font-size: 20px;
      line-height: 32px;
      color: #666;
    }
    .total-price-text {
      color: #666;
    }
  }
</style>
