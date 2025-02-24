/**
 * Metro configuration for React Native
 * https://facebook.github.io/metro/docs/configuration
 *
 * @format
 */

module.exports = {
  resolver: {
    sourceExts: ['jsx', 'js', 'ts', 'tsx'], // Ensure it supports TypeScript
  },
  transformer: {
    babelTransformerPath: require.resolve(
      'metro-react-native-babel-transformer',
    ),
  },
};
