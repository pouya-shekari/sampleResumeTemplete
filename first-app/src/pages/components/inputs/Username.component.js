import {Component} from 'react';

class UsernameComponent extends Component {

    state = {
        value : ''
    }

    render() {
        const {id} = this.props
        return (
            <>
                <input type="text" id={id} placeholder={'username'}
                onChange={e=>this.setState({value:e.target.value})} />
            </>
        );
    }
}

export {UsernameComponent};