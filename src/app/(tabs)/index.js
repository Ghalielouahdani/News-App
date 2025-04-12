import { View, Text, StyleSheet, FlatList, Image, TextInput } from 'react-native';
import { useState } from 'react';
import { useEffect } from 'react';


const Header = ({ searchQuery, setSearchQuery }) => {
    return (
      <View style={{ marginBottom: 20 }}>
        <Text style={menuStyles.headerText}>News</Text>
        <TextInput
          style={menuStyles.searchInput}
          placeholder="Rechercher une news..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
    );
  };

const Item = ({ item }) => (
  <View style={menuStyles.itemContainer}>  
  <View style={menuStyles.innerContainer}>
    <Image source={{uri: item.image}} style= {menuStyles.itemImage}></Image>
    <Text style={menuStyles.itemText}>{item.title}</Text>
  </View>
  </View>
);


const MenuItems = () => {
  const renderItem = ({ item }) => <Item item={item} />;

  const [newsData, setNewsData] = useState([]);

useEffect(() => {
  const fetchNews = async () => {
    try {
      const response = await fetch('https://newsapi.ai/api/v1/article/getArticles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: {
            $query: { lang: 'eng' },
            $filter: { forceMaxDataTimeWindow: '31' },
          },
          resultType: 'articles',
          articlesSortBy: 'date',
          apiKey: 'f59e795d-f58c-4f80-94e1-bc6a856d3619',
        }),
      });

      const data = await response.json();
      setNewsData(data.articles.results);
    } catch (error) {
      console.error('Erreur lors du fetch des news :', error);
    }
  };

  fetchNews();
}, []);

const [searchQuery, setSearchQuery] = useState('');
const [filteredData, setFilteredData] = useState([]);

useEffect(() => {
    const filtered = newsData.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchQuery, newsData]);

  return (
    <View style={menuStyles.container}>
        <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <FlatList
        data={filteredData && filteredData.length > 0 ? filteredData : newsData}
        keyExtractor={(item) => item.uri}
        decelerationRate="normal"
        renderItem={renderItem}>
        </FlatList>
    </View>
  );
};


const menuStyles = StyleSheet.create({
    container: {
      flex: 1,
    },
    itemContainer: {
      marginVertical: 10, 
      marginHorizontal: 15, 
      borderRadius: 10,
      backgroundColor: '#f9f9f9', 
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3, 
    },
    innerContainer: {
      padding: 10,
      backgroundColor: 'white',
      borderRadius: 10,
    },
    headerText: {
      color: 'purple',
      fontSize: 30,
      flexWrap: 'wrap',
      textAlign: 'justify',
      marginTop: 10,
      marginLeft : 10,
      marginBottom: 30,
      fontWeight: 'bold',
    },
    itemText: {
      color: 'black',
      fontSize: 15,
      fontFamily: 'arial',
      marginTop: 5,
      fontWeight: 'bold',
    },
    itemImage: {
      width: '100%',
      height: 180,
      borderRadius: 10,
    },
    searchInput: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      backgroundColor: '#fff',
      opacity: 0.8,
      marginLeft: 10,
      marginRight : 10
    },
  });

export default MenuItems;