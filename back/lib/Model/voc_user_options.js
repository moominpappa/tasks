module.exports = {

    label: 'Опции пользователя',

    columns: {
        name     : 'string // Символическое имя',
        roles    : 'string // Имена ролей',
        label    : 'string // Наименование',
        is_own   : 'int=0  // Доступна ли для самостоятельной настройки',
    },

    keys: {
        label    : 'label',
    },

    data: [
        {id: 1, is_own: 1, fake: 0, name: 'no_tabs', label: 'Не открывать новые вкладки при переходах'},
    ],

}