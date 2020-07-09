module.exports = {
	name: 'ngrx-demo',
	preset: '../../jest.config.js',
	coverageDirectory: '../../coverage/apps/ngrx-demo',
	snapshotSerializers: [
		'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
		'jest-preset-angular/build/AngularSnapshotSerializer.js',
		'jest-preset-angular/build/HTMLCommentSerializer.js',
	],
};
