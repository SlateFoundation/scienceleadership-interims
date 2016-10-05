Ext.define('ScienceLeadership.interims.overrides.InterimsEditorForm', {
    override: 'SlateAdmin.view.progress.interims.EditorForm',
    requires: [
        'Ext.form.field.ComboBox',
        'Ext.form.field.TextArea'
    ],

    initComponent: function() {
        var me = this;

        me.items = Ext.Array.insert(Ext.Array.clone(me.items), 1, [{
            xtype: 'combobox',
            name: 'Grade',
            fieldLabel: 'Current Grade',
            labelAlign: 'left',
            store: ['D', 'F', 'N/A']
        }]);

        me.callParent(arguments);
    }
});