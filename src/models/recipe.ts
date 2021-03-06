import Item from "./item";
import Category from "./category";

type Recipe = {
  key: string;
  name: string;
  imageUrl?: string;
  items: Item[];
  categories: Category[];
  approach: string;
  subRecipes: Recipe[];
};

export default Recipe;
