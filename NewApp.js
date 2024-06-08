import { View, Text, SafeAreaView, StatusBar, Image, Platform } from 'react-native'
import React, { useEffect, useState } from 'react'
import PetDetails from './src/PetDetails'


const NewApp = () => {


  const [splash, setSplashPage] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashPage(false); // Hide splash screen after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Clear the timer on unmount to prevent memory leaks
  }, []);

  return (
    <SafeAreaView style={{ flexGrow: 1, width: "100%",
     backgroundColor: splash ? "#FFF" : "#f5ddce",
     paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
     }}>
      <StatusBar
        animated={true}
        backgroundColor="#f5ddce"
      />

      {splash ? (
        <View style={{ backgroundColor: "#fff", flex: 1, height: '100%', width: '100%', }}>
          <Image
            style={{ height: '100%', width: '80%', justifyContent: 'center', alignSelf: 'center' }}
            resizeMode="contain"
            source = {require('./src/assects/puppy.jpeg')}

          />
        </View>
      ) : (
        <PetDetails />
      )}


    </SafeAreaView>
  )
}

export default NewApp