// 咨询师
Ext.define('Youngshine.model.Consult', {
    extend: 'Ext.data.Model',
	
	
    idProperty: 'consultID', // unique for pulling down to refresh
/*	
	schema: {
		namespace: 'Youngshine.model'
	},
*/	
    fields: [
		{name: 'consultID'}, 
		{name: 'consultName'}, 
		{name: 'gender'}, 
		{name: 'userId'}, 
		{name: 'phone'}, 
		{name: 'note'}, 
		{name: 'schoolsubID'},
		{name: 'schoolsub'}, // 所属分校区 fullname
		{name: 'schoolID'}, 
		{name: 'schoolName'},

    ]
});