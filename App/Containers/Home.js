import React, {Component} from 'react'
import {
    BackHandler,
    View,
    Text
} from 'react-native'

import {connect} from 'react-redux'

// Styles
import styles from './Styles/LoginScreen'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            error: '',
            secure: true
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
                <Text>Home Screen</Text>
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
)(Home)

