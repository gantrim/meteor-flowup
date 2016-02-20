// App: Library (First layer)
// * All packages used by the app (minus development-only packages) should
//   be defined here.
// * Code in this package is guaranteed to run before any other part of the app.
// * All other packages depend on this package. This is a great place to define
//   shared utilities as well as extend/add functionality to any package before
//   the application loads it.
Package.describe({
    name: 'gantrim:flowup', // All modules should api.use() this.
    summary: 'Meteor port of FlowUp jquery Plugin',
    version: '1.0.1',
    git: 'https://github.com/gantrim/meteor-flowup'
});

Package.onUse(function (api) {

    api.versionsFrom(['METEOR@1.2.1']);

    var packages = ['jquery',];

    api.use(packages);
    api.imply(packages);

    if (process.env.IS_PRODUCTION) {
        api.use('xolvio:inspectlet');
        api.export('__insp');
    }

    api.addFiles([
        'lib/client/flowup.js',
        'lib/client/flowup.css',
    ], ['client']);
});
