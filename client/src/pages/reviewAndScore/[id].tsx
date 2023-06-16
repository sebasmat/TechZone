import { deleteProduct } from "@/store/actionCreators/deleteProduct";
import { getDetails } from "@/store/actionCreators/getDetails";
import { getProducts } from "@/store/actionCreators/getProducts";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "@/store/useTypeSelector";
import React from "react";

const ReviewAndScore = () => {
    const result = useTypedSelector((state) => state.product.detail)

    const router = useRouter();
    const { id } = router.query;
    const [fullStar, SetFullStar] = useState<number>(0);
    const [arrayEmptyStar, setArrayEmptyStar] = useState<number[]>([1, 2, 3, 4, 5])
    const [arrayFullStar, SetArrayFullStar] = useState<number[]>([])
    const dispatch = useDispatch();

    useEffect(() => {
        if (id !== undefined) {
            dispatch(getDetails(Number(id)));
        }
        return () => dispatch(deleteProduct());
    }, [dispatch, id]);

    const handleButtonStarEmpty = (event: React.MouseEvent<HTMLButtonElement>) => {
        const valueStar = parseInt(event.currentTarget.value);
        SetFullStar(valueStar)
        setArrayEmptyStar(arrayEmptyStar.filter((star) => star > valueStar))
        for (let i = arrayFullStar.length + 1; i <= valueStar; i++) {
            SetArrayFullStar(prevArray => [...prevArray, i])
        }
    }

    const handleButtonStarFull = (event: React.MouseEvent<HTMLButtonElement>) => {
        const valueStar = parseInt(event.currentTarget.value);
        SetFullStar(valueStar);
        SetArrayFullStar(arrayFullStar.filter((star) => star <= valueStar))
        setArrayEmptyStar([])
        for (let i = valueStar + 1; i <= 5; i++) {
            setArrayEmptyStar(prevArray => [...prevArray, i])
        }
    }
    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-row bg-violet-300 rounded-xl px-5 m-5">
                <div className="py-10">
                    <img src={result[0]?.images[1]} className="h-[200px] w-[200px] rounded-xl"></img>
                </div>
                <div className="px-5">
                    <h1 className="font-bold mt-10 text-xl">Nombre: {result[0]?.name}</h1>
                    <h1 className="font-bold mt-10 text-xl">Precio: {result[0]?.price}</h1>
                </div>
            </div>
            <h1>Deja tu comentario y puntuación, son muy impoertantes para nosotros: </h1>
            <div className="flex mt-5">
            {arrayFullStar.map((star) => {
                return (<div>
                    <button value={star} onClick={handleButtonStarFull} className="hover:scale-125">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 stroke-yellow-300 fill-yellow-300">
                            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
                        </svg>

                    </button>
                </div>)
            })
            }
            {arrayEmptyStar.map((star) => {
                return (<div>
                    <button value={star} onClick={handleButtonStarEmpty} className="hover:scale-125">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-10 h-10 stroke-yellow-300 hover:fill-yellow-300">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                    </button>
                </div>)
            })
            }
            </div>
            <div>
                <textarea className="w-[600px] h-[200px] my-5 bg-violet-200 p-5 rounded"></textarea>   
            </div>
        </div>
    )
};

export default ReviewAndScore;