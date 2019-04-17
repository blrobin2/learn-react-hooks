import React from 'react';

import useForm from './useForm';

export default function Form(): JSX.Element {

    function login(formData: FormData): void {
        console.log([...formData])
    }

    const {
        values: { email, password },
        handleChange,
        handleSubmit
    } = useForm({
        email: "",
        password: ""
    }, login);

    return (
        <div className="section is-fullheight">
            <div className="container">
                <div className="column is-4 is-offset-4">
                    <div className="box">
                        <form onSubmit={handleSubmit}>
                            <div className="field">
                                <label htmlFor="email" className="label">Email Address</label>
                                <div className="control">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="input"
                                        autoComplete="username"
                                        onChange={handleChange}
                                        value={email}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <label htmlFor="password" className="label">Password</label>
                                <div className="control">
                                    <input
                                        type="password"
                                        className="input"
                                        name="password"
                                        id="password"
                                        autoComplete="current-password"
                                        onChange={handleChange}
                                        value={password}
                                        required
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="button is-block is-info is-fullwidth">
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}