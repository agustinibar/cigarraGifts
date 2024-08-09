import React, { useState, useEffect } from 'react';
import { auth, db } from '../../firebase/config'; // Ajusta la ruta si es necesario
import { doc, getDoc, setDoc } from 'firebase/firestore';
import styles from './userProfile.module.css';
import { onAuthStateChanged } from 'firebase/auth';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({});
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (userAuth) => {
      if (userAuth) {
        const userDoc = await getDoc(doc(db, 'users', userAuth.uid));
        if (userDoc.exists()) {
          setUser(userDoc.data());
          setEditedUser(userDoc.data());
          setImagePreview(userDoc.data().image);
        }
      }
    });
    return () => unsubscribe();
  }, []);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setEditedUser({ ...editedUser, image: reader.result });
      setImagePreview(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    if (user) {
      await setDoc(doc(db, 'users', auth.currentUser.uid), editedUser);
      setUser(editedUser);
      setIsEditing(false);
    }
  };

  if (!user) {
    return <h2>Cargando perfil...</h2>;
  }

  return (
    <div className={styles.profile}>
      <h2>Perfil de Usuario</h2>
      {isEditing ? (
        <div className={styles.editForm}>
          <input
            type="text"
            name="name"
            value={editedUser.name}
            onChange={handleInputChange}
            placeholder="Nombre"
          />
          <input
            type="email"
            name="email"
            value={editedUser.email}
            onChange={handleInputChange}
            placeholder="Correo Electrónico"
          />
          <input
            type="text"
            name="address"
            value={editedUser.address}
            onChange={handleInputChange}
            placeholder="Dirección"
          />
          <input
            type="file"
            name="image"
            onChange={handleImageChange}
          />
          {imagePreview && (
            <img src={imagePreview} alt="Preview" className={styles.imagePreview} />
          )}
          <button onClick={handleSave} className={styles.saveButton}>Guardar</button>
          <button onClick={handleEditToggle} className={styles.cancelButton}>Cancelar</button>
        </div>
      ) : (
        <div className={styles.userInfo}>
          {user.image && (
            <img src={user.image} alt="Profile" className={styles.profileImage} />
          )}
          <p><strong>Nombre:</strong> {user.name}</p>
          <p><strong>Correo Electrónico:</strong> {user.email}</p>
          <p><strong>Dirección:</strong> {user.address}</p>
          <button onClick={handleEditToggle} className={styles.editButton}>Editar Perfil</button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
