import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';

import Header from '../../components/layout/Header/Header';
import ProductList from '../../components/product/ProductList';

const PurchaseHistory = (props) => {

    const { prods, idProd } = props;
    const [products, setProducts] = useState([]);

    const filteredProductsHandler = useCallback(filterProducts => {
        const filteredById = filterProducts.filter((data, key) => {
            return data.id.includes(idProd[key]);
        })
        setProducts(filteredById);
    }, [idProd])

    useEffect(() => {
        filteredProductsHandler(prods);
    }, [filteredProductsHandler, prods])

    return (
        <div className="purchase">
            <Header type="purchase" />
            <ProductList products={products} />
        </div>
    );
}

const mapStateToProps = state => {
    return {
        prods: state.product.products,
        idProd: state.product.idProd
    };
}

export default connect(mapStateToProps, null)(PurchaseHistory);