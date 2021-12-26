import {Component} from 'react';

class CheckComponent extends Component {
    state = {
        value : false
    }

    render() {
        const {id} = this.props
        return (
            <>
                <input type="checkbox" value="Male" name="gender" id={id}
                       onChange={e=>this.setState({value: !this.state.value})}
                />

            </>
        );
    }
}

export {CheckComponent};