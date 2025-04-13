import {
  View,
  Text,
  Pressable,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { useEffect } from "react";
import newsStyles from "./newsStyles";
import Icon from "react-native-vector-icons/FontAwesome";
import { useRouter } from "expo-router";

const Header = ({ searchQuery, setSearchQuery, onRefresh }) => {
  return (
    <View style={newsStyles.header}>
      <Icon name="user-circle" size={20} style={newsStyles.searchIconUser} />
      <TouchableOpacity onPress={onRefresh}>
        <Icon name="refresh" size={20} style={newsStyles.searchIconRefresh} />
      </TouchableOpacity>
      <Text style={newsStyles.headerText}>News</Text>
      <View style={newsStyles.searchContainer}>
        <TextInput
          style={newsStyles.searchInput}
          placeholder="Rechercher une news..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <Icon name="search" size={20} style={newsStyles.searchIcon} />
      </View>
    </View>
  );
};

const Item = ({ item }) => {
  const router = useRouter();

  return (
    <View style={newsStyles.itemContainer}>
      <View style={newsStyles.innerContainer}>
        <Image source={{ uri: item.image }} style={newsStyles.itemImage} />
        <Pressable
          onPress={() =>
            router.push({
              pathname: "/details",
              params: { article: JSON.stringify(item) },
            })
          }
        >
          <Text style={newsStyles.itemText}>{item.title}</Text>
        </Pressable>
      </View>
    </View>
  );
};

const newsItems = () => {
  const renderItem = ({ item }) => <Item item={item} />;

  const [newsData, setNewsData] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchNews = async () => {
    try {
      setIsRefreshing(true);
      const response = await fetch(
        "https://newsapi.ai/api/v1/article/getArticles",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query: {
              $query: { lang: "eng" },
              $filter: { forceMaxDataTimeWindow: "31" },
            },
            resultType: "articles",
            articlesSortBy: "date",
            apiKey: "f59e795d-f58c-4f80-94e1-bc6a856d3619",
          }),
        }
      );

      const data = await response.json();
      setNewsData(data.articles.results);
    } catch (error) {
      console.error("Erreur lors du fetch des news :", error);
    } finally {
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const filtered = newsData.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchQuery, newsData]);

  return (
    <View style={newsStyles.container}>
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onRefresh={fetchNews}
      />
      <FlatList
        data={filteredData && filteredData.length > 0 ? filteredData : newsData}
        keyExtractor={(item) => item.uri}
        decelerationRate="normal"
        renderItem={renderItem}
        refreshing={isRefreshing}
      ></FlatList>
    </View>
  );
};

export default newsItems;
