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
            .then(() => this.setState({ name: "", email: "", message: "" }))
            .catch(error => alert(error));

        e.preventDefault();
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        const { name, email, message } = this.state;
        return (
            <>
                <div className='contact container' id='contact'>
                    <div className="section-left box">
                        <h2 className='section-title'>Let's get in touch.</h2>
                    </div>
                    <div className="section-right box">

                        <form onSubmit={this.handleSubmit}>
                            {/* name */}
                            <div className="form-grp">
                                <input type="text" name="name" value={name} onChange={this.handleChange} required
                                />
                                <label htmlFor="name">name</label>
                            </div>

                            {/* email */}
                            <div className="form-grp">
                                <input type="email" name="email" value={email} onChange={this.handleChange} required
                                />
                                <label htmlFor="email">email</label>
                            </div>

                            {/* message */}
                            <div className="form-grp">
                                <textarea name="message" cols="30" rows="3" value={message} onChange={this.handleChange} required />
                                <label htmlFor="message">message</label>
                            </div>

                            {/* submit */}
                            <button type="submit" className='btn'>send</button>

                        </form>

                    </div >

                </div >
            </>
        );
    }
}

export default Contact

