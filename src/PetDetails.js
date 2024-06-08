import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView, ImageBackground, Image, StyleSheet } from 'react-native';


export default function App() {
 

  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const [selectedData, setSelectedData] = useState(null);
  const [data, setData] = useState([]);
  const [petDetails, setPetDetails] = useState([]);


  const handleOptionPress = (value, option) => {
    console.log("========= option========", option);
    setSelectedValue(value);
    setSelectedData(option)
    setIsOpen(false);
    petDetailApi(value)
  };

  useEffect(() => {
    fetchData(); // Fetch data when component mounts
  }, []); //



  const fetchData = () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow"
    };

    fetch("https://freetestapi.com/api/v1/dogs?limit=20", requestOptions)
      .then((response) => response?.json())
      .then((result) => {
        console.log("============================", result)
        setData(result);

      })
      .catch((error) => console.error(error));
  }

  const petDetailApi = (name) => {
    const apiKey = '5w2psUMXwMkyrFM98VP96A==ziGfxG68pOomYjrA';
    const url = `https://api.api-ninjas.com/v1/dogs?name=${name}`;

    fetch(url, {
      method: 'GET',
      headers: {
        'X-Api-Key': apiKey,
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        // setData(data)
        setPetDetails((data?.[0]));
      }
      )
      .catch(error => {
        console.log("==err=",error);
      });
  }

  return (

    <View style={styles.container}>
    <ImageBackground
      style={styles.imageBackground}
      resizeMode='cover'
      source={require('./assects/dog.jpg')}    >
      <Text style={styles.petDetailsText}>Pet Details</Text>
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          onPress={() => setIsOpen(!isOpen)}
          style={styles.selectButton}
        >
          <Text style={styles.selectButtonText}>
            {selectedValue ? selectedValue : 'Select the dog breed'}
          </Text>
          <Text style={styles.arrowText}>{!isOpen ? '↓' : '↑'}</Text>
        </TouchableOpacity>

        {isOpen && (
          <View style={styles.optionsContainer}>
            <ScrollView style={{ height: 350 }}>
              {data?.length ? (
                data.map((option, index) => (
                  <TouchableOpacity
                    key={option.name}
                    onPress={() => handleOptionPress(option.name, option)}
                  >
                    <View
                      style={[
                        styles.optionItem,
                        {
                          borderTopLeftRadius: index === 0 ? 10 : 0,
                          borderTopRightRadius: index === 0 ? 10 : 0,
                          borderBottomLeftRadius:
                            index === data.length - 1 ? 10 : 0,
                          borderBottomRightRadius:
                            index === data.length - 1 ? 10 : 0,
                        },
                      ]}
                    >
                      <Text style={styles.optionText}>{option.name}</Text>
                    </View>
                  </TouchableOpacity>
                ))
              ) : null}
            </ScrollView>
          </View>
        )}

        {!isOpen && petDetails?.name && (
          <View>
            <View style={styles.petDetailItem}>
              <Text style={styles.petDetailLabel}>Name:</Text>
              <Text style={styles.petDetailValue}>{selectedData?.name}</Text>
            </View>
            <View style={styles.petDetailItem}>
              <Text style={styles.petDetailLabel}>Breed:</Text>
              <Text style={styles.petDetailValue}>
                {selectedData?.breed_group}
              </Text>
            </View>
            <View style={styles.petDetailItem}>
              <Text style={styles.petDetailLabel}>Color:</Text>
              <Text style={styles.petDetailValue}>
                {selectedData?.colors?.join(', ')}
              </Text>
            </View>
            <View style={styles.petDetailItem}>
              <Text style={styles.petDetailLabel}>Lifespan:</Text>
              <Text style={styles.petDetailValue}>
                {selectedData?.lifespan}
              </Text>
            </View>
            <View style={styles.petDetailItem}>
              <Text style={styles.petDetailLabel}>Weight:</Text>
              <Text style={styles.petDetailValue}>
                {petDetails?.min_weight_male} Kg
              </Text>
            </View>
          </View>
        )}
      </View>
      <View style={styles.imageContainer}>
        <Image
          style={styles.petImage}
          source={{ uri: petDetails?.image_link }}
        />
      </View>
    </ImageBackground>
  </View>
  );
}


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  imageBackground: {
    flex: 1,
    paddingHorizontal: 15,
  },
  petDetailsText: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 15,
    color: '#000',
  },
  selectButton: {
    padding: 10,
    backgroundColor: '#00000070',
    borderRadius: 5,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  selectButtonText: {
    fontSize: 24,
    fontWeight: '500',
    color: '#000',
  },
  arrowText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
  },
  optionsContainer: {
    position: 'absolute',
    top: 50,
    left: 0,
    width: '100%',
  },
  optionItem: {
    padding: 10,
    backgroundColor: '#00000070',
    marginBottom: 1,
  },
  optionText: {
    color: '#000',
    fontSize: 20,
    fontWeight: '500',
  },
  petDetailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  petDetailLabel: {
    fontWeight: 'bold',
    marginRight: 5,
    fontSize: 24,
    color: '#000',
  },
  petDetailValue: {
    fontSize: 24,
    opacity: 0.7,
    fontWeight: '700',
    color: '#000',
  },
  imageContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 10,
  },
  petImage: {
    width: 250,
    height: 250,
    borderRadius: 15,
  },
});
