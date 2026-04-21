import { useState, useEffect } from 'react'; import { fetchRecipes } from
'../services/recipeService';

const useRecipes = () => {  const [recipes, setRecipes] = useState([] as any[]);

useEffect(() => {  let mounted = true;  fetchRecipes().then((data) => {  if (mounted) setRecipes(data);  });  return
() => {  mounted = false;  };  }, []);

return { recipes }; };

export default useRecipes;