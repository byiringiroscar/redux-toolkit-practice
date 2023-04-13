const { configureStore } = require('@reduxjs/toolkit');
const cakeReducer = require('../app/features/cake/cakeSlice')
const icecreamReducer = require('./features/icecream/icecreamSlice')
const userReducer = require('../app/features/user/userSlice')
// const reduxLogger = require('redux-logger')


// const logger = reduxLogger.createLogger()

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        user: userReducer,
    },
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

module.exports  = store;