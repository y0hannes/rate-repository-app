import { View, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    padding: 15,
    backgroundColor: theme.colors.secondary,
    color: theme.colors.main,
    fontWeight: theme.fontWeights.bold,
  },
});

const AppBar = () => {
  return <Text style={styles.container}>Repositories</Text>;
};

export default AppBar;
