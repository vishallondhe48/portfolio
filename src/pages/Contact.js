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
            <>
                <div className='contact container'>
                    <div className="section-left box">
                        <h2 className='section-title'>Let's get in touch.</h2>
                    </div>
                    <div className="section-right box">

                        <form onSubmit={this.handleSubmit}>
                            {/* name */}
                            {/* <h2 className='heading'>Contact us</h2> */}
                            <div className="form-grp">
                                <input type="text" name="name" value={name} onChange={this.handleChange} required />
                                <label htmlFor="name">name</label>
                            </div>

                            {/* email */}
                            <div className="form-grp">
                                <input type="email" name="email" value={email} onChange={this.handleChange} required />
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
                        {/* <div className="social-icons">
                            <a href="#"></a>
                        </div> */}
                    </div >

                </div >
            </>
        );
    }
}

export default Contact

