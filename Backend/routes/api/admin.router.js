const AdminBro = require('admin-bro')
const AdminBroExpress = require('@admin-bro/express')
const AdminBroMongoose = require('@admin-bro/mongoose')

const mongoose = require('mongoose')

AdminBro.registerAdapter(AdminBroMongoose)

const adminBro = new AdminBro({
    databases: [mongoose],
    rootPath: '/admin',
})

const ADMIN = {
    email: process.env.ADMIN_EMAIL || 'aapeftpadmin@ucl.ac.uk',
    password: process.env.ADMIN_PASSWORD || 'S@ecureP/@ss.word',
}

const router = AdminBroExpress.buildAuthenticatedRouter(adminBro,{
    cookieName: process.env.ADMIN_COOKIE_NAME || 'admin-bro',
    cookiePassword: process.env.ADMIN_COOKIE_PASS || 'supersecret-and-long-password-for-a-cookie-in-the-browser',
    authenticate: async (email, password) => {
        if (email === ADMIN.email && password === ADMIN.password) {
            return ADMIN
        }
        return null
    }
});

module.exports = router;
//