import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import BackBtn from "../components/products/BackBtn";
import styles from "./login.style";
import Button from "../components/products/Button";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Formik } from "formik";
import * as Yup from "yup";
import { COLORS, SIZES } from "../constants";

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Password must be at least 8 charater")
    .required("Required"),
  email: Yup.string()
    .email("Provide a valid email address")
    .required("Required"),
});


const LoginPage = ({ navigation }) => {
  const inValidForm = () =>{
    Alert.alert(
      "Invalid Form",
      "Please provide all required fields",
      [
        {
          text: "Cancel",
          onPress: () => {},
          style: "cancel",
        },
        
        { text: "OK", onPress: () => {
            
        } },
      ],
    )
  }
  const [loader, setLoader] = useState(false);
  const [reponseData, setReposeData] = useState(null);
  const [obsecureText, setObsecureText] = useState(null);

  return (
    <ScrollView>
      <SafeAreaView style={{ marginHorizontal: 20 }}>
        <View>
          <BackBtn
            onPress={() => {
              navigation.goBack();
            }}
          />
          <Image
            source={require("../assets/images/bk.png")}
            style={styles.cover}
          />
          <Text style={styles.title}>Unlimited Luxurious Watch</Text>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={(values) => console.log(values)}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              isValid,
              setFieldTouched,
              touched,
            }) => (
              <View>
                <View style={styles.wrapper}>
                  <Text style={styles.lable}>Email</Text>
                  <View
                    style={styles.inputWrapper(
                      touched.email ? COLORS.secondary : COLORS.offwhite
                    )}
                  >
                    <MaterialCommunityIcons
                      name="email-outline"
                      size={20}
                      color={COLORS.gray}
                      style={styles.iconstyle}
                    />
                    <TextInput
                      placeholder="  Enter Email"
                      onFocus={() => {
                        setFieldTouched("email");
                      }}
                      onBlur={() => {
                        setFieldTouched("email", "");
                      }}
                      value={values.email}
                      onChangeText={handleChange("email")}
                      autoCapitalize="none"
                      autoCorrect={false}
                      style={{ flex: 1 }}
                    />
                  </View>
                </View>
                {touched.email && errors.email && (
                  <Text
                    style={{
                      color: "red",
                      fontFamily: "regular",
                      marginLeft: 5,
                      marginTop: 0,
                      fontSize: SIZES.xSmall,
                    }}
                  >
                    {errors.email}
                  </Text>
                )}
                <View style={styles.wrapper}>
                  <Text style={styles.lable}>Password</Text>
                  <View
                    style={styles.inputWrapper(
                      touched.password ? COLORS.secondary : COLORS.offwhite
                    )}
                  >
                    <MaterialCommunityIcons
                      name="lock-outline"
                      size={20}
                      color={COLORS.gray}
                      style={styles.iconstyle}
                    />
                    <TextInput
                      secureTextEntry={obsecureText}
                      placeholder="  Password"
                      onFocus={() => {
                        setFieldTouched("password");
                      }}
                      onBlur={() => {
                        setFieldTouched("password", "");
                      }}
                      value={values.password}
                      onChangeText={handleChange("password")}
                      autoCapitalize="none"
                      autoCorrect={false}
                      style={{ flex: 1 }}
                    />
                    <TouchableOpacity
                      onPress={() => {
                        setObsecureText(!obsecureText);
                      }}
                    >
                      <MaterialCommunityIcons
                        name={obsecureText ? "eye-outline" : "eye-off-outline"}
                        size={18}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                {touched.password && errors.password && (
                  <Text
                    style={{
                      color: "red",
                      fontFamily: "regular",
                      marginLeft: 5,
                      marginTop: 0,
                      fontSize: SIZES.xSmall,
                    }}
                  >
                    {errors.password}
                  </Text>
                )}
                <Button
                  title={"L O G I N"}
                  isValid={isValid}
                  onpress={isValid ? handleSubmit : inValidForm}
                />
                <Text onPress={()=>{navigation.navigate('SignUp')}} style={styles.registration}>Don't have in accout ? Register</Text>
              </View>
            )}
          </Formik>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default LoginPage;
