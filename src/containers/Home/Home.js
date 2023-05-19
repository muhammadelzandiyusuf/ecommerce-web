import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import axios from '../../axios-orders';
import Navbar from '../../components/layout/Navbar/Navbar';
import Slide from '../../components/UI/slide/Slide';
import Product from '../../components/product/Product';
import FooterMenu from '../../components/layout/FooterMenu/FooterMenu';
import * as actions from '../../store/actions/index';

import '../../assets/sass/home.sass';

const Home = (props) => {

    const { onInitProducts, prods, cats } = props;

    useEffect(() => {
        onInitProducts();
    }, [onInitProducts])

    return (
        <div className="home">
            <Navbar />
            <Slide categories={cats} />
            <Product products={prods} />
            <FooterMenu />
        </div>
    );
};

const mapStateToProps = state => {
    return {
        prods: state.product.products,
        cats: state.product.categories,
        isAuthenticated: state.auth.token !== null
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onInitProducts: () => dispatch(actions.initProducts()),
        onSetAuthRedirectPath: (path) => dispatch(actions.setAuthRedirectPath(path))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home, axios);