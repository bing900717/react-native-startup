import React, {Component} from 'react'
import {
    BackHandler,
    View,
    Text,
    Button
} from 'react-native'

import {connect} from 'react-redux'

// Styles
import styles from './Styles/LoginScreen'


class Login extends Component {
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
                <Text style={{color: 'blue'}}>Login Screen</Text>
                <Button title={'test'} onPress={() => this.props.navigation.navigate('HomeScreen')} />
            </View>
        )
    }
}

const mapStateToProps = state => ({

});


const mapDispatchToProps = dispatch => ({

});


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)
