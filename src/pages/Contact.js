import React, { useState, useEffect } from 'react'


// class based form
export class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}


// hooks based form

export const HooksForm = () => {
    // const [name, setName] = useState('')
    // const handleChangeHooks = (e) => {
    //     console.log(e)
    //     setName(e.target.value)
    // }
    // useEffect(() => {

    //     handleChangeHooks
    //     // return () => {

    //     // }
    // }, [])

    return (
        <h1>Hii</h1>
        // <form >

        // </form>
    )
}

