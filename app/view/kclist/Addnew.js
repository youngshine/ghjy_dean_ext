Ext.define('Youngshine.view.kclist.Addnew', {
    extend: 'Ext.window.Window',
    //alias : 'widget.kclist-new',
	
	controller: 'kclist',

    title : '新增课程',
    //layout: 'fit',
	
	width: 400,
	//height: 300,
	modal: true,
    autoShow: true,
	resizable: false,
	closable: false,
	
	items: [{
		xtype: 'form',
		reference: 'addnewform',
		bodyPadding: 10,
		fieldDefaults: {
			labelWidth: 95,
			labelAlign: 'right',
			anchor: '100%'
		},
		items: [{
			xtype: 'textfield',
			name : 'title',
			fieldLabel: '课程名称'
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
			fieldLabel: '类型'
		},{
			xtype: 'combo',
			name: 'subjectID',
			store: 'Subject',
			valueField: 'subjectID',
			displayField: 'subjectName',
			editable: false,
			fieldLabel: '学科',
		},{
			xtype: 'combo',
			name: 'gradeID',
			store: 'Grade', // Ext.getStore('Grade')
			valueField: 'gradeID',
			displayField: 'gradeName',
			editable: false,
			fieldLabel: '年级',
		},{
			xtype: 'numberfield',
			name : 'unitprice',
			fieldLabel: '一对一单价',
			value: 0
		},{
			xtype: 'numberfield',
			name : 'hour',
			fieldLabel: '班级课时数',
			value: 0
		},{
			xtype: 'numberfield',
			name : 'amount',
			fieldLabel: '班级收费金额',
			value: 0
		},{
			xtype: 'textfield',
			name: 'note',
			fieldLabel: '备注',
			hidden: true
			
		},{
			xtype: 'hiddenfield',
			name: 'schoolID', //school
			bind: '{schoolID}'
		}],
	}],
	
    fbar : [{
		text: '保存', 
		width: 45,
		action: 'save',
		//scope: this,
		handler: 'onSaveAddnew'
	},{
		text: '取消',
		width: 45,
		//scope: this,
		handler: 'closeView'
	}],	
   
	onSave: function(){
		var me = this;
		var title = this.down('textfield[name=title]').getValue().trim(),
			kcType = this.down('combo[name=kcType]').getValue(),
			kmType = this.down('combo[name=kmType]').getValue(),
			sectionName = this.down('combo[name=sectionName]').getValue(),
			unitprice = this.down('numberfield[name=unitprice]').getValue(),
			hour = this.down('numberfield[name=hour]').getValue(),
			amount = this.down('numberfield[name=amount]').getValue()
		
		if (title == ''){
			Ext.Msg.alert('提示','课程名称不能空白');
			return;
		}
		if (kcType == null){
			Ext.Msg.alert('提示','请选择课程类型');
			return;
		}
		if (kmType == null){
			Ext.Msg.alert('提示','请选择学科类别');
			return;
		}
		if (sectionName == null){
			Ext.Msg.alert('提示','请选择学段！');
			return;
		}
		if (unitprice==0 && hour==0 ){
			Ext.Msg.alert('提示','请输入一对一单价或课时数');
			return;
		}	
		if (unitprice != 0 && hour != 0 ){
			Ext.Msg.alert('提示','不能同时输入单价和课时数');
			return;
		}	
		
		var obj = {
			"title": title,
			"kcType": kcType,
			"kmType": kmType,
			"sectionName": sectionName,
			"unitprice": unitprice,
			"hour": hour,
			"amount": amount,
			"schoolID": localStorage.schoolID
		};
		console.log(obj);

		Ext.Msg.confirm('询问','是否新增保存？',function(id){
			if( id == "yes"){
				me.fireEvent('save',obj,me); //后台数据判断，才能关闭  本窗口win
			}
		})
	}
});