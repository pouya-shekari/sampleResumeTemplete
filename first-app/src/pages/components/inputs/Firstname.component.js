import {Component} from 'react';

class FirstnameComponent extends Component {
    state = {
        value : ''
    }

    render() {
        const {id} = this.props
        return (
            <>
                <input type="text" id={id} placeholder={'first name'}
                       onChange={e=>this.setState({value:e.target.value})} />
            </>
        );
    }
}

export {FirstnameComponent};