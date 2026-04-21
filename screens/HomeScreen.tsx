import React from 'react'; import { View, Text, FlatList } from 'react-native'; 
import RecipeCard from '../components/RecipeCard'; import useRecipes from '../hooks/useRecipes';

const HomeScreen = () => {  const { recipes } = useRecipes();

return (  <View style={{ flex: 1, padding: 16 }}>  <Text style={{ fontSize: 20, fontWeight: '600', marginBottom: 12
}}>Recipes</Text>  <FlatList  data={recipes}  keyExtractor={(item) => item.id}  renderItem={({ item }) => <RecipeCard
recipe={item} />}  />  </View>  ); };

export default HomeScreen;