Ext.define('AM.view.user.List' ,{
	extend: 'Ext.grid.Panel',
	alias: 'widget.userlist',
	
	title: 'All users',
	store: 'Users',	

	initComponent: function() {
		this.store = {
			fields:['name','email'],
			data: [
				{name:'pet',email:'p@p.pl'},
				{name:'al', email:'al@al.pl'}
			]
		};

		this.columns = [
			{header:'Name', dataIndex:'name', flex:1},
			{header:'Email', dataIndex:'email', flex:1}
		];
		
		this.callParent(arguments);
	}
});	
