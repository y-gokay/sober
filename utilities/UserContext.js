import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    plateNumber: "",
    gearType: "",
    verificationCode: "",
    isVerified: false,
  });

  const [users, setUsers] = useState([]);

  const updateUser = (newData) => {
    setUserData((prev) => {
      const updated = { ...prev, ...newData };
      AsyncStorage.setItem("userData", JSON.stringify(updated));
      return updated;
    });
  };

  const addUser = async (newUser) => {
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    await AsyncStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const loadStoredData = async () => {
    try {
      const storedUser = await AsyncStorage.getItem("userData");
      const storedUsers = await AsyncStorage.getItem("users");

      if (storedUser) setUserData(JSON.parse(storedUser));
      if (storedUsers) setUsers(JSON.parse(storedUsers));
    } catch (error) {
      //console.log("AsyncStorage read error:", error);
    }
  };

  useEffect(() => {
    loadStoredData();
  }, []);

  return (
    <UserContext.Provider
      value={{ userData, updateUser, users, addUser, setUsers }}
    >
      {children}
    </UserContext.Provider>
  );
};
