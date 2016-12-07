Ext.define('Youngshine.store.Grade', {
    extend: 'Ext.data.Store',

    alias: 'store.grade',

    fields: [
		{name: 'gradeID'}, 
		{name: 'gradeName'}, 
    ],

    proxy: {
        type: 'jsonp',
        //url: '/users.json',
		url: 'http://www.xzpt.org/ghjy_dean/script/readGradeList.php',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
	
    autoLoad: true,
});
