import React from "react";
import styled from "styled-components/native";
import { View, Text, StyleSheet } from "react-native";
import {
  ThemedText,
  ThemedTouchableOpacity,
  ThemedView,
} from "@/components/controls";
import { useDispatch } from "react-redux";
import { setLogin } from "@/store/slices/profileSlice";
import { useTranslate } from "@/hooks/UseTranslate";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { showToast } from "@/Helpers";

// Define styled components
const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  top: 100;
`;

const StyledText = styled(Text)`
  font-size: 24px;
  font-weight: bold;
`;

// Define the props interface if needed
interface ProfileInfoProps {
  // Add props if needed
}

const ProfileInfo: React.FC<ProfileInfoProps> = () => {
  const { translate } = useTranslate();
  const { user } = useSelector((store: RootState) => store.profile);
  const dispatch = useDispatch();

  return (
    <ThemedView style={styles.container}>
      <ThemedText>{user.fullName}</ThemedText>
      <ThemedText>{user.username}</ThemedText>
      <ThemedTouchableOpacity
        style={styles.button}
        onPress={() => dispatch(setLogin({ isLoggedUp: false }))}
      >
        <ThemedText style={styles.buttonText}>
          {translate("signout")}
        </ThemedText>
      </ThemedTouchableOpacity>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    position: "absolute",
    right: 0,
    left: 0,
    top: 250,
  },
  button: {
    padding: 15,
    borderRadius: 10,
    width: "100%",
    elevation: 5,
  },
  buttonText: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
  containerButton: {
    width: "100%",
    alignItems: "center",
  },
});

export default ProfileInfo;
