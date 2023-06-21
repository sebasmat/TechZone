import React, { ReactElement, useEffect, useState } from "react";
import UserInterface from "@/interfaces/userInterface";
import axios from "axios";
import { NextPageWithLayout } from "@/pages/_app";
import AdminLayout from "@/layout/admin-layout";

const Users: NextPageWithLayout = () => {
  const [users, setUsers] = useState<UserInterface[]>([]);

  const handlePutUser = async (user: UserInterface) => {
    try {
      await axios.put(`http://localhost:3001/create/User/estate/${user.email}`);
      const { data } = await axios.get("http://localhost:3001/users/all");
      setUsers(data);
      alert("Usuario actualizado correctamente");
    } catch (error: any) {
      alert(error.message);
    }
  };

  useEffect(() => {
    fetch("http://localhost:3001/users/all")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);
  return (
    <div className="px-16 py-10 mx-auto flex flex-wrap gap-4">
      {users &&
        users.map((user) => (
          <div
            key={user.email}
            className="tz-card w-80 bg-base-100 shadow-xl tz-card-bordered"
          >
            <div className="tz-avatar pt-10 flex justify-center">
              <div className="w-24 rounded-full">
                <img src={user.profileIMG} />
              </div>
            </div>
            <div className="tz-card-body items-center text-center">
              <h2 className="tz-card-title">{user.name}</h2>
              <p className="tz-badge tz-badge-neutral">Correo: {user.email}</p>
              <p className="tz-badge tz-badge-neutral">
                Numero: {user.cellPhone}
              </p>
              <p className="tz-badge tz-badge-neutral">Genere: {user.Gender}</p>
              <div className="tz-card-actions justify-end">
                {/*<button*/}
                {/*  className="tz-btn tz-btn-primary"*/}
                {/*  onClick={() => handlePutUser(user)}*/}
                {/*>*/}
                {/*  {user.available ? "Desactivar" : "Activar"}*/}
                {/*</button>*/}

                <div className="tz-join">
                  <span
                    className="tz-join-item tz-btn"
                    onClick={(e) => handlePutUser(user)}
                  >
                    Cambiar Estado
                  </span>
                  <div className=" tz-join-item tz-btn tz-btn-secondary" id="a">
                    {user.available ? "Activo" : "Inactivo"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
Users.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};
export default Users;
