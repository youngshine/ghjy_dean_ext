/**
 * This View Controller is associated with the Login view.
 */
Ext.define('Youngshine.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login',
    
    loginText: 'Logging in...',

    onSpecialKey: function(field, e) {
        if (e.getKey() === e.ENTER) {
            this.doLogin();
        }
    },
    
    onLoginClick: function() {
        this.doLogin();
    },
    
    doLogin: function() {
        var me = this
		var form = this.lookupReference('form');
        
        if (form.isValid()) {
            Ext.getBody().mask(this.loginText);
/*
            if (!this.loginManager) {
                this.loginManager = new Youngshine.LoginManager({
                    session: this.getView().getSession(),
                    //model: 'User'
                });
            }
*/
	        console.log(Ext.JSON.encode(form.getValues()))
			Ext.data.JsonP.request({
	            url: Youngshine.getApplication().dataUrl + 'login.php', 
	            callbackKey: 'callback',
	            params:{
	                data: JSON.stringify(form.getValues())
	            },
	            success: function(result){
	                Ext.getBody().unmask()
					console.log(result)
					if(result.success){
						//console.log(result.data) //密码问题
						//localStorage.setItem('isLogin',true);
						localStorage.setItem('schoolName',result.data.schoolName); //加盟校区
						localStorage.setItem('schoolID',result.data.schoolID);
	
						me.getView().destroy()
						// 跳转页面 main
				        me.viewport = new Youngshine.view.main.Main({
				            session: me.session,
				            viewModel: {
				                data: {
				                    //currentOrg: this.organization,
				                    //currentUser: this.user
				                }
				            }
				        });
	                }else{
					    //Ext.Msg.alert('提示',result.message); me.getLogin()
						//oldWin.down('label[itemId=error]').setText(result.message)
						Ext.toast({
						     html: 'Data Saved',
						     title: 'My Title',
						     width: 200,
						     align: 't'
						 });
	                }
	            },
	            failure: function(result){
	                //Ext.Msg.alert('提示','服务请求失败！');
					//oldWin.down('label').setText('服务请求失败！')
	            }
	        });
        }
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
