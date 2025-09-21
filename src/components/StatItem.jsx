import { StyleSheet, Text } from 'react-native';
import { View } from 'react-native';
import theme from '../theme';

const formatThousands = (num) => {
  return num >= 1000 ? (num / 1000).toFixed(1) + 'k' : String(num);
};

const styles = StyleSheet.create({
  label: {
    color: theme.colors.textSecondary,
  },
  stat: {
    color: theme.colors.textPrimary,
    fontWeight: theme.fontWeights.bold,
    textAlign: 'center',
  },
});

const StatItem = ({ label, value }) => {
  return (
    <View>
      <Text style={styles.stat}>{formatThousands(value)}</Text>
      <Text style={styles.label}> {label}</Text>
    </View>
  );
};

export default StatItem;
