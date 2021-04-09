const Controller = require('../Controller');

class TerminalApiController extends Controller {
    async getDepartmentAdderss(ctx, next) {
        const terminalService = this.getService('terminal')
        let departmentAddressListsFilteredColumns = []

        terminalService.departmentAddressLists.forEach((departmentAddress) => {
            departmentAddressListsFilteredColumns.push({
                name: departmentAddress.name,
                key: departmentAddress.key,
                host: departmentAddress.host
            })
        })
        ctx.body = {
            data: {
                departmentAddressLists: departmentAddressListsFilteredColumns
            }
        };
    }

    async setDepartmentDB(ctx, next) {
        const req = ctx.request
        const { departmentKey } = req.body;
        const terminalService = this.getService('terminal')
        const turnService = this.getService('turn')
        const dbconfig = terminalService.getDepartmentAddressByKey(departmentKey)
        await terminalService.knexChange(dbconfig)
        await terminalService.setCurrentDepartment(departmentKey)

        ctx.body = {
            message: 'set department changed',
            data: {
                success: true
            }
        };
    }
}

module.exports = new TerminalApiController();
