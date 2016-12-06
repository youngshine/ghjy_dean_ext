Ext.define('Youngshine.view.login.Login', {
    extend: 'Ext.window.Window',
    
    requires: [
        'Youngshine.view.login.LoginController',
        'Youngshine.view.login.LoginModel',
        'Ext.form.Panel',
        'Ext.button.Button',
        'Ext.form.field.Text',
        'Ext.form.field.ComboBox'
    ],
    
    viewModel: 'login',
    
    controller: 'login',
    bodyPadding: 10,
    title: '校长财务端',
    closable: false,
    
    //cls: 'login',
    
    items: {
        xtype: 'form',
        reference: 'form',
        items: [{
            xtype: 'textfield',
            name: 'school',
            bind: '{schoolName}',
            fieldLabel: '联盟学校',
            allowBlank: false,
            enableKeyEvents: true,
            listeners: {
                specialKey: 'onSpecialKey'
            }
        }, {
            xtype: 'textfield', value: '123456',
            name: 'psw',
            inputType: 'password',
            fieldLabel: '密码',
            allowBlank: false,
            enableKeyEvents: true,
            cls: 'password',
            listeners: {
                specialKey: 'onSpecialKey'
            }
        }]
    },

    buttons: [{
        text: '登录',
        listeners: {
            click: 'onLoginClick'
        }
    }]
});
