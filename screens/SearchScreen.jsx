import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import MovieCard from '../components/MovieCard';
import { COLORS } from '../constants/Colors';
import axios from 'axios';



const SearchScreen = ({route,navigation}) => {

  

    {/*  Accessing search parameter by user */}
    const {q} = route.params;

    {/* Defining a variable for search endpoint */}
    const API_URL = 'https://api.themoviedb.org/3/search/movie'

     {/* Storing data returned as state variable */}
     const [data,setData] = useState([]);

    {/* Fetching data on mount */}
    useEffect(() => {
        fetchData()
    },[]);

   

    

    {/* Function definiton for making API call via axios */}
    

    const fetchData = async() => {
        const options = {
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTA3ZmU3NTE5OTQ3ZDQ3NGQ2YzJhNzZlODEzY2VkMyIsIm5iZiI6MTcxOTMyMzY3NS4zNjU1OTcsInN1YiI6IjY2N2FjYjAwNGFmOTM1YTgwY2Y2OWM4NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iebtF801JMw3o8tw4MUXbdF4Kv3b0Ux4oBwq0LL8iYA'
              },
            params:{
                language: 'en-US',
                page: '1',
                query: q,
                include_adult : false

            }
        };

        console.log(data.results)
        try{
            const response = await axios.get(API_URL,options);
            setData(response.data)
        }catch(e){
            console.log('Error fetching the data')
        }
    }
  return (
    <SafeAreaView style={styles.container}>

        {/* Header Container */}
        <View style={styles.headerContainer}>

            {/* Back button which directs user back to home page */}


            <TouchableOpacity
                onPress={() => navigation.navigate('Home')}
            >
                <Text style={styles.headerText}>
                    Go Back
                </Text>
            </TouchableOpacity>

        </View>

            {/* List structure to store results returned by API call for searching topic */}
        <FlatList
            style= {styles.flatlist}
            columnWrapperStyle = {styles.row}
            data= {data.results}
            key = {({item}) => item.id}
            numColumns={3}
            renderItem={({item}) =>
                <MovieCard thumbnail={item.poster_path} title={item.title}/>
            }
        />
    </SafeAreaView>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
    container : {
        flex: 1,
        height: '100%',
        flexDirection: 'column',
        backgroundColor: COLORS.darkBgColor
    },
    flatlist: { 
        margin: 5
        
    }   
    ,row: {
        flex: 1,
        justifyContent: "space-around"
    },
    headerContainer: {
        flexDirection:'row',
        marginBottom: 30
    },
    headerText: {
        fontSize: 17,
        color: COLORS.WhiteMuted,
        marginLeft: 5,
        marginTop: 15,
    }
})