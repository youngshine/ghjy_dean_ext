Ext.define('Youngshine.view.main.Nav', {
    extend: 'Ext.Container',
    //alias: 'widget.pageHeader',
	xtype: 'nav',
	
	title: '功能导航',
	layout: {
		// layout-specific configs go here
		type: 'accordion',
		titleCollapse: true,
		animate: true,
		//activeOnTop: true
	},
	collapsed: false,
	collapsible: true,

	items: [{
		title: '人员',
		html: '<div style="margin:10px 5px;cursor:pointer">'+
			'<div class="menuitem" title="student" style="margin:5px;">学生</div>'+
		
			'<div style="margin:10px 0;cursor:auto;"><hr></div>'+
			'<div class="menuitem" title="consult" style="margin:5px;">咨询师</div>'+
			'<div class="menuitem" title="teacher" style="margin:5px;">教师</div>'+
		
			'<div style="margin:10px 0;cursor:auto;"><hr></div>'+
			'<div class="menuitem" title="kclist" style="margin:5px;">课程（大小班、一对N）</div>'+
			'<div class="menuitem" title="schoolsub" style="margin:5px;">分校区</div>'+
			'</div>'
	},{
		title: '查询统计',
		html: '<div style="margin:10px 5px;cursor:pointer">'+			
			'<div class="menuitem" title="accnt" style="margin:5px;">课程销售查询</div>'+
			'<div class="menuitem" title="accntfee" style="margin:5px;">缴款明细</div>'+
			'<div class="menuitem" title="accntconsult" style="margin:5px;">咨询师业绩统计</div>'+
		
			'<div style="margin:10px 0;cursor:auto;"><hr></div>'+
			'<div class="menuitem" title="course" style="margin:5px;">教师课时统计</div>'+
			'</div>'
	},{
		title: '财务记账',
		html: '<div style="margin:10px 5px;cursor:pointer">'+	
			'<div class="menuitem" title="ledger" style="margin:5px;">日常记账</div>'+
		    '</div>'
	},{
		title: '系统',
		html: '<div style="margin:10px 5px;cursor:pointer">'+	
			'<div class="menuitem" title="pswreset" style="margin:5px;">密码修改</div>'+
			'<div class="menuitem" title="logout" style="margin:5px;">退出</div>'+
		    '</div>'
    }],
	
	listeners: {
		el: {
			delegate: 'div.menuitem',
			click: 'onMenuitemClick'
			/*
			click: function(e,obj){
				Ext.getCmp(this.id).onNav(obj);
			}, */
		}
	},
/*	
	onNav: function(obj){
		var me = this;
		if(obj.title == 'logout'){
			Ext.Msg.confirm('询问', '是否退出系统？', function(btn){
				if(btn=='yes'){
					me.fireEvent('logout');
				}
			});	
		}else{
			console.log(obj)
			me.fireEvent(obj.title);
		}
	} */
});