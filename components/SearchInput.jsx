import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS } from '../constants/Colors';


const SearchInput = ({navigation}) => {
      {/* State variable to store users search query*/}
    const [query, setQuery] = useState('')

        

  return (    
    <View style={styles.container} >
        <TextInput
            style ={styles.input}
            value={query}
            onChangeText={(e) => setQuery(e)}
            placeholder='Search Movie'
            placeholderTextColor={COLORS.lightGrey}
        />

        {/* Directs user to SearchScreen when user presses search icon */}
        <TouchableOpacity 
          style= {styles.icon}
        onPress={() =>
         navigation.navigate('SearchScreen', {
            q: query
         })
        }>
            <Text style={styles.searchText}>Search</Text>
        </TouchableOpacity>

    </View>
  )
}

export default SearchInput

const styles = StyleSheet.create({
  container: {
    marginTop:40,
    flexDirection: 'row',
    backgroundColor: COLORS.darkGrey,
    borderColor: COLORS.darkGrey,
    borderRadius: 12,
    height: 24,
    alignItems: 'center'
  },
  input : {
    backgroundColor: COLORS.darkGrey,
    color: COLORS.lightGrey,
    marginLeft: 5,
    padding: 0,
    height: 24,
    flex: 1
  },
  icon : {
    marginRight: 
    10
  },
  searchText: {
    color: COLORS.WhiteMuted,
    fontSize: 12
  }

})