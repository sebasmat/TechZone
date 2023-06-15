import { useEffect, useState } from "react";
import CategoriesInterface from "@/interfaces/categoriesInterface";

export const useCategories = () => {
  const [categories, setCategories] = useState<CategoriesInterface[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch("http://localhost:3001/categories");
      const data = await response.json();
      setCategories(data);
    };

    fetchCategories();
  }, []);

  return categories;
};
