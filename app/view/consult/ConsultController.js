/**
 * This View Controller is associated with the Login view.
 */
Ext.define('Youngshine.view.consult.ConsultController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.consult',


    onSpecialKey: function(field, e) {
        if (e.getKey() === e.ENTER) {
            this.doSearch(field.value);
        }
    },
    
    doSearch: function(val) {
        let store = this.lookupReference('consultgrid').store//.getStore();
		//let store = this.getViewModel().getStore('consult')
		console.log(store)
		let reg = new RegExp("/*" + val); // 正则表达式
		store.filter("consultName", reg);       
    },
	
	onDeleteClick: function(grid, rowIndex, colIndex){
		console.log(grid)
		grid.getSelectionModel().select(rowIndex); // highlight showing selected
		var record = grid.getStore().getAt(rowIndex);
		console.log(record)
		grid.getStore().removeAt(rowIndex)
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
