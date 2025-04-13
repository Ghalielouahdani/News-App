import { View, Text, Image, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import newsStyles from "../(tabs)/newsStyles";

export default function DetailsPage() {
  const { article } = useLocalSearchParams();
  const articleData = JSON.parse(article);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <ScrollView style={newsStyles.container}>
      <View style={newsStyles.detailsContainer}>
        <Text style={newsStyles.detailsTitle}>{articleData.title}</Text>
        <Image
          source={{ uri: articleData.image }}
          style={newsStyles.detailsImage}
        />
        <View style={newsStyles.metadataContainer}>
          <Text style={newsStyles.authorText}>
            {articleData.source?.title ||
              articleData.source?.name ||
              "Source inconnue"}
          </Text>
          <Text style={newsStyles.dateText}>
            {formatDate(articleData.dateTimePub)}
          </Text>
        </View>
        <Text style={newsStyles.detailsDescription}>{articleData.body}</Text>
      </View>
    </ScrollView>
  );
}
