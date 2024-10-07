import { StatusBar, View } from "react-native";
import React from "react";

import Login from "@/Containers/Profile/Login";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import ProfileInfo from "@/Containers/Profile/ProfileInfo";

const Profile: React.FC = () => {
  const { user } = useSelector((store: RootState) => store.profile);

  return (
    <View>
      {!user.isLoggedUp && <Login />}
      {user.isLoggedUp && <ProfileInfo />}
    </View>
  );
};

export default Profile;
