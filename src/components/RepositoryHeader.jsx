import { View, Image, StyleSheet } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 6,
    marginRight: 12,
  },
  infoSection: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
});

const RepositoryHeader = ({ item }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={{ uri: item.ownerAvatarUrl }} />
      <View style={styles.infoSection}>
        <Text color='textPrimary' fontWeight='bold'>
          {item.fullName}
        </Text>
        <Text color='textSecondary'>{item.description}</Text>
        <Text type='button'>{item.language}</Text>
      </View>
    </View>
  );
};

export default RepositoryHeader;
