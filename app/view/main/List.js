/**
 * This view is an example list of people.
 */
Ext.define('Youngshine.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'Youngshine.store.Consult'
    ],

    title: '咨询师',
	reference: 'consultgrid',
/*
    store: {
        type: 'consult'
    },
*/	
	bind: {
		store: '{consult}'
	},

    columns: [
        { text: '姓名',  dataIndex: 'consultName',menuDisabled:true },
        { text: '手机', dataIndex: 'phone', flex: 1 }
    ],

    listeners: {
        select: 'onItemSelected'
    }
});
