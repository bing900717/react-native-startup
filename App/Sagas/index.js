import { takeLatest, all } from 'redux-saga/effects'
import API from '../Services/Api'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'

/* ------------- Sagas ------------- */

import { startup } from './Startup'


/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = API.create();

export const webApi = {api: api};
/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
    yield all([
        takeLatest(StartupTypes.STARTUP, startup, api),
    ])
}
