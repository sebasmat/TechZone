import ProductInterface from '../interfaces/productsInterface';

const search = ({id, category, brand, name, imageDetail, imageCard, description, price, available, stock }: ProductInterface)=>{
    return (
        <div>
            Esta es la vista search donde se mostrara el producto
        </div>
    )
}

export default search;