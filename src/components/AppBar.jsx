import { StyleSheet, View, Text, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    padding: 15,
    backgroundColor: theme.colors.secondary,
    color: theme.colors.main,
    fontWeight: theme.fontWeights.bold,
    flexDirection: 'row',
  },
  link: {
    marginRight: 20,
  },
  tabText: {
    color: theme.colors.main,
    fontWeight: theme.fontWeights.bold,
    fontSize: 16,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to='/' style={styles.link}>
          <Text style={styles.tabText}>Repositories</Text>
        </Link>
        <Link to='/signin' style={styles.link}>
          <Text style={styles.tabText}>Sign in</Text>
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;
