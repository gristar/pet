export default {
    state: {
        page: 1
    },
    mutations: {
        updatePage(state, pageNum) {
            state.page = pageNum
        },
    }
}