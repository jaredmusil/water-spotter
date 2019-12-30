module.exports = {
  name: 'water-spotter',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/water-spotter',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
