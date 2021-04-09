const departmentsConfig = require('../../DEPARTMENTS_CONFIG.json')
let departmentsLists = []

departmentsConfig.forEach((department) => {
    departmentsLists.push({
        ...department,
        username: 'admin',
        password: '1',
        database: 'rskbank',
        port: '3306',
        dialect: 'mysql2',
    })
})

module.exports = {
    departmentsLists
}
