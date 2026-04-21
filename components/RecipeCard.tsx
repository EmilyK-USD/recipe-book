import React from 'react'; import { View, Text } from 'react-native';

type Recipe = {  id: string;  title: string;  description?: string; };

const RecipeCard: React.FC<{ recipe: Recipe }> = ({ recipe }) => {  return (  <View style={{ padding: 12,
borderBottomWidth: 1, borderBottomColor: '#eee' }}>  <Text style={{ fontSize: 16, fontWeight: '500' }}>{recipe.title}
</Text>  {recipe.description ? (  <Text style={{ color: '#666', marginTop: 4 }}>{recipe.description}</Text>  ) : null}
</View>  ); };

export default RecipeCard;