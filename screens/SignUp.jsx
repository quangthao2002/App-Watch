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
import { MaterialCommunityIcons,Ionicons,SimpleLineIcons,EvilIcons } from "@expo/vector-icons";

import { Formik } from "formik";
import * as Yup from "yup";
import { COLORS, SIZES } from "../constants";
import axios from "axios";

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Password must be at least 8 charater")
    .required("Required"),
  email: Yup.string()
    .email("Provide a invalid email address")
    .required("Required"),
    username: Yup.string()
    .min(3,"Provide a invalid name")
    .required("Required"),
});




const SignUp = ({navigation}) => {
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
  const registerUser = async(values)=>{
      setLoader(true);
      try {
        const endpoint ='http://localhost:3000/api/register';
        const data = values

        const response = await axios.post(endpoint,data)
        if(response.status === 201){
          navigation.replace('Login')
        }
      } catch (error) {
          console.log(error);
      }
  }
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
          style={{
            height: SIZES.height / 2.5,
            width: SIZES.width - 60,
            resizeMode: "contain",
            marginBottom: SIZES.xxLarge,
          }}
        />
        <Text style={styles.title}>Unlimited Luxurious Watch</Text>

        <Formik
          initialValues={{ email: "", password: "" ,username:''}}
          validationSchema={validationSchema}
          onSubmit={(values) => registerUser(values)}
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
              
              <Text style={styles.lable}>Name</Text>
              <View
                style={styles.inputWrapper(
                  touched.email ? COLORS.secondary : COLORS.offwhite
                )}
              >
                <MaterialCommunityIcons
                  name="face-man-profile"
                  size={20}
                  color={COLORS.gray}
                  style={styles.iconstyle}
                />
                <TextInput
                  placeholder="  Enter Name"
                  onFocus={() => {
                    setFieldTouched("username");
                  }}
                  onBlur={() => {
                    setFieldTouched("username", "");
                  }}
                  value={values.username}
                  onChangeText={handleChange("username")}
                  autoCapitalize="none"
                  autoCorrect={false}
                  style={{ flex: 1 ,marginLeft:5}}
                />
              </View>
            </View>
            {touched.username && errors.username && (
              <Text
                style={{
                  color: "red",
                  fontFamily: "regular",
                  marginLeft: 5,
                  marginTop: 0,
                  fontSize: SIZES.xSmall,
                }}
              >
                {errors.username}
              </Text>
            )}
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
                loader={loader}
                title={"S I G N U P"}
                isValid={isValid}
                onpress={isValid ? handleSubmit : inValidForm}
              />
            </View>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  </ScrollView>
  )
}

export default SignUp
