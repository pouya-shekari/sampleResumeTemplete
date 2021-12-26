import  React , {Component} from 'react';
import {FirstnameComponent} from "./inputs/Firstname.component";
import {LastnameComponent} from "./inputs/Lastname.component";
import {UsernameComponent} from "./inputs/Username.component";
import {EmailComponent} from "./inputs/Email.component";
import "assets/Form.style.css"

class FormComponent extends Component {
    constructor(props) {
        super(props);
        this.firstName = React.createRef();
        this.lastName = React.createRef();
        this.username = React.createRef();
        this.email = React.createRef();

    }

    handleClick = () => {
        const firstName = this.firstName.current;
        const lastName = this.lastName.current;
        const username = this.username.current;
        const email = this.email.current;
        console.log("first name: "+ firstName.state.value + '\n' +
            "last name: "+lastName.state.value + '\n' +
            "username: " + username.state.value + '\n' +
            "email: " + email.state.value
        );

    };

    render() {

        return (
                <form className={"form"}>
                    <UsernameComponent ref={this.username}  id={"username"} />
                    <div className={"name"}>
                        <FirstnameComponent ref={this.firstName}  id={"firstName"} />
                        <LastnameComponent ref={this.lastName}  id={"lastName"} />
                    </div>
                    <EmailComponent ref={this.email}  id={"email"} />
                    <button id={"submit"} onClick={this.handleClick}>Sign up
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right"
                             className="svg-inline--fa fa-arrow-right fa-w-14" role="img"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style={{color: "white" , width:"1.5rem" , marginLeft:"18rem"}}>
                            <path fill="currentColor"
                                  d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                        </svg>
                        </button>
                </form>
        );
    }
}

export {FormComponent};