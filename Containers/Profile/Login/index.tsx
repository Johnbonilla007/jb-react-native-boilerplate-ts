import { View } from "react-native";
import React, { useState } from "react";

import { useTranslate } from "@/hooks/UseTranslate";
import {
  ThemedView,
  ThemedText,
  ThemedTouchableOpacity,
  ThemedTextInput,
} from "@/components/controls";
import { showToast } from "@/Helpers";
import { LoginService } from "./Login.Service";
import { RequestAthenticate, ResponseAthenticate } from "./settings";
import { useDispatch } from "react-redux";
import { setLogin } from "@/store/slices/profileSlice";
import { styles } from "./styles";

const Login: React.FC = () => {
  const { translate } = useTranslate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const auth = async () => {
    const request: RequestAthenticate = { userName, password };

    const response: ResponseAthenticate = await LoginService.authenticate(
      request
    );

    if (response.success) {
      showToast("success", translate("loginSuccessfully"));
      const userLogin = {
        username: response.user.userName,
        fullName: response.user.fullName,
        isLoggedUp: true,
      };
      dispatch(setLogin(userLogin));
      return;
    }

    showToast("error", translate(response.validationErrorMessage));
  };

  return (
    <View style={styles.container}>
      <ThemedText style={styles.sectionHeader}>
        {translate("loginWithEmail")}
      </ThemedText>
      <ThemedView style={styles.inputsContainer}>
        <ThemedTextInput
          placeholder={translate("email")}
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(text) => setUserName(text)}
        />
        <ThemedTextInput
          placeholder={translate("password")}
          secureTextEntry={true}
          autoCapitalize="none"
          onChangeText={(text) => setPassword(text)}
        />
      </ThemedView>

      <ThemedView style={styles.row}>
        <ThemedText style={styles.text}>{translate("showPassword")}</ThemedText>
        <ThemedText style={styles.linkText}>{translate("forgot")}</ThemedText>
      </ThemedView>

      <ThemedView style={styles.containerButton}>
        <ThemedTouchableOpacity style={styles.button} onPress={auth}>
          <ThemedText style={styles.buttonText}>
            {translate("signin")}
          </ThemedText>
        </ThemedTouchableOpacity>
      </ThemedView>
    </View>
  );
};

export default Login;
