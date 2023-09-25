import { Integration, RnGallery } from './App'
import { AppRegistry } from 'react-native';
// import {default as RfngApp} from '../rfng/App'

AppRegistry.registerComponent(
    'RnIntegration',
    () => Integration,
);

AppRegistry.registerComponent(
    'RnGallery',
    () => RnGallery,
);

// AppRegistry.registerComponent(
//     'main',
//     () => RfngApp,
// );