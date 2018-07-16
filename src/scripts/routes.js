import Index from '../modules/index'

const routes = [{
    path: '/',
    redirect: '/index'
}, {
    path: '/index',
    component: Index
}];

export default routes