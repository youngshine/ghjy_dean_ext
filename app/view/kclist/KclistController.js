/**
 * This View Controller is associated with the Login view.
 */
Ext.define('Youngshine.view.kclist.KclistController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.kclist',


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
	
	onEditClick: function(grid, rowIndex, colIndex){
		console.log(grid)
		grid.getSelectionModel().select(rowIndex); // highlight showing selected
		var record = grid.getStore().getAt(rowIndex);
		console.log(record)
		
		this.fireViewEvent('editkclist', this.getView(), record);
	},
	
	onAddnewClick: function(grid, rowIndex, colIndex){
		grid.getSelectionModel().deselectAll(); // 消除
		this.fireViewEvent('addkclist', this.getView());
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
