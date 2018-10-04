import { put } from 'redux-saga/effects'
import StartupActions from '../Redux/StartupRedux'


export function * startup (api, action) {
    let navigate_to = 'LoginScreen';
    yield put(StartupActions.startupComplete(navigate_to))
}
