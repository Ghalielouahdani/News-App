import { StyleSheet } from "react-native";

const newsStyles = StyleSheet.create({
  container: {
    backgroundColor: "#D2D9DC",
    flex: 1,
  },
  header: {
    backgroundColor: "black",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  itemContainer: {
    marginVertical: 10,
    marginHorizontal: 15,
    borderRadius: 10,
    backgroundColor: "#f9f9f9",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  innerContainer: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
  },
  headerText: {
    color: "#f9f9f9",
    fontSize: 30,
    flexWrap: "wrap",
    textAlign: "center",
    marginTop: 30,
    marginBottom: 30,
    fontWeight: "bold",
  },
  itemText: {
    color: "black",
    fontSize: 15,
    fontFamily: "arial",
    marginTop: 5,
    fontWeight: "bold",
  },
  itemImage: {
    width: "100%",
    height: 180,
    borderRadius: 10,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 15,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    opacity: 0.8,
    height: 40,
    marginLeft: 13,
    marginRight: 13,
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 17,
    color: "black",
  },
  searchIcon: {
    marginLeft: 10,
    color: "black",
  },
  detailsContainer: {
    padding: 16,
  },
  detailsImage: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  detailsTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  detailsDescription: {
    fontSize: 16,
    lineHeight: 24,
  },
  metadataContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  authorText: {
    fontSize: 14,
    color: "#666",
    fontStyle: "italic",
    fontWeight: "bold",
  },
  dateText: {
    fontSize: 14,
    color: "#666",
    fontWeight: "bold",
  },
  searchIconRefresh: {
    color: "black",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 20,
    padding: 10,
    position: "absolute",
    right: 20,
    top: 30,
  },
  searchIconUser: {
    color: "black",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 20,
    padding: 10,
    position: "absolute",
    left: 20,
    top: 30,
  }
});

export default newsStyles;
