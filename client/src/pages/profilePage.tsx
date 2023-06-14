import Link from "next/link";
import { useTypedSelector } from "@/store/useTypeSelector";



const ProfilePage = () => {
    const { Error, UserFromDb } = useTypedSelector((state) => state.user);

    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-col items-center py-10">
                <h1 className="text-3xl">{UserFromDb.name}</h1>
                <img className="w-[300px] h-[300px] rounded-full p-5" src={UserFromDb.profileIMG} />
                <h1>Teléfono: {UserFromDb.cellPhone}</h1>
                <h1>Dirección: {UserFromDb.direction}</h1>
            </div>

            <Link href={"/user"}>
                <button className="bg-violet-400 font-white px-3 py-1 rounded-xl hover:bg-violet-600 duration-300">Editar perfil</button>
            </Link>
            <div>
                <h1 className="p-10">Acá se renderizan las cards de los productos que ha comprado</h1>
            </div>
        </div>
    )
};

export default ProfilePage;