import { useEffect, useState } from "react";
import CategoriesInterface from "@/interfaces/categoriesInterface";

export const useCategories = () => {
  const [categories, setCategories] = useState<CategoriesInterface[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(
        "https://tech-zone-api-n786.onrender.com/categories"
      );
      const data = await response.json();
      setCategories(data);
    };

    fetchCategories();
  }, []);

  return categories;
};
