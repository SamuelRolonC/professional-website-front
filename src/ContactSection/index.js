import React from "react";
import "./ContactSection.css";

function ContactSection() {
    const onSubmit = (e) => {
        e.preventDefault();

        let data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }

        alert(data);
    }

    return (
        <div className="ContactSection">
            <h2>Contact</h2>
            
            <div className="ContactSectionContainer">
                <form onSubmit={onSubmit}>
                    <div className="ContactSectionField">
                        <label htmlFor={"name"}>Name</label>
                        <input id="name" name="name"></input>
                    </div>
                    <div className="ContactSectionField">
                        <label htmlFor={"mail"}>Mail</label>
                        <input id="mail" name="mail"></input>
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