import { shallowMount, createLocalVue } from '@vue/test-utils';
import VueMaterial from 'vue-material';
import ShoppingCart from '@/components/ShoppingCart.vue';

describe('ShoppingCart', () => {
  // add this before each
  beforeEach(() => {
    // const localVue = createLocalVue();
    // localVue.use(VueMaterial);
  });
  describe('ShoppingCart.vue', () => {
    const localVue = createLocalVue();
    localVue.use(VueMaterial);
    it('should render content correctly', () => {
      const wrapper = shallowMount(ShoppingCart, {
        localVue,
        mocks: {
          $store: {
            state: {},
            getters: {
              items: [
                {
                  id: 1,
                  planNumber: 1,
                  price: 13,
                  active: false,
                },
                {
                  id: 2,
                  planNumber: 2,
                  price: 22,
                  active: false,
                },
                {
                  id: 3,
                  planNumber: 3,
                  price: 34,
                  active: false,
                },
              ],
              licenses: [1, 2, 3, 10, 100, 1000],
            },
            dispatch: jest.fn(),
          },
        },
      });
      // wrapper.vm.$store.dispatch = jest.fn();
      expect(wrapper.vm.$el).toMatchSnapshot();
    });
  });
  describe('CartItem.vue', () => {

  });
});
