import React from 'react';
import './CheckoutForm.css'; 

function CheckoutForm () {
  return (
        <section className="checkout">
            <div className="container">
                <div className="checkout_content">
                    <form className="personalInfo">
                        <h2 className="checkout_title">Billing details</h2>
                        <div className="personalInfo_name">
                            <div className="personalInfo_first-name">
                                <label className="personalInfo_lable" for="user-name">First Name</label>
                                <input type="text" id="user-name" name="user-name" className="personalInfo_input"/>
                            </div>

                            <div className="personalInfo_last-name">
                                <label className="personalInfo_lable" for="user-surname">Last Name</label>
                                <input type="text" id="user-surname" name="user-surname" className="personalInfo_input"/>
                            </div>
                        </div>

                        <div className="personalInfo_company">
                            <label className="personalInfo_lable" for="user-company">Company Name (Optional)</label>
                            <input type="text" id="user-company" name="user-company" className="personalInfo_input"/>
                        </div>

                        <div className="personalInfo_country">
                            <label className="personalInfo_lable" for="user-country">Street address</label>
                            <select id="user-country" name="user-country" className="personalInfo_select">
                                <option value="Kyrgyzstan">Kyrgyzstan</option>
                                <option value="Kazakhstan">Kazakhstan</option>
                                <option value="Uzbekistan">Uzbekistan</option>
                            </select>
                        </div>

                        <div className="personalInfo_city">
                            <label className="personalInfo_lable" for="user-city">Town / City</label>
                            <input type="text" id="user-city" name="user-city" className="personalInfo_input"/>
                        </div>

                        <div className="personalInfo_province">
                            <label className="personalInfo_lable" for="user-province">Province</label>
                            <select id="user-province" name="user-province" className="personalInfo_select">
                                <option value="value1">Western Province</option>
                                <option value="value2">Western Province</option>
                                <option value="value3">Western Province</option>
                            </select>
                        </div>

                        <div className="personalInfo_zip">
                            <label className="personalInfo_lable" for="user-zip">ZIP code</label>
                            <input type="text" id="user-zip" name="user-zip" className="personalInfo_input"/>
                        </div>

                        <div className="personalInfo_phone">
                            <label className="personalInfo_lable" for="user-phone">Phone</label>
                            <input type="text" id="user-phone" name="user-phone" className="personalInfo_input"/>
                        </div>

                        <div className="personalInfo_adress">
                            <label className="personalInfo_lable" for="user-adress">Email address</label>
                            <input type="text" id="user-adress" name="user-adress" className="personalInfo_input"/>
                        </div>

                        <div className="personalInfo_aditional" for="user-aditional">
                            <input type="text" id="user-aditional" name="user-aditional" className="personalInfo_input" placeholder="Additional information"/>
                        </div>
                    </form>
                    
                    <div className="productInfo">
                        <div className="productInfo_pay">
                            <div className="productInfo_pay-desc">
                                <h4>Product</h4>
                                <p className="productInfo-subject">Asgaard sofa <span class="productInfo-count">X 1</span></p>
                                <p className="productInfo_pay-content">Subtotal</p>
                                <p className="productInfo_pay-content">Total</p>
                            </div>

                            <div className="productInfo_pay-score">
                                <h4>Subtotal</h4>
                                <p className="productInfo_pay-content">$ 250,000.00</p>
                                <p className="productInfo_pay-content">$ 250,000.00</p>
                                <p className="total-score">$ 250,000.00</p>
                            </div>
                        </div>

                        <hr className="productInfo-line"/>

                        <div className="productInfo_payInfo">
                            <input type="radio" className="input_bank" name="bank" value="bank" checked/>
                            <lable className="productInfo_payInfo-title">Direct Bank Transfer</lable>
                            <p className="productInfo_payInfo-extraInfo">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                        
                            <div className="productInfo_payInfo-payway">
                                <input type="radio" id="payment-type" name="payment-type" value="bank"/>
                                <label for="bank">Direct Bank Transfer</label><br/>
                                <input type="radio" id="payment-type" name="payment-type" value="cash"/>
                                <label for="cash">Cash On Delivery</label><br/>
                            </div>
                        
                            <p className="productInfo_payInfo-warning">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <b class="bold-text">privacy policy.</b></p>
                            
                            <div className="productInfo_payInfo-btn">
                                <button type="submit">Place order</button>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </section>
  );
};

export default CheckoutForm;
