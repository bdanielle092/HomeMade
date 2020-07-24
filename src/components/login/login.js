import React, {useState} from "react";

const login = props => {
    const [credentials, setCredentails] = useState({username: "" password: ""});

    // updates state whenever an input is edited
    const handleFieldChange = (evt) => {
        const stateToChange = {...credentials};
        stateToChange[evt.target.id] = evt.target.value;
        setCredentails(stateToChange)
    };

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(crendentials);
        props.setUser(credentials);
    }

    return (
        <form onSubmit={handleLogin}>

        <fieldset>
            <h3>Please sign in </h3>

            <div className="formgrid">
                <input onChange={handleFieldChange}
                type="username"
                id="username"
                placeholder="username"
                required=""
                autoFocus=""/>
                <label htmlFor="inputUsername">Username</label>

                <input onChange={handleFieldChange}
                type="password"
                id="password"
                placeholder="password"
                required
                autoFocus=""/>
                <label htmlFor="inputPassword">Password</label>   
            </div>

            <button type="submit">Login</button>
    
        </fieldset>
        </form>
    );
};

export default login