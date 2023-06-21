import UserInterface from "@/interfaces/userInterface";

interface reviewInterface {
  id: string;
  review: string;
  score: number;
  userId: number;
  productsId: number;
  User?: UserInterface;
}

export default reviewInterface;
