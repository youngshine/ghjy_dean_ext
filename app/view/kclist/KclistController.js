/**
 * This View Controller is associated with the Login view.
 */
Ext.define('Youngshine.view.kclist.KclistController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.kclist',

	// input to search
    onSpecialKey: function(field, e) {
        if (e.getKey() === e.ENTER) {
            this.doSearch(field.value);
        }
    },
	
	onKctypeChange: function(cb,newValue,oldValue){
		console.log(newValue)
		let store = this.lookupReference('kclistgrid').store
		//let store = this.getViewModel().getStore('kclist')
		//store.load()
		console.log(store)
		store.filter("kcType", newValue);
	},

	onAddnewClick: function(){
		var me = this
		let grid = this.lookupReference('kclistgrid')
		grid.getSelectionModel().deselectAll(); // 消除
		//this.fireViewEvent('addkclist', this.getView());
		//this.addnewkclist()
		
        var win = Ext.create('Youngshine.view.kclist.Addnew',{
            viewModel: {
                data: {
                    schoolID: localStorage.schoolID,
					
					store: me.getViewModel().getStore('kclist')
                },
            }
        })

        win.show();
	},
		
	onEditClick: function(grid, rowIndex, colIndex){
		console.log(grid)
		grid.getSelectionModel().select(rowIndex); // highlight showing selected
		var record = grid.getStore().getAt(rowIndex);
		console.log(record)
		
		//this.fireViewEvent('editkclist', this.getView(), record);
		//this.editkclist(record)
		
        //var win = new Ticket.view.user.User({
		var win = Ext.create('Youngshine.view.kclist.Edit',{
            viewModel: {
                data: {
                    theKclist: record
                }
            }
        });

        win.show();
	},
	
	onDeleteClick: function(grid, rowIndex, colIndex){
		console.log(grid)
		grid.getSelectionModel().select(rowIndex); // highlight showing selected
		var record = grid.getStore().getAt(rowIndex);
		console.log(record)
		grid.getStore().removeAt(rowIndex)
	},
	
	// 课程的班级
	onClassesClick: function(grid, rowIndex, colIndex){
		grid.getSelectionModel().select(rowIndex); // highlight showing selected
		var record = grid.getStore().getAt(rowIndex);
		console.log(record)
		
		var obj = {
			"kclistID": record.get('kclistID')
		}
		console.log(obj)
        Ext.data.JsonP.request({
            url: Youngshine.getApplication().dataUrl + 'readClassesListByKclist.php', 
            callbackKey: 'callback',
            params:{
                data: JSON.stringify(obj)
            },
            success: function(result){
                if(result.success){
					console.log(result.data)
					var arr = result.data,
						title = ''
					for(var i=0;i<arr.length;i++)
						title += (i+1) + '、' + arr[i].title + 
							'：' + arr[i].enroll +' / '+ arr[i].persons +'<br>';
					Ext.MessageBox.alert('开设班级',title)
                }
            },
        });
	},

	// 新增保存
	onSaveAddnew: function(){
		var me = this;
		var form = this.lookupReference('addnewform')
		console.log(me.getViewModel().data.store)
		
		var obj = form.getValues(); 
		//obj.schoolID = localStorage.schoolID
		console.log(obj)
		
		return
		//this.fireViewEvent('createkclist', this.getView(), obj);
		
		Ext.MessageBox.show({
		   msg: '正在保存',
		   width: 300,
		   wait: true,
		   waitConfig: {interval:200},
		});
		Ext.Ajax.request({
            url: this.getApplication().dataUrl + 'createKclist.php',
            params: obj,
            success: function(response){
				Ext.MessageBox.hide(); 
				var ret = JSON.parse(response.responseText)
				if(ret.success){
					obj.kclistID = ret.data.kclistID; // model数组添加项目
					let store = me.getViewModel().data.store
					store.insert(0,obj); //新增记录，排在最前面
					me.getView().close(); //成功保存才关闭窗口
				}else{		
					Ext.Msg.alert('提示',ret.message);
				}	
			},
			failure: function(response){
				Ext.MessageBox.hide();
				Ext.Msg.alert('网络错误','服务请求失败');
			}
        });
	},
	
	// 修改保存
	onSaveEdit: function(){
		var me = this;
		var form = this.lookupReference('editform')
		console.log(form.getValues())

		Ext.MessageBox.show({
		   msg: '正在保存...',
		   width: 300,
		   wait: true,
		   waitConfig: {interval:200},
		});
		Ext.Ajax.request({
            url: Youngshine.getApplication().dataUrl + 'updateKclist.php',
            //callbackKey: 'callback',
            params: form.getValues(),
            success: function(response){
				Ext.MessageBox.hide();
				var ret = JSON.parse(response.responseText)
				if(ret.success){
					// 更新前端store
					//let model = form.getRecord(); console.log(model)
					//model.set(form.getValues()) 
					
					me.getView().close();
				}else{	
					Ext.Msg.alert('提示',ret.message);
				}	
			},
			failure: function(response){
				Ext.MessageBox.hide();
				Ext.Msg.alert('网络错误','服务请求失败');
			}
        });
	},
    
    onLoginFailure: function() {
        // Do something
        Ext.getBody().unmask();
    },

    onLoginSuccess: function(user) {
        Ext.getBody().unmask();

        var org = this.lookupReference('organization').getSelectedRecord();
        this.fireViewEvent('login', this.getView(), user, org, this.loginManager);
    }
});
