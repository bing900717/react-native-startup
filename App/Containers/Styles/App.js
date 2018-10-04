import { StyleSheet } from 'react-native'
import { Fonts, Metrics, Colors } from '../../Themes/'

export default StyleSheet.create({
    applicationView: {
        flex: 1,
        backgroundColor: Colors.background
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: Colors.background
    },
    startupContainer: {
        flex: 1,
        backgroundColor: Colors.background,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        alignSelf: 'center',
        resizeMode: 'contain'
    }
})
