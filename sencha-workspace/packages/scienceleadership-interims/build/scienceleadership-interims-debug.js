Ext.define('Scienceleadership.interims.overrides.InterimsController', {
    override: 'SlateAdmin.controller.progress.Interims',
    syncStudent: function(student) {
        this.callParent(arguments);
        var report = student.get('report');
        student.set('report_grade', report ? report.get('Grade') : null, {
            dirty: false
        });
    }
});

Ext.define('ScienceLeadership.interims.overrides.InterimsEditorForm', {
    override: 'SlateAdmin.view.progress.interims.EditorForm',
    requires: [
        'Ext.form.field.ComboBox',
        'Ext.form.field.TextArea'
    ],
    initComponent: function() {
        var me = this;
        me.items = Ext.Array.insert(Ext.Array.clone(me.items), 1, [
            {
                xtype: 'combobox',
                name: 'Grade',
                fieldLabel: 'Current Grade',
                labelAlign: 'left',
                store: [
                    'D',
                    'F',
                    'N/A'
                ]
            }
        ]);
        me.callParent(arguments);
    }
});

Ext.define('ScienceLeadership.interims.overrides.InterimsStudentsGrid', {
    override: 'SlateAdmin.view.progress.interims.StudentsGrid',
    initComponent: function() {
        var me = this;
        me.columns = Ext.Array.insert(Ext.Array.clone(me.columns), 1, [
            {
                text: 'Grade',
                dataIndex: 'report_grade',
                emptyCellText: '&mdash;',
                width: 70
            }
        ]);
        me.callParent(arguments);
    }
});

Ext.define('ScienceLeadership.interims.overrides.SectionInterimReport', {
    override: 'Slate.model.progress.SectionInterimReport'
}, function(Report) {
    Report.addFields([
        {
            name: 'Grade',
            type: 'string',
            allowNull: true
        }
    ]);
});

