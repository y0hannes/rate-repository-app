import { Text, View, Image, StyleSheet } from 'react-native';
import theme from '../theme';

const RepositoryHeader = ({ item }) => {
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
    fullName: {
      color: theme.colors.textPrimary,
      fontWeight: theme.fontWeights.bold,
    },
    description: {
      color: theme.colors.textSecondary,
    },
    languageBadge: {
      color: theme.colors.main,
      backgroundColor: theme.colors.primary,
      alignSelf: 'flex-start',
      paddingHorizontal: 6,
      paddingVertical: 4,
      borderRadius: 4,
      fontSize: 14,
      marginTop: 6,
    },
  });
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={{ uri: item.ownerAvatarUrl }} />
      <View style={styles.infoSection}>
        <Text style={styles.fullName}>{item.fullName}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.languageBadge}>{item.language}</Text>
      </View>
    </View>
  );
};

export default RepositoryHeader;
