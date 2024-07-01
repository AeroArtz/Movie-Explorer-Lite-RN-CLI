import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { COLORS } from '../constants/Colors'

const MovieCard = ({thumbnail, title}) => {

      {/*  View containing just image and title*/}
  return (
    <View syle={{
      flex: 1/3,
      padding: 10,
      margin: 5
    }}>

      <Image 
        style={styles.image}
        width= {100}
        height= {150}
        source={{uri : `https://image.tmdb.org/t/p/original/${thumbnail}`}}
      />

      <View style={{
        width: 100
      }}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  )
}

export default MovieCard

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flex: 1,
    padding: 20
  },
  image : {
    borderRadius: 13
  },
  title: {
    color: COLORS.lightGrey,
    marginTop: 5
  }

})