import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "@/store/actionCreators/getProducts";

const Paginated = () => {

    const [page, setPage] = useState(0)
    const [totalPages, setTotalPages] = useState(0)
    const dispatch = useDispatch()


    const findPageNumber = async () => {
        const response = await axios.get("http://localhost:3001/products")
            .then((data) => setTotalPages(data.data.totalPages))
    };

    useEffect(() => {
        findPageNumber()
    })

    const arrayButton: number[] = []

    for (let i = 1; i <= totalPages; i++) {
        arrayButton.push(i)
    }

    const handlePaginatedButton = (event: React.MouseEvent<HTMLButtonElement>) => {
        const actualPage = parseInt(event.currentTarget.value) 
        setPage(actualPage)
        dispatch(getProducts(actualPage))
    }

    const handleNextBackButton = (event: React.MouseEvent<HTMLButtonElement>) => {
        if (event.currentTarget.value == "next") {
            let nextPage = page + 1
            setPage(nextPage)
            dispatch(getProducts(nextPage))
        }
        if (event.currentTarget.value == "back") {
            let nextPage = page - 1
            setPage(nextPage)
            dispatch(getProducts(nextPage))
        }
    }


    return (
        <div className=" flex justify-center h-14 ">
            {page > 0 && <button value="back" onClick={handleNextBackButton} className="bg-violet-900 m-3 px-2 text-xl rounded hover:bg-violet-400">Anterior</button>}
            {arrayButton.map((number) => {
                if(number-1 != page){
                return (<button value={number - 1} onClick={handlePaginatedButton} className="bg-violet-900 
                m-3 px-2 text-xl rounded focus:bg-violet-400 hover:bg-violet-400">{number}</button>)}else{
                    return(<label className="m-3 px-2 py-1 text-xl rounded bg-violet-400" >{page +1}</label>)
                }
            })}
            {page < 4 && <button value="next" onClick={handleNextBackButton} className="bg-violet-900 m-3 px-2 text-xl rounded hover:bg-violet-400">Siguiente</button>}
        </div>

    );
};

export default Paginated;
