Ext.define('Youngshine.store.Consult', {
    extend: 'Ext.data.Store',

    alias: 'store.consult',

    fields: [
		{name: 'consultID'}, 
		{name: 'consultName'}, 
		{name: 'userId'}, //企业号
		{name: 'gender'}, 
		{name: 'phone'}, 
		{name: 'note'}, 
		{name: 'schoolsubID'},
		{name: 'schoolsub'}, // 所属分校区 fullname As schoolsub
		{name: 'schoolID'}, 
		{name: 'schoolName'}
    ],

    proxy: {
        type: 'jsonp',
        //url: '/users.json',
		url: '', //动态
        reader: {
            type: 'json',
            root: 'data'
        }
    },
	
    autoLoad: false,
});
