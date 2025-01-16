import React, { useState } from "react";
import "./GetUsers.css"; 

const GetUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modal, setModal] = useState({ show: false, userId: null });

  const fetchAddress = "https://jsonplaceholder.typicode.com/users/";

  const getUsersHandler = async () => {
    const userID = prompt("Введите id пользователя! (1-10)");

    if (!userID || isNaN(userID) || userID < 1 || userID > 10) {
      alert("Пользователь с таким ID не существует!");
      return;
    }

    const exist_id = users.find((user) => user.id === +userID);
    if (exist_id) {
      alert("Пользователь с таким ID уже есть!");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const res = await fetch(fetchAddress + userID);
      if (!res.ok) throw new Error("Ошибка при загрузке данных");
      const user = await res.json();
      setUsers((prevUsers) => [...prevUsers, user]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const confirmDeleteHandler = (id) => {
    setModal({ show: true, userId: id });
  };

  const deleteUserHandler = () => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== modal.userId));
    setModal({ show: false, userId: null });
  };

  const closeModal = () => {
    setModal({ show: false, userId: null });
  };

  return (
    <div className="container">
      <button className="fetch-button" onClick={getUsersHandler} disabled={loading}>
        {loading ? "Загрузка..." : "Получить пользователя по ID"}
      </button>

      {error && <p className="error">Ошибка: {error}</p>}

      <div className="users-list">
        {users.map((user) => (
          <div key={user.id} className="user-card">
            <h2 className="user-name">{user.name}</h2>
            <p className="user-info">ID: {user.id}</p>
            <p className="user-info">Email: {user.email}</p>
            <button className="delete-button" onClick={() => confirmDeleteHandler(user.id)}>
              Удалить
            </button>
          </div>
        ))}
      </div>

      {modal.show && (
        <div className="modal-overlay">
          <div className="modal">
            <p>Вы уверены, что хотите удалить этого пользователя?</p>
            <div className="modal-buttons">
              <button className="confirm-button" onClick={deleteUserHandler}>Да</button>
              <button className="cancel-button" onClick={closeModal}>Нет</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GetUsers;