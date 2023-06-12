import { withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import LoginLogout from "@/components/LoginLogout";
import { useTypedSelector } from "@/store/useTypeSelector";
import { useEffect, useState } from "react";
import UserInterface from "@/interfaces/userInterface";
import axios from "axios";
import { useDispatch } from "react-redux";
import { putUser } from "@/store/actionCreators/putUser";
import { ActionType } from "@/store/actionTypes";
import Image from "next/image";

export async function getStaticProps() {
  return {
    props: {
      pageId: "userPage",
    },
  };
}

interface UserProps {
  user: {
    name: string;
    email: string;
    direction: string;
    cellPhone: string;
    gender: string;
  };
}

const User: React.FC<UserProps> = ({ user }) => {
  const [userForm, setUserForm] = useState<UserInterface>({
    name: "",
    email: "",
    direction: "",
    cellPhone: 0,
    Gender: "",
  });
  const [userImage, setUserImage] = useState<File | null>(null);

  const dispatch = useDispatch();
  const { Error, UserFromDb } = useTypedSelector((state) => state.user);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    if (name === "userImage") {
      setUserImage(event.target.files![0]);
    } else {
      setUserForm((prevUser) => ({ ...prevUser, [name]: value }));
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (userForm.name === "") {
      alert("El nombre no puede estar vacío");

      return;
    }
    let url = "";
    if (userImage) {
      try {
        const formData = new FormData();
        formData.append("image", userImage);
        const response = await axios.post(
          "https://api.imgbb.com/1/upload?key=49a1b0e207191c858c5ee634e59c96bc",
          formData
        );
        url = response.data.data.display_url;
      } catch (error) {
        alert("no se pudo subir la imagen, intenta nuevamente");
        return;
      }
    }
    if (Error !== undefined) {
      try {
        await axios.post("http://localhost:3001/create/User", {
          email: user.email,
        });
      } catch (error) {
        alert("error al crear el usuario, intenta nuevamente");
        return;
      }
    }
    try {
      const resUser = await axios.put(
        `http://localhost:3001/create/User/${user.email}`,
        {
          email: user.email,
          name: userForm.name,
          direction: userForm.direction,
          cellPhone: userForm.cellPhone,
          Gender: userForm.Gender,
          profileIMG: url,
        }
      );
      dispatch({ type: ActionType.GET_USER, payload: resUser.data });
    } catch (error: any) {
      dispatch({ type: ActionType.GET_USER_ERROR, payload: error.message });
      alert("error al modificar el usuario");
      return;
    }
    setUserForm({
      name: "",
      email: "",
      direction: "",
      cellPhone: 0,
      Gender: "",
    });
  };

  useEffect(() => {
    if (UserFromDb.name) {
      setUserForm(UserFromDb);
    }
  }, [UserFromDb]);

  return (
    <>
      (
      <div className="flex flex-col justify-center items-center pt-10">
        <div>
          <h1 className="text-3xl">
            Bienvenido <span className="text-violet-800">{user.email}</span>
          </h1>
          <p className="text-center">
            {UserFromDb.name
              ? "Es bueno tenerte de vuelta"
              : "Completa tus datos para una mejor experiencia"}
          </p>
        </div>

        <div className="w-2/4">
          <form onSubmit={handleSubmit} className="p-4">
            <div className="mb-4">
              {UserFromDb.profileIMG ? (
                <Image
                  src={UserFromDb.profileIMG}
                  alt="user"
                  width={200}
                  height={200}
                />
              ) : null}
              <label htmlFor="name" className="block font-bold mb-2">
                Nombre
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={userForm.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-4 hidden">
              <label htmlFor="email" className="block font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={userForm.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="direction" className="block font-bold mb-2">
                Direccion
              </label>
              <input
                type="text"
                name="direction"
                id="direction"
                value={userForm.direction}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="cellPhone" className="block font-bold mb-2">
                Telefono/Celular
              </label>
              <input
                type="tel"
                name="cellPhone"
                id="cellPhone"
                value={userForm.cellPhone}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="gender" className="block font-bold mb-2">
                Gender
              </label>
              <select
                name="Gender"
                id="Gender"
                value={userForm.Gender}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
              >
                <option value="">Elegir...</option>
                <option value="male">Masculino</option>
                <option value="female">Femenino</option>
                <option value="non-binary">No binario</option>
              </select>
            </div>
            <div>
              <label htmlFor="profileIMG" className="block font-bold mb-2">
                Imagen de perfil
              </label>
              <input
                type="file"
                accept="image/*"
                name="userImage"
                id="userImage"
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Actualizar Informacion
            </button>
          </form>
        </div>
      </div>
      )
      {/* {!Error && (
        <div className="flex flex-col justify-center items-center pt-10">
          <div>
            <h1 className="text-3xl text-center">
              Bienvenido{" "}
              <span className="text-violet-800">{UserFromDb?.name}</span>
            </h1>
            <div>
              <button className="bg-violet-800 text-white px-4 py-2 rounded hover:bg-blue-700">
                Editar perfil
              </button>
            </div>
          </div>

          <div className="flex justify-center items-center w-full">
            <div>
              <p>Email: {UserFromDb?.email}</p>
              <p>Direccion: {UserFromDb?.direction}</p>
              <p>Telefono: {UserFromDb?.cellPhone}</p>
              <p>Genero: {UserFromDb?.Gender}</p>
            </div>
            <div>
              <img src={UserFromDb?.profileIMG} className="w-1/2" alt="" />
            </div>
          </div>
        </div>
      )} */}
    </>
  );
};

export default withPageAuthRequired(User);
