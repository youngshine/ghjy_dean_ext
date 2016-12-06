Ext.define('Youngshine.view.main.MainModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.main',

    /**
     * @property {Ticket.model.Organization} currentOrg
     */

    /**
     * @property {Ticket.model.User} currentUser
     */
	
/*	
    requires: [
        //'Youngshine.model.Consult',
		//'Youngshine.model.Kclist'
    ],

	stores: {
		consult222: {
            model: 'Youngshine.model.Consult',
			//source: 'consult',
			// links, linkTo
			//theStudent: {
	        //    type: 'Student',
	        //    id:5
			//} 
            autoLoad: true,
			proxy: {
				type: 'jsonp',
				url: 'http://www.xzpt.org/ghjy_dean/script/readConsultList.php?data={"schoolID":7}',
		        reader: {
		            type: 'json',
		            rootProperty: 'data'
		        }
			}
        },
		// chained store has no load function()
		consultchief: {
            source: '{consult}', 
            filters: [{
                property: 'consultID',
                value: 18,
                operator: '<'
            }]
        },
	}
	*/
});
