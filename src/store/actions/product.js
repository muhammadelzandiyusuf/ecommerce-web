import * as actionTypes from './actionTypes';
import axios from '../../axios-orders';

export const productStart = () => {
    return {
        type: actionTypes.PRODUCT_START
    };
};

export const setProducts = ( products ) => {
    return {
        type: actionTypes.SET_PRODUCTS,
        products: products
    };
};

export const initProducts = () => {
    return dispatch => {
        axios.get( '/home' )
        .then( response => {
            const data = response.data[0].data;
            dispatch(setProducts(data));
        })
        .catch( error => {
           console.log(error);
        });
    };
};

export const addProductPurchase = ( id ) => {
    return {
        type: actionTypes.ADD_PRODUCT_PURCHASE,
        idProd: id
    };
};