import immutablePersistenceTransform from '../Services/ImmutablePersistenceTransform'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1'

export default  {
    active: true,
    reducerVersion: '0.1',
    storeConfig: {
        key: 'root',
        storage: storage,
        blacklist: ['nav'],
        whitelist: ['login'],
        stateReconciler: autoMergeLevel1,
        transforms: [immutablePersistenceTransform]
    }
};
