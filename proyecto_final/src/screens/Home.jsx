import { colors } from '../global/colors'
import categories from '../data/categories.json'
import { StyleSheet, View, FlatList } from 'react-native'

import CategoryItem from '../components/CategoryItem'
import Counter from '../components/Counter'

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <Counter />
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
      padding: 10,
      marginBottom: 50,
      alignItems: 'center',
      backgroundColor: colors.primary,
    },
    flatlist: {
      width: '100%'
    },
})