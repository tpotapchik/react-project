import React, { Component } from "react";

const genders = [
    {
        value: "male",
        name: "Male",
    },
    {
        value: "female",
        name: "Female",
    },
    {
        value: "other",
        name: "Other",
    },
];

const countries = [
    {
        value: "blr",
        name: "Беларусь",
    },
    {
        value: "rus",
        name: "Россия",
    },
    {
        value: "ukr",
        name: "Украина",
    },
];

export default class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            lastname: "",
            age: 0,
            gender: genders[0].value,
            country: countries[0].value,
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        alert(
            `${this.state.name}, ${this.state.lastname}, ${this.state.gender}, ${this.state.age}, ${this.state.country}`
        );
    };

    onChangeHandler = (e) => {
        if (e.target.name === "lastname" || e.target.name === "name") {
            this.setState({ [e.target.name]: e.target.value.toUpperCase() });
        } else {
            this.setState({ [e.target.name]: e.target.value });
        }
    };

    onChangeGender = (e) => {
        this.setState({ gender: e.target.value });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Имя:</label>
                <TextInput
                    name="name"
                    value={this.state.name}
                    onHandleChange={this.onChangeHandler}
                />
                <br />
                <label>
                    Фамилия:
                    <input
                        type="text"
                        name="lastname"
                        value={this.state.lastname}
                        onChange={this.onChangeHandler}
                    />
                </label>
                <br />
                <label>
                    Возраст:
                    <input
                        type="number"
                        name="age"
                        value={this.state.age}
                        onChange={this.onChangeHandler}
                    />
                </label>
                <br />
                <label>Пол:</label>
                {genders.map((gender) => (
                    <div key={gender.name}>
                        <input
                            type="radio"
                            id={gender.value}
                            name="gender"
                            value={gender.value}
                            checked={gender.value === this.state.gender}
                            onChange={this.onChangeGender}
                        />
                        <label htmlFor={gender.value}>{gender.name}</label>
                    </div>
                ))}
                <br />
                <label>
                    Выберите вашу страну:
                    <select
                        value={this.state.country}
                        name="country"
                        onChange={this.onChangeHandler}
                    >
                        {countries.map((country) => (
                            <option key={country.value} value={country.value}>
                                {country.name}
                            </option>
                        ))}
                    </select>
                </label>
                <br />
                <br />
                <input type="submit" value="отправить" />
            </form>
        );
    }
}

class TextInput extends Component {
    onHandleChange = (e) => {
        this.props.onHandleChange(e);
    };

    render() {
        return (
            <input
                type="text"
                name={this.props.name}
                value={this.props.value}
                onChange={this.onHandleChange}
            />
        );
    }
}