Ext.define('Youngshine.view.kclist.Edit', {
    extend: 'Ext.window.Window',
    //alias : 'widget.kclist-edit',
	
	controller: 'kclist',
	
    title : '修改课程',
    //layout: 'fit',
	
	width: 400,
	//height: 300,
	
    autoShow: true,
    modal: true,
	resizable: false,
	closable: false,

	items: [{
		xtype: 'form',
		reference: 'editform',
		bodyPadding: 10,
		fieldDefaults: {
			labelWidth: 95,
			labelAlign: 'right',
			anchor: '100%'
		},
		items: [{
			xtype: 'textfield',
			name : 'title',
			fieldLabel: '课程名称',
	        // As a textfield the default property we are binding is "value":
	        bind: '{theKclist.title}'
		},{
			xtype: 'combo',
			name: 'kcType',
			store: {
				fields: ['value'],
				data : [
					{"value":"大小班"},
					{"value":"一对一"}
				]
			},
			valueField: 'value',
			displayField: 'value',
			editable: false,
			fieldLabel: '类型',
			bind: '{theKclist.kcType}'
		},{
			xtype: 'combo',
			name: 'subjectID',
			store: 'Subject',
			valueField: 'subjectID',
			displayField: 'subjectName',
			editable: false,
			fieldLabel: '学科',
			bind: '{theKclist.subjectID}'
		},{
			xtype: 'combo',
			name: 'gradeID',
			store: 'Grade', // Ext.getStore('Grade')
			valueField: 'gradeID',
			displayField: 'gradeName',
			editable: false,
			fieldLabel: '年级',
			bind: '{theKclist.gradeID}'
		},{
			xtype: 'numberfield',
			name : 'unitprice',
			fieldLabel: '一对一单价',
			bind: '{theKclist.unitprice}'
		},{
			xtype: 'numberfield',
			name : 'hour',
			fieldLabel: '班级课时数',
			bind: '{theKclist.hour}'
		},{
			xtype: 'numberfield',
			name : 'amount',
			fieldLabel: '收费金额',
			bind: '{theKclist.amount}'
			
		},{
			xtype: 'hiddenfield',
			name: 'kclistID', //修改的唯一id,隐藏unique
			bind: '{theKclist.kclistID}'
		}],
	}],
	
    fbar : [{
		text: '保存', 
		width: 45,
		action: 'save',
		//scope: this,
		handler: 'onSaveEdit'
	},{
		text: '取消',
		width: 45,
		//scope: this,
		//handler: 'onClose'
        listeners: {
            // Call is routed to our ViewController (Ticket.view.user.UserController) but
            // the "closeView" method is a helper inherited from Ext.app.ViewController.
            click: 'closeView'
        }
	}],	

});