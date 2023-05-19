import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { NotificationContainer, NotificationManager } from 'react-notifications';

import Button from '../../components/UI/button/Button';
import * as actions from '../../store/actions/index';
import Modal from '../../components/UI/modal/Modal';

import '../../assets/sass/product-detail.sass';
import '../../assets/sass/notification.sass';

const ProductDetail = (props) => {

    const { prods, message, onStartProduct } = props;
    const paramId = props.match.params.id;
    const [products, setProducts] = useState([]);
    const shareUrl = 'https://github.com';
    const [show, setShow] = useState(false);
    const [loved, setLoved] = useState(false);

    const filteredProductsHandler = useCallback(filterProducts => {
        const filteredById = filterProducts.filter(data => {
            return data.id.toLowerCase().includes(paramId.toLowerCase());
        })
        setProducts(filteredById);
    }, [paramId])

    useEffect(() => {
        onStartProduct()
        filteredProductsHandler(prods);
        if(message){
            NotificationManager.success('Succes', 'Thank you for buying');
        }
    }, [onStartProduct, filteredProductsHandler, prods, message])

    const backHandler = () => {
        props.history.goBack();
    }

    const shareLinkHandler = () => {
        setShow(!show)
    }

    const lovedHandler = () => {
        setLoved(!loved)
    }
    
    return (
        <div>
            <NotificationContainer />
            {products.length > 0 &&
                <div>
                    {show &&
                        <Modal close={shareLinkHandler} shareUrl={shareUrl} title={products[0].title} />
                    }
                    <div className="product-detail">
                        <div className="back" onClick={backHandler}>
                            <i className="fas fa-long-arrow-alt-left"></i>
                        </div>
                        <div className="sahre">
                            <button onClick={shareLinkHandler}>
                                <i className="fas fa-share-alt"></i>
                            </button>
                        </div>
                        <div className="images">
                            <img src={products[0].imageUrl} alt={products[0].title} />
                        </div>
                        <div className="content">
                            <div className="title">{products[0].title}</div>
                            <div className="love">
                                {products[0].loved === 1 ? (
                                    <i className="fas fa-heart"></i>
                                ):(
                                    <span>
                                        {loved ? (
                                            <i className="fas fa-heart"></i>
                                        ):(
                                            <i className="far fa-heart" onClick={lovedHandler}></i>
                                        )}
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="description">
                            {products[0].description}
                        </div>
                        <div className="content">
                            <div className="price">{products[0].price}</div>
                            <div className="buy" onClick={() => props.onProductAdded(paramId)}>
                                <Button icon={null} name="Buy" btnClass="btn btn-buy" />
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

const mapStateToProps = state => {
    return {
        prods: state.product.products,
        message: state.product.message
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onStartProduct: () => dispatch(actions.productStart()),
        onProductAdded: (id) => dispatch(actions.addProductPurchase(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);