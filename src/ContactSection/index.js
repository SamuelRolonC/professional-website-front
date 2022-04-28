import React from "react";
import "./ContactSection.css";

function ContactSection() {
    const onSubmit = (e) => {
        e.preventDefault();

        let data = {
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value
        }

        alert(JSON.stringify(data));
    }

    return (
        <div id="contact" className="ContactSection">
            <h2>Contact</h2>
            
            <div className="ContactSectionContainer">
                <form onSubmit={onSubmit}>
                    <div className="ContactSectionField">
                        <label htmlFor={"name"}>Name</label>
                        <input id="name" name="name"></input>
                    </div>
                    <div className="ContactSectionField">
                        <label htmlFor={"email"}>Email</label>
                        <input id="email" name="email"></input>
                    </div>
                    <div className="ContactSectionField">
                        <label htmlFor={"message"}></label>
                        <textarea id="message" name="message" placeholder="Message..." rows={10}></textarea>
                    </div>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
}

export { ContactSection };