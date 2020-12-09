import React from 'react'
import './Contact.scss'


const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "", email: "", message: "" };
    }

    /* Here’s the juicy bit for posting the form submission */

    handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.state })
        })
            .then(() => alert("Success!"))
            .catch(error => alert(error));

        e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { name, email, message } = this.state;
        return (
            <div className='contact-section'>
                <div className="section-left">
                    <h1>contact me</h1>
                    <ul>
                        <li>
                            <a href=""><i className="fab fa-whatsapp-square"></i></a>
                        </li>
                        <li>
                            <a href=""><i className="fab fa-linkedin"></i></a>
                        </li>
                        <li>
                            <a href=""><i className="fab fa-discord"></i></a>
                        </li >
                    </ul >
                    <p>Phone:+91-77227074785</p>
                </div>
                <div className="section-right">
                    <form onSubmit={this.handleSubmit}>

                        <label>
                            Name:
                            </label>
                        <input type="text" name="name" value={name} onChange={this.handleChange} required />


                        <label>
                            Email:
                            </label>
                        <input type="email" name="email" value={email} onChange={this.handleChange} required />


                        <label>
                            Message:
                            </label>
                        <textarea name="message" value={message} onChange={this.handleChange} required />

                        <button type="submit">Send</button>

                    </form>

                </div>

            </div>
        );
    }
}

export default Contact

