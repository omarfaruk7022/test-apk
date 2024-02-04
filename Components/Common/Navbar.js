import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";

function Navbar() {
  return (
    //   safe area view is used to make sure the content is not hidden by the status bar
    <SafeAreaView
      style={{
        display: "flex",

        padding: 20,
      }}
    >
      {/* <View style={{ display: "flex" }}>
        <TouchableOpacity>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Details</Text>
        </TouchableOpacity>
      </View> */}
    </SafeAreaView>
  );
}

export default Navbar;
