import React from "react";
import './ProfileForm.css';

const ProfileForm= () => {
    return (
        <section className="profile">
            <div className="profile_selection">
                <a href="#" className="profile_title-active">Personal Settings</a>
                <a href="#" className="profile_title">Order History</a>
                <hr className="profile_selection-line"/>
                <hr className="profile_title-active-line"/>
            </div>

            <div className="pers_set-section">
                <div className="pers_set-content">
                    <div>
                        <label className="pers_set-lable" for="user-name">Your name</label>
                        <input className="pers_set-input" name="user-name" id="user-name" placeholder="Abc"/>
                    </div>

                    <div>
                        <label className="pers_set-lable" for="user-address">Email address</label>
                        <input className="pers_set-input" name="user-address" id="user-address" placeholder="Abc@def.com"/>
                    </div>

                    <div>
                        <label className="pers_set-lable" for="user-message">Message</label>
                        <input className="pers_set-input pers_set-input-messege" name="user-message" id="user-message" placeholder="Hi! i’d like to ask about"/>
                    </div>

                    <button className="pers_set-btn">Submit changes</button>
                </div>
            </div>
        </section>

    );
};

export default ProfileForm;