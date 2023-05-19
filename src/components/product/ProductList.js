import React from 'react';
import { Link } from 'react-router-dom';

import '../../assets/sass/product.sass';

const ProductList = props => {
    return (
        <div className="mt-12">
            {props.products.map(item => {
                return(
                    <Link to={"/product/" + item.id} key={item.id}>
                        <div className="product-list mb-3">
                            <div className="images">
                                <img src={item.imageUrl} alt={item.title} />
                            </div>
                            <div className="content">
                                <p>{item.title}</p>
                                <p>{item.price}</p>
                            </div>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
}

export default ProductList;