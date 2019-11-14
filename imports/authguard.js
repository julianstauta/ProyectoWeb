import { store } from '../../TFLC/src/store'
export default (to, from, next) => {
    if(store.getters.user){
        next()
    } else{
        next('signin')
    }
}