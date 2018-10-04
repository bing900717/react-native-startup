import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'
import { Colors } from '../../Themes'

export default StyleSheet.create({
    ...ApplicationStyles.screen,
    containerStyle: {
        backgroundColor: Colors.background,
        flex: 1,
        paddingTop: 10
    },
})
