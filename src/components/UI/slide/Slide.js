import React from 'react';
import '../../../assets/sass/slider.sass';

const Slide = props => {
    return (
        <div className="slider mt-10 mb-3">
            {props.categories.map(item => {
                return (
                    <div className="slider-item" key={item.id}>
                        <div className="img">
                            <img className="img-fluid" alt={item.name} src={item.imageUrl} />
                        </div>
                        <div className="name">{item.name}</div>
                    </div>
                );
            })}
        </div>
    );
};

export default Slide;