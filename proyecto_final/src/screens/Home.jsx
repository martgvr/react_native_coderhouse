import { colors } from '../global/colors'
import categories from '../data/categories.json'
import { StyleSheet, View, FlatList } from 'react-native'

import CategoryItem from '../components/CategoryItem'

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <FlatList 
            data={categories}
            style={styles.flatlist}
            keyExtractor={category => category}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => <CategoryItem item={item} navigation={navigation} />}
        />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        alignItems: 'center',
        padding: 10,
    },
    flatlist: {
      width: '100%'
    },
})