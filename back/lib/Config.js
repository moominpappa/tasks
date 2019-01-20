const fs         = require ('fs')
const nodemailer = require ('nodemailer')
const Dia        = require ('./Ext/Dia/Dia.js')

module.exports = class {

    constructor () {

        const conf = JSON.parse (fs.readFileSync ('../conf/elud.json', 'utf8'))

        for (let k in conf) this [k] = conf [k]
        
        this.check_pics () 
        this.setup_mail () 
        this.setup_db   () 
        
    }
    
    check_pics () {

        if (!this.pics) throw 'conf.pics is not defined'

        if (!fs.statSync (this.pics).isDirectory ()) throw conf.pics + 'is not a direcory'

    }
    
    setup_mail () {
    
        let mail = this.mail
    
        let from = mail.from
        
        from.name = from.label
        
        this.mail_pools = {mail: nodemailer.createTransport (mail, {from})}
    
    }

    setup_db () {
    
        let model = new (require ('./Model.js')) ({path: './Model'})

        this.db_pools = {db: Dia.DB.Pool (this.db, model)}

    }

}