import Link from "next/link";
import { useTypedSelector } from "@/store/useTypeSelector";
import user from "@/pages/user";

type ProfileModalProps = {
    showModal: boolean;
    closeModal: (event: React.MouseEvent<HTMLDivElement>) => void;
};


const ProfileModal: React.FC<ProfileModalProps> = ({ showModal, closeModal }) => {
    const { Error, UserFromDb } = useTypedSelector((state) => state.user);
    if (!showModal) return null

    return (
        <div onClick={(event: React.MouseEvent<HTMLDivElement>) => closeModal(event)} className="absolute inset-0 mt-20 pr-2 flex justify-end ">
            <div className="bg-violet-900 w-[200px] h-[400px]">
                {
                    UserFromDb.name == undefined &&
                    <div>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="black"
                            className="ml-4  w-40 h-40">
                            <path
                                fill-rule="evenodd"
                                d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                                clip-rule="evenodd" />
                        </svg>
                        <h1 className="bg-white">Invitado</h1>
                        <Link href={"/api/auth/login"}>

                            <h1 className="bg-white">Login</h1>
                        </Link>
                    </div>

                }
                {
                    UserFromDb.name != undefined &&
                    <div>
                        <img className=" rounded-full ml-4 h-40 w-40" src={UserFromDb.profileIMG} alt="" />
                        <Link href={"/api/auth/logout"}>
                            <h1 className="bg-white">Logout</h1>
                        </Link>
                    </div>
                }
            </div>
        </div>
    );
};

export default ProfileModal;
