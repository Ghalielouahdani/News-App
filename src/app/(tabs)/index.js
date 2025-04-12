import { View, Text, StyleSheet, FlatList } from 'react-native';

const newsData = [
    { title: "L’intelligence artificielle bouleverse le monde du travail", date: "2025-04-10T08:30:00Z" },
    { title: "Les voitures électriques dominent le marché européen", date: "2025-04-09T14:15:00Z" },
    { title: "OpenAI dévoile un nouveau modèle encore plus puissant", date: "2025-04-08T11:45:00Z" },
    { title: "Le marché des crypto-monnaies repart à la hausse", date: "2025-04-07T16:20:00Z" },
    { title: "Une percée scientifique majeure dans la lutte contre le cancer", date: "2025-04-06T10:05:00Z" },
    { title: "Tesla annonce une Gigafactory en Afrique du Nord", date: "2025-04-05T09:00:00Z" },
    { title: "Des chercheurs créent une batterie 10 fois plus efficace", date: "2025-04-04T12:00:00Z" },
    { title: "Le streaming dépasse définitivement la télévision classique", date: "2025-04-03T18:30:00Z" },
    { title: "Une intelligence artificielle compose une symphonie primée", date: "2025-04-02T13:15:00Z" },
    { title: "La mission spatiale vers Mars entre dans sa phase finale", date: "2025-04-01T07:45:00Z" },
    { title: "Une start-up française révolutionne le stockage d'énergie", date: "2025-03-31T10:00:00Z" },
    { title: "Apple lance un iPhone entièrement recyclable", date: "2025-03-30T15:20:00Z" },
    { title: "Le réchauffement climatique atteint un nouveau record", date: "2025-03-29T09:45:00Z" },
    { title: "Une IA diagnostique plus vite que les médecins", date: "2025-03-28T11:10:00Z" },
    { title: "SpaceX prépare une nouvelle station orbitale", date: "2025-03-27T13:00:00Z" },
    { title: "Le télétravail devient la norme dans la Silicon Valley", date: "2025-03-26T08:30:00Z" },
    { title: "Un vaccin universel contre la grippe en test", date: "2025-03-25T14:55:00Z" },
    { title: "La Chine teste un train à sustentation magnétique ultra-rapide", date: "2025-03-24T12:40:00Z" },
    { title: "Les énergies renouvelables dépassent le charbon pour la première fois", date: "2025-03-23T10:25:00Z" },
    { title: "Une découverte archéologique majeure en Égypte", date: "2025-03-22T17:15:00Z" }
  ];

  
const Item = ({ item }) => (
  <View style={menuStyles.innerContainer}>
    <Text style={menuStyles.itemText}>{item.title}</Text>
    <Text style={menuStyles.itemText}>{item.date}</Text>
  </View>
);




const MenuItems = () => {
  const renderItem = ({ item }) => <Item item={item} />;

  return (
    <View style={menuStyles.container}>
      <Text style={menuStyles.headerText}>View Menu</Text>
      <FlatList
        data={newsData}
        keyExtractor={(item) => item.date}
        renderItem={renderItem}>
        </FlatList>
    </View>
  );
};

const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    backgroundColor: 'white',
  },
  headerText: {
    color: 'black',
    fontSize: 30,
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  itemText: {
    color: '#black',
    fontSize: 20,
  },
});

export default MenuItems;