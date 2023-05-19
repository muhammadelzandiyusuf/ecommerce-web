import React, { useState, useEffect, useRef, useCallback } from 'react';

import Header from '../../components/layout/Header/Header';
import ProductList from '../../components/product/ProductList';
import axios from '../../axios-orders';

const Search = () => {

    const [products, setProducts] = useState([]);
    const [enteredFilter, setEnteredFilter] = useState('');
    const inputRef = useRef();

    const filteredProductsHandler = useCallback(filterProducts => {
        setProducts(filterProducts)
    }, [])

    const filterTypeHandler = (event) => {
        setEnteredFilter(event.target.value);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            if (enteredFilter === inputRef.current.value) {
                axios.get( '/home' )
                .then( response => {
                    const dataApi = response.data[0].data.productPromo;
                    const filteredCharacters = dataApi.filter(data => {
                        return data.title.toLowerCase().includes(enteredFilter.toLowerCase());
                    })
                    filteredProductsHandler(filteredCharacters)
                })
                .catch( error => {
                    console.log(error);
                });
            }
        }, 500)
        return () => {
            clearTimeout(timer);
        }
    }, [enteredFilter, filteredProductsHandler, inputRef])

    return (
        <div className="search">
            <Header type="search" inputRef={inputRef} onEnteredSearch={(event) => filterTypeHandler(event)} />
            <ProductList products={products} />
        </div>
    );
}

export default Search;