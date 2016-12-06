Ext.define('Youngshine.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',
	
	onMenuitemClick: function(e){
		console.log(e.target.title)
		let me = this,
			win
		let menuitem = e.target.title
		switch(menuitem){
		case 'consult':
	        //win = new Youngshine.view.consult.Consult({
			win = Ext.create('Youngshine.view.consult.Consult',{	            
				viewModel: {
	                data: {
	                    schoolID: localStorage.schoolID
	                },
					stores: {
						consult: {
				            model: 'Youngshine.model.Consult',
				            autoLoad: true,
							proxy: {
								type: 'jsonp',
								url: 'http://www.xzpt.org/ghjy_dean/script/readConsultList.php?data={"schoolID":{schoolID}}',
						        reader: {
						            type: 'json',
						            rootProperty: 'data'
						        }
							}
				        },
					}
	            } 
	        });					
			break;
		case 'kclist':
	        //win = new Youngshine.view.kclist.Kclist({});	
			win = Ext.create('Youngshine.view.kclist.Kclist',{
				viewModel: {
	                data: {
	                    schoolID: localStorage.schoolID
	                },
					stores: {
						kclist: {
				            model: 'Youngshine.model.Kclist',
				            autoLoad: true,
							proxy: {
								type: 'jsonp',
								url: 'http://www.xzpt.org/ghjy_dean/script/readKclistList.php?data={"schoolID":{schoolID}}',
						        reader: {
						            type: 'json',
						            rootProperty: 'data'
						        }
							}
				        },
					}
	            } 
			})				
			break;
		}
		win.show();
	},

    createTab: function (prefix, rec, cfg) {
        var tabs = this.lookupReference('main'),
            id = prefix + '_' + rec.getId(),
            tab = tabs.items.getByKey(id);

        if (!tab) {
            cfg.itemId = id;
            cfg.closable = true;
            tab = tabs.add(cfg);
        }

        tabs.setActiveTab(tab);
    },

    editUser: function (userRecord) {
        var win = new YOungshine.view.user.User({
            viewModel: {
                data: {
                    theUser: userRecord
                }
            }
        });

        win.show();
    },

    onClickUserName: function () {
        var data = this.getViewModel().getData();
        this.editUser(data.currentUser);
    },

    onEditUser: function (ctrl, rec) {
        this.editUser(rec);
    },

    onProjectSelect: function () {
        var tabs = this.lookupReference('main');
        tabs.setActiveTab(0);
    },

    onProjectSearchClick: function (view, rowIdx, colIdx, item, e, rec) {
        this.createTab('project', rec, {
            xtype: 'ticketsearch',
            listeners: {
                viewticket: 'onViewTicket'
            },
            viewModel: {
                data: {
                    theProject: rec
                }
            }
        });
    },
    
    onViewTicket: function (view, rec) {
        this.createTab('ticket', rec, {
            xtype: 'ticketdetail',
            session: true,
            viewModel: {
                data: {
                    theTicket: rec
                }
            }
        });
    }
});
