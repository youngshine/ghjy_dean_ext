// 课程（大小班，一对多）
Ext.define('Youngshine.view.kclist.Kclist' ,{
	extend: 'Ext.window.Window',
    alias : 'widget.kclist',
	
    requires: [
        'Youngshine.view.kclist.KclistModel',
		'Youngshine.view.kclist.KclistController',
    ],
	
	controller: 'kclist', // links to Youngshine.view.consult.consultController
    viewModel: {
        type: 'kclist'
    },

	autoShow: false,
	closable: true,
	modal: true,
	//resizable: false,
	width: 800,
	height: 500,
	layout: 'fit',

    title : '课程',
	
	//record: null, // 父表参数传递，该学生信息

	fbar: [{	
		xtype: 'combo',
		width: 100,
		//fieldLabel: '课程类型',
		//labelWidth: 55,
		emptyText: '课程类型',
		labelAlign: 'right',
		reference: 'ketype',
		store: {
			fields: ['value'],
			data : [
				{"value":"大小班"},
				{"value":"一对N"},
			]
		},
		valueField: 'value',
		displayField: 'value',
		editable: false,
		//padding: '5 0',
		listeners: {
			change: 'onKctypeChange',
			//scope: 'controller'
		}
	},'->',{
		xtype: 'button',
		text: '＋新增',
		width: 65,
	    handler: 'onAddnewClick'
	},{
		xtype: 'button',
		text: '关闭',
		//scale: 'medium',
		width: 55,
		handler: function(btn){
			btn.up('window').close()
		}
	}],
	
	items: [{
		xtype: 'grid',
		stripeRows: true,
		reference: 'kclistgrid',
		bind: {
			store: '{kclist}'
		},
	    columns: [{
			xtype: 'rownumberer',
			width: 30
		},{	
	         text: '课程名称',
	         flex: 1,
	         //sortable: false,
			 menuDisabled: true,
	         dataIndex: 'title'
	     }, {
			 text: '类型',
	         width: 60,
	         sortable: true,
			 menuDisabled: true,
	         dataIndex: 'kcType'
	     }, {
	         text: '科目',
	         width: 60,
	         //sortable: false,
			 menuDisabled: true,
	         dataIndex: 'kmType' 
	     }, {
	         text: '学段',
	         width: 60,
	         //sortable: false,
			 menuDisabled: true,
	         dataIndex: 'sectionName'
	     }, {
	         text: '单价',
	         width: 100,
	         //sortable: false,
			 menuDisabled: true,
	         dataIndex: 'unitprice',
			 align: 'right',
			 renderer: function(value){
		         if (value == 0) {
		             return '';
		         }
		         return value + '元/时';
		     }
	     }, {
	         text: '课时',
	         width: 60,
	         //sortable: false,
			 menuDisabled: true,
	         dataIndex: 'hour',
			 align: 'center',
			 renderer: function(value){
		         if (value == 0) {
		             return '';
		         }
		         return value;
		     }	 
	     }, {
	         text: '金额',
	         width: 80,
	         //sortable: false,
			 menuDisabled: true,
	         dataIndex: 'amount',
			 align: 'right',
			 renderer: function(value){
		         if (value == 0) {
		             return '';
		         }
		         return value;
		     }
   		},{	 
   			menuDisabled: true,
   			sortable: false,
   			xtype: 'actioncolumn',
   			width: 30,
   			items: [{
   				//iconCls: 'add',
   				icon: 'resources/images/my_plus_icon.png',
   				tooltip: '班级',
   				handler: 'onClassesClick'	
   			}]
  		},{	 
  			menuDisabled: true,
  			sortable: false,
  			xtype: 'actioncolumn',
  			width: 30,
  			items: [{
  				//iconCls: 'add',
  				icon: 'resources/images/my_edit_icon.png',
  				tooltip: '修改',
  				handler: 'onEditClick'	
  			}]
 		},{	  
 			menuDisabled: true,
 			sortable: false,
 			xtype: 'actioncolumn',
 			width: 30,
 			items: [{
                 tooltip: '删除',
                 //iconCls: 'ticket'
				 icon: 'resources/images/my_delete_icon.png',
				 handler: 'onDeleteClick',	
 			}]				 		 
	     }],     
	}],
	
	
	initComponent: function(){
		this.callParent()
		console.log(this.down('grid').getStore())
	}
});