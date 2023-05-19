import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    products: [],
    categories: [],
    idProd: [],
    message: false
};

const productStart = ( state ) => {
    return updateObject(state, { message: false } );
};

const setProducts = (state, action) => {
    return updateObject( state, {
        products: action.products.productPromo,
        categories: action.products.category
    });
};

let id = [];
const addProductPurchase = ( state, action ) => {
    id.push(action.idProd);
    return updateObject( state, {
        idProd: id,
        message: true
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_PRODUCTS: return setProducts(state, action);
        case actionTypes.PRODUCT_START: return productStart(state, action);
        case actionTypes.ADD_PRODUCT_PURCHASE: return addProductPurchase( state, action );
        default: return state;
    }
};

export default reducer;