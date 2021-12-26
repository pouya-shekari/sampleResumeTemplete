import {Component} from 'react';

class EmailComponent extends Component {
    state = {
        value : ''
    }

    render() {
        const {id} = this.props
        return (
            <>
                <input type="email" id={id} placeholder={'E-mail'}
                       onChange={e=>this.setState({value:e.target.value})} />
            </>
        );
    }
}

export {EmailComponent};