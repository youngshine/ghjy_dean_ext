Ext.define('Youngshine.view.consult.ConsultModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.consult',

    /**
     * @property {Ticket.model.Organization} currentOrg
     */

    /**
     * @property {Ticket.model.User} currentUser
     */
	

    requires: [
        'Youngshine.model.Consult'
    ],
	
	data: {
		//schoolID: localStorage.schoolID
		school: {
			schoolID: localStorage.schoolID,
			schoolName: localStorage.schoolName
		}
	},
	
	fomulas: {
		theSchool: function(get){
			let obj = {
				"schoolID": get('school.schoolID')
			}
			console.log(obj)
			return Ext.JSON.encode(obj)
		}
	},

});
