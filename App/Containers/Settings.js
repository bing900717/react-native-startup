import React, {Component} from 'react'
import {
    BackHandler,
    View,
    Text
} from 'react-native'

import {connect} from 'react-redux'

// Styles
import styles from './Styles/LoginScreen'

class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', () => {
            this.props.navigation.pop();
            return true
        })
    }

    render() {
        return (
            <View style={styles.containerStyle}>
                <Text>Settings Screen</Text>
            </View>
        )
    }
}

const mapStateToProps = state => ({
    // fetching: state.login.fetching,
});


const mapDispatchToProps = dispatch => ({

});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Settings)

