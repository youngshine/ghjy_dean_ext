Ext.define('Youngshine.view.main.Main', {
    extend: 'Ext.container.Viewport',
    requires: [
        'Ext.layout.container.Border',
		//'Youngshine.model.*',
        //'Ticket.view.dashboard.Dashboard',
        //'Ticket.view.ticket.Detail',
        //'Ticket.view.ticket.Search',
		'Youngshine.view.main.Nav',
        'Youngshine.view.main.MainController',
        'Youngshine.view.main.MainModel',
        //'Youngshine.view.consult.Consult',
		//'Youngshine.view.kclist.Kclist',
    ],

    controller: 'main',
    viewModel: {
        type: 'main'
    },

    layout: 'border',
    
    items: [{
        xtype: 'container',
        //id: 'app-header',
        region: 'north',
        height: 52,
        layout: {
            type: 'hbox',
            align: 'middle'
        },
		style: {
			background: '#576b95',
			color: '#fff'
		},

        items: [{
            xtype: 'component',
            //cls: 'app-header-text',
            //bind: '{currentOrg.name}',
			html: '校长财务端',
            flex: 1,
			margin: '0 10 0 10'
        },{
            xtype: 'component',
            //id: 'app-header-username',
            //cls: 'app-header-text',
            //bind: '{currentUser.name}',
			html: '林先生',
            listeners: {
                click: 'onClickUserName',
                element: 'el'
            },
            margin: '0 10 0 10'
        }]
    }, {
        region: 'west',
        xtype: 'nav',
        reference: 'nav',
        //title: 'Projects',
        width: 250,
        //split: true,
        //collapsible: true,
  
    }, {
        region: 'center',
		//title: '新课堂教育－－理科提分智能系统',
	    layout: {
	        //type: 'vbox',
			//align: 'center',
			//pack: 'center'
	    },
		bodyStyle: {
            //background: 'center',
			backgroundImage: 'url(resources/images/bg.jpg)',
			backgroundRepeat:'no-repeat',
			//backgroundColor: '#f9f9f9',
			backgroundPosition: 'left top',
			//backgroundSize: '100% 100%',
			backgroundSize: '100% 100%', 
			border: 0                 
		},
		//xtype: 'register-form',
        //xtype: 'tabpanel',
        //items:[{
        //    title: 'Center Tab 1'
			//xtype: 'login-form',
		//}]
    }]
});
