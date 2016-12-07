Ext.define('Youngshine.store.Subject', {
    extend: 'Ext.data.Store',

    alias: 'store.subject',

    fields: [
		{name: 'subjectID'}, 
		{name: 'subjectName'}, 
    ],

    proxy: {
        type: 'jsonp',
        //url: '/users.json',
		url: 'http://www.xzpt.org/ghjy_dean/script/readSubjectList.php',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
	
    autoLoad: true,
});
