// 咨询师
Ext.define('Youngshine.model.Kclist', {
    extend: 'Ext.data.Model',
	
	
    //idProperty: 'kclistID', // unique for pulling down to refresh
/*	
	schema: {
		namespace: 'Youngshine.model'
	},
*/	
    fields: [
		{name: 'kclistID'}, 
		{name: 'title'}, 
		{name: 'unitprice'}, 
		{name: 'hour'}, 
		{name: 'amount'}, 
		{name: 'kcType'},  //大小班，一对一
		//{name: 'kmType'}, // 科目
		{name: 'subjectID'}, // 科目
		{name: 'subjectName'}, // 科目
		{name: 'gradeID'}, // 年级
		{name: 'gradeName'}, // 科目
		{name: 'sectionName'}, //学段：小学、初中、高中
		{name: 'schoolID'}, 
		{name: 'schoolName'},	
    ]
});