const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const path = require('path');

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, '../..');
const rfngRoot = path.resolve(projectRoot, '../rfng');

const config = getDefaultConfig(projectRoot);

config.watchFolders = [workspaceRoot, rfngRoot];

config.resolver.nodeModulesPaths = [
    path.resolve(projectRoot, 'node_modules'),
    path.resolve(workspaceRoot, 'node_modules'),
    path.resolve(rfngRoot, 'node_modules'),
];

config.resolver.disableHierarchicalLookup = true;

module.exports = config;