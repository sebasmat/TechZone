import axios from "axios";
import { useEffect,useState } from "react";
import { useRouter } from 'next/router';
import { useDispatch } from "react-redux";
import { useTypedSelector } from '@/store/useTypeSelector';
import { getProducts } from "@/store/actionCreators/getProducts";

const Paginated = () => {
    
    const [totalPages, setTotalPages] = useState(0)
    const dispatch = useDispatch()
    

    const  findPageNumber = async () => {
        const response = await axios.get("http://localhost:3001/products")
        .then((data) => setTotalPages(data.data.totalPages))
    };

    const result = useTypedSelector((state)=> state.products.ProductsFromDb)

    useEffect(()=>{
        findPageNumber()
    })

    const arrayButton:number[] = []

    for(let i=1; i <= totalPages; i++){
        arrayButton.push(i)
    }

    const handlePaginatedButton = (event: React.MouseEvent<HTMLButtonElement>) => {
        const page = parseInt(event.currentTarget.value) 
        dispatch(getProducts(page))
    }

    return (
    <div>
        {arrayButton.map((number) => {
           return(<button value={number-1} onClick={handlePaginatedButton}>{number}</button>) 
        })}
    </div>
    );
  };
  
  export default Paginated;
  