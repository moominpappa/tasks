define ([], function () {

    $_DO.update_tasks_new = function (e) {
    
        var f = w2ui ['tasks_new_form']

        var v = f.values ()
        
        if (!v.id_user) die ('id_user', 'Укажите, к кому это дело')
        if (!v.label)   die ('label', 'Конкретизируйте, пожалуйста, суть дела')
        
        f.lock ()

        query ({action: 'create'}, {data: v}, function (data) {

            openTab ('/tasks/' + data.uuid)
            
            w2popup.close ()
        
        })
    
    }

    return function (done) {
                    
        done ($('body').data ('data'))
            
    }
    
})