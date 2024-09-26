import React from "react";

interface UserProfileProps {
  params: {
    username: string;
  };
}

const UserProfile = ({ params }: UserProfileProps) => {
  return <div>page {params.username}</div>;
};

export default UserProfile;
