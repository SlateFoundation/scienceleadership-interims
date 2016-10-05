Ext.define('Scienceleadership.interims.overrides.InterimsController', {
    override: 'SlateAdmin.controller.progress.Interims',

    syncStudent: function(student) {
        this.callParent(arguments);

        var report = student.get('report');

        student.set('report_grade', report ? report.get('Grade') : null, { dirty: false });
    }
});