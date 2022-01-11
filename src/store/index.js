import { createStore } from 'vuex'
import axios from "axios"

// Vuex Erklärung -> https://vuex.vuejs.org/guide/#the-simplest-store

export default createStore({
    state: {
        status: '',
        accessToken: localStorage.getItem('accessToken') || '',
        user: {},
        timetable: [],
        homework: [],
    },
    getters: {
        isLoggedIn: state => !!state.accessToken,
        authStatus: state => state.status,
        getTimetable: state => state.timetable,
        getHomework: state => state.homework
    },
    mutations: {
        auth_request(state) {
            state.status = 'loading'
        },
        auth_success(state, user) {
            state.status = 'success'
            if (user) {
                state.user = user.user
                state.accessToken = user.accessToken
                localStorage.setItem('accessToken', user.accessToken)
                localStorage.setItem('refreshToken', user.refreshToken)
                axios.defaults.headers.common['Authorization'] = user.accessToken
            }
        },
        auth_error(state, message) {
            if (message) {
                state.status = message
            } else {
                state.status = 'error'
            }
        },
        logout(state) {
            state.status = '',
                state.accessToken = ''
        },
        renewToken(token) {
            localStorage.setItem('accessToken', token)
        },
        viewTimetable(state, timetable) {
            state.timetable = timetable
        },
        loadHomework(state, homework) {
            state.homework = homework
        },
        addHomework(state, homework) {
            state.homework.push(homework)
        }
    },
    actions: {
        login({ commit }, user) {
            return new Promise((resolve, reject) => {
                commit('auth_request')
                axios({ url: 'http://localhost:3000/signin', data: user, method: 'POST' })
                    .then((response) => {
                        if (response.data.status === 'success') {
                            const user = response.data
                            commit('auth_success', user)
                        } else if (response.data.status === 'error') {
                            commit('auth_error')
                        }

                        resolve(response)
                    })
                    .catch(err => {
                        commit('auth_error')
                        reject(err)
                    })
            })
        },
        logout({ commit }) {
            commit('logout')
            localStorage.removeItem('accessToken')
            localStorage.removeItem('refreshToken')
            delete axios.defaults.headers.common['Authorization']
        },
        renewToken({ commit }, refreshToken) {
            commit('auth_request')
            axios({ url: 'http://localhost:3000/token', data: { refreshToken }, method: 'POST' })
                .then((response) => {
                    if (response.data.status === 'success') {
                        let token = response.data.accessToken
                        commit('renewToken', token)
                    }
                })
        },
        viewTimetable({ commit }, user) {
            commit('auth_request')
            axios({ url: 'http://localhost:3000/untis', data: { user: user }, method: 'GET' })
                .then((response) => {
                    if (response.data.status === 'success') {
                        const timetable = response.data.data
                        commit('viewTimetable', timetable)
                        commit('auth_success')
                    }

                })
                .catch(err => {
                    if (err.response.status === 401) {
                        commit('auth_error', 'unauthorized')
                    } else {
                        commit('auth_error', err)
                    }
                })

        },

        loadHomework({ commit }) {
            commit('auth_request')
            axios({ url: 'http://localhost:3000/homework', method: 'GET' })
                .then((response) => {
                    if (response.data.status === 'success') {
                        const homework = response.data.data
                        commit('loadHomework', homework)
                        commit('auth_success')
                    }

                })
                .catch(err => {
                    if (err.response.status === 401) {
                        commit('auth_error', 'unauthorized')
                    } else {
                        commit('auth_error', err)
                    }
                })
        },
        addHomework({ commit }, homework) {
            console.log(homework);
            commit('auth_request')
            axios({ url: 'http://localhost:3000/homework', data: { homework }, method: 'POST' })
                .then((response) => {
                    if (response.data.status === 'success') {
                        const homework = response.data.data
                        commit('addHomework', homework)
                        commit('auth_success')
                    }
                })
                .catch(err => {
                    if (err.response.status === 401) {
                        commit('auth_error', 'unauthorized')
                    } else {
                        commit('auth_error', err)
                    }
                })
        },

    },
})
