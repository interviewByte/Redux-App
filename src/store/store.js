import { legacy_createStore as createStore} from 'redux'
import myreducer from "../reducer/reducer"

const store = createStore(myreducer)
export default store