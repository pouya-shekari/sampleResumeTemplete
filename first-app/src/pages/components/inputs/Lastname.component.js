import {Component} from 'react';

class LastnameComponent extends Component {
    state = {
        value : ''
    }

    render() {
        const {id} = this.props
        return (
            <>
                <input type="text" id={id} placeholder={'last name'}
                       onChange={e=>this.setState({value:e.target.value})} />
            </>
        );
    }
}

export {LastnameComponent};