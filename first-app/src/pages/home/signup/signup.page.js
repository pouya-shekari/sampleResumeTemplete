import {Component} from 'react';
import {FormComponent} from "../../components/Form.component";
import {CheckComponent} from "../../components/inputs/Check.component";
import "assets/style.css"
class SignupPage extends Component {
    render() {
        return (
            <div className={"container"}>
                <h1>Create account</h1>
                <div className={"txt"}>Already have an account? <a href="#">Sign in</a></div>
                <FormComponent />
                <div className={"terms"}>
                    <CheckComponent id={"check"} />
                    <div className={"txt txt2"}>I have read and agree to the <a href="#">Terms of Service</a></div>
                </div>
            </div>
        );
    }
}

export {SignupPage};