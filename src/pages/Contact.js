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
            <div className='Contact'>
                <div className="section-left">
                    <div><h1><span>Let's</span><br />
                    get in touch</h1>
                        <img src="./images/ant-design_message-filled.png" alt="" /></div>
                    <ul>
                        <a>
                            <img src="./images/uil_linkedin.svg" alt="" />
                        </a>
                        <a>
                            <img src="./images/uim_whatsapp.svg" alt="" />
                        </a>
                        <a>
                            <img src="./images/bx_bxl-discord.svg" alt="" />
                        </a >
                    </ul >
                    <p>Phone:+91-77227074785</p>
                </div >
                <div className="section-right">
                    <form onSubmit={this.handleSubmit}>

                        <p><label>
                            Name:
                            </label>
                            <input type="text" name="name" value={name} onChange={this.handleChange} required /></p>
                        <p><label>
                            Email:
                            </label>
                            <input type="email" name="email" value={email} onChange={this.handleChange} required /></p>
                        <p><label>
                            Message:
                            </label>
                            <textarea name="message" value={message} onChange={this.handleChange} required /></p>








                        <button type="submit">send message</button>

                    </form>

                </div>

            </div >
        );
    }
}

export default Contact

