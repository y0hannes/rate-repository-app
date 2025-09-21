import { StyleSheet, View } from 'react-native';
import StatItem from './StatItem';

const RepositoryStats = ({ item }) => {
  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
  });
  return (
    <View style={styles.container}>
      <StatItem label='Stars' value={item.stargazersCount} />
      <StatItem label='Forks' value={item.forksCount} />
      <StatItem label='Reviews' value={item.reviewCount} />
      <StatItem label='Rating' value={item.ratingAverage} />
    </View>
  );
};

export default RepositoryStats;
