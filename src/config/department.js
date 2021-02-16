module.exports = {
    default: process.env.DEFAULT_FILIAL,
    departmentLists: [
        {
            key: 'isfana',
        },
        {
            name: 'Филиал Кадамжай',
            key: 'kadamjai',
            db: {
                'username': 'admin',
                'password': '1',
                'database': 'rskbank',
                'host': '10.250.149.90',
                'port': '3306',
                'dialect': 'mysql2',
            }
        },
        {
            name: 'Филиал Ноокат',
            key: 'nookat',
            db: {
                'username': 'admin',
                'password': '1',
                'database': 'rskbank',
                'host': '10.250.147.80',
                'port': '3306',
                'dialect': 'mysql2',
            }
        },
        {
            key: 'talas',
        },
        {
            key: 'tokmok',
        },
        {
            key: 'belovod',
        },
        {
            key: 'chui',
        },
        {
            key: 'cholponAta',
        },
    ],
}
