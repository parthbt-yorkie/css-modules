import React from "react";
import "./UserCard.css";

interface UserCardProps {
  name?: string;
  role?: string;
  email?: string;
}

const UserCard: React.FC<UserCardProps> = ({
  name = "John Doe",
  role = "Developer",
  email = "john@example.com",
}) => {
  return (
    <div className="card">
      <h3 className="card-title">{name}</h3>
      <div className="card-content">
        <p>
          <strong>Role:</strong> {role}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <button>Edit Profile</button>
      </div>
    </div>
  );
};

export default UserCard;
