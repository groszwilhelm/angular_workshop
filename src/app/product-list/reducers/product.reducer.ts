import { Product } from '../product/product.model';
import { ProductActions, LOAD_PRODUCTS, LOAD_PRODUCTS_COMPLETED, LOAD_PRODUCTS_ERROR } from '../actions/product.actions';

interface ProductState {
  isLoading: boolean;
  products: Array<Product>;
  error: any;
}

const initialState: ProductState = {
  isLoading: false,
  products: [],
  error: null
};

export function reducer(state: ProductState = initialState, action: ProductActions) {
  switch (action.type) {
    case LOAD_PRODUCTS:
      return { ...state, isLoading: true };

    case LOAD_PRODUCTS_COMPLETED:
      return { ...state, isLoading: false, products: action.payload };

    case LOAD_PRODUCTS_ERROR:
      return { ...state, isLoading: false, products: [], error: action.payload };

    default:
      return state;
  }
}
