import React from 'react';
import './ProductSection.css';
import ProductComparisonImg1 from './../../../img/comparison-image1.png';
import ProductComparisonImg2 from './../../../img/comparison-image2.png';

const ProductSection = () => {
    return (
        <div className="top-comparison">
            <div className="link-part">
                <h2>Go to Product page for more Products</h2>
                <p><span className="underline"><a href="/products">View More</a></span></p>
            </div>
            <div className="first-product">
                <img className="sofa-image" src={ProductComparisonImg1} alt="Product"/>
                <h5>Sofa</h5>
                <p>$ 250,000.00</p>
                <div className="product-mark1">
                    <p>4.7</p>
                    <div className="stars" style={{ width: "75%" }}>★★★★★</div>
                    <div className="vertical-line"></div>
                    <p className="review">204 Review</p>
                </div>
            </div>
            <div className="second-product">
                <img className="set-image" src={ProductComparisonImg2} alt="Product"/>
                <h5>Sofa Set</h5>
                <p>$ 224,000.00</p>
                <div className="product-mark2">
                    <p>4.7</p>
                    <div className="stars" style={{ width: "75%" }}>★★★★★</div>
                    <div className="vertical-line"></div>
                    <p className="review">204 Review</p>
                </div>
            </div>
            <div className="fourth-column">
                <button className="add">Add A Product</button>
                <select>
                    <option value="choose" disabled selected>Choose a Product</option>
                    <option value="sofa">Sofa</option>
                    <option value="sofa-set">Sofa Set</option>
                </select>
            </div>
        </div>
    );
};

export default ProductSection;
