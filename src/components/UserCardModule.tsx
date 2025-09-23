import React from "react";
import styles from "./UserCardModule.module.css";

interface UserCardModuleProps {
  name?: string;
  role?: string;
  email?: string;
}

const UserCardModule: React.FC<UserCardModuleProps> = ({
  name = "John Doe",
  role = "Developer",
  email = "john@example.com",
}) => {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{name}</h3>
      <div className={styles.content}>
        <p>
          <strong>Role:</strong> {role}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <button className={styles.button}>Edit Profile</button>
      </div>
    </div>
  );
};

export default UserCardModule;
