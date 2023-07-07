import { colors } from '../global/colors'
import categories from '../data/categories.json'
import { StyleSheet, View, FlatList } from 'react-native'

import CategoryItem from '../components/CategoryItem'

const Home = ({ setCategory }) => {
  return (
    <View style={styles.container}>
        <FlatList 
            style={styles.flatlist}
            showsVerticalScrollIndicator={false}
            data={categories}
            keyExtractor={category => category}
            renderItem={({ item }) => CategoryItem({ item, setCategory })}
        />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        height: '90%',
        backgroundColor: colors.primary,
        alignItems: 'center',
        padding: 10,
    },
    flatlist: {
      width: '100%'
    },
})