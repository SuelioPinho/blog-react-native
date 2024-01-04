import React, { useContext } from "react";
import { View, Text, FlatList, Button } from "react-native";
import { styles } from "./styles";
import BlogContext from "../../context/blog.context";

const HomeScreen = () => {
  const { data, addBlogPost } = useContext(BlogContext);

  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title="Add Post" onPress={addBlogPost} />
      <FlatList
        data={data}
        keyExtractor={(blogPost) => blogPost.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

export default HomeScreen;
