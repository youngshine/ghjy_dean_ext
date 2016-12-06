Ext.define('Youngshine.view.consult.Consult' ,{
    //extend: 'Ext.grid.Panel',
	extend: 'Ext.window.Window',
    //alias : 'widget.consult-list',
	
    requires: [
        'Youngshine.view.consult.ConsultModel',
		'Youngshine.view.consult.ConsultController',
    ],
	
	controller: 'consult', // links to Youngshine.view.consult.consultController
    viewModel: {
        type: 'consult'
    },
	
	closable: true,
	modal: true,
    autoShow: false,
	//resizable: false,
	width: 800,
	height: 500,
	layout: 'fit',

    title : '咨询师列表',
	
	fbar: [{
		xtype: 'textfield',
		itemId : 'search',
		width: 100,
		//fieldLabel: '筛选',
		//labelWidth: 30,
		//labelAlign: 'right',
		emptyText: '搜索...',
        enableKeyEvents: true,
        listeners: {
            specialKey: 'onSpecialKey'
        }

	},'->',{
		xtype: 'button', disabled: true,
		text: '＋新增',
		width: 65,
	    handler: function(btn){
			btn.up('window').onNew(); //onAdd是系统保留reserved word
	    }
	},{
		xtype: 'button',
		text: '关闭',
		width: 65,
	    handler: function(btn){
			btn.up('window').close();
	    }
	}],

	items: [{
		xtype: 'grid',
		stripeRows: true,
		reference: 'consultgrid',
		bind: {
			store: '{consult}'
		},
	    columns: [{
			xtype: 'rownumberer',
			width: 30
		},{	
			 text: '姓名',
	         width: 100,
	         sortable: true,
			 menuDisabled: true,
	         dataIndex: 'consultName'
	     }, {
			 text: '',
	         width: 40,
	         sortable: true,
			 menuDisabled: true,
	         dataIndex: 'gender',
			 align: 'center'
	     }, {
			 text: '电话',
	         width: 100,
	         sortable: true,
			 menuDisabled: true,
	         dataIndex: 'phone'
	     }, {
	         text: '备注',
	         width: 150,
	         //sortable: false,
			 menuDisabled: true,
	         dataIndex: 'note'
	     }, {
	         text: '分校区',
	         flex: 1,
	         //sortable: false,
			 menuDisabled: true,
	         dataIndex: 'schoolsub'
 		},{	 
 			menuDisabled: true,
 			sortable: false,
 			xtype: 'actioncolumn',
 			width: 30,
 			items: [{
 				//iconCls: 'add',
 				icon: 'resources/images/my_edit_icon.png',
 				tooltip: '修改',
 				handler: function(grid, rowIndex, colIndex) {
 					grid.getSelectionModel().select(rowIndex); // highlight showing selected
 					var rec = grid.getStore().getAt(rowIndex);
 					grid.up('window').onEdit(rec); 
 				}	
 			}]
		 },{
 			menuDisabled: true,
 			sortable: false,
			 xtype: 'actioncolumn',
             width: 30,
             //handler: 'onDeleteClick',
             items: [{
                 tooltip: '删除',
                 //iconCls: 'ticket'
				 icon: 'resources/images/my_delete_icon.png',
				 handler: 'onDeleteClick',
             }]	  
						 		 
	     }],  
		 
	     listeners: {
	         //select: 'onItemSelected'
	     }   
	}],
	
	onNew: function(){ 
		this.down('grid').getSelectionModel().deselectAll();
		this.fireEvent('addnew');
	},
	onEdit: function(rec){ 
		this.fireEvent('edit',rec);
	},

	onDelete: function(rec){
		var me = this;
		console.log(rec);
		Ext.Msg.confirm('提示','是否删除当前行？',function(btn){
			if(btn == 'yes'){
				me.fireEvent('del',rec);
			}
		});
	},
	
	onFilter: function(val){
		var me = this; 
		var value = new RegExp("/*" + val); // 正则表达式
		var store = this.down('grid').getStore();
		store.clearFilter(); // filter is additive
		store.filter("consultName", value);
	}
});