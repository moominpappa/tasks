const Dia = require ('./Ext/Dia/Dia.js')

class WebUiHandler extends Dia.HTTP.Handler {

    get_method_name () {
        let q = this.q
        if (q.part)   return 'get_' + q.part
        if (q.action) return 'do_'  + q.action
        return q.id ? 'get': 'select'
    }

}

class TasksModel extends Dia.DB.Model {

    adjust_table (table) {

        let cols = table.columns
        
        cols.id   = 'int'
        cols.fake = 'int'
        if (table.name != 'task_users' && table.name != 'roles' && table.name != 'user_users' && table.name != 'voc_user_options') cols.uuid = "uuid=uuid_generate_v4()"

        table.pk = 'id'

    }

}

const model = new TasksModel ({path: './Model'})
const db_pool = Dia.DB.Pool ($_CONF.db, model)

Dia.HTTP.listen ((rq, rp) => {

    new WebUiHandler ({
        db_pools     : {db: db_pool},
        http_request : rq, 
        http_response: rp
    })

})