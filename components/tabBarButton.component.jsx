import * as React from "react";
import { Animated, TouchableWithoutFeedback, View } from "react-native";

function TabBarButton({ children, navigation, route }) {
    const YAnimated = React.useRef(new Animated.Value(0)).current;
    
    const animationStart = Animated.timing(YAnimated, {
        toValue: -6,
        duration: 100,
        useNativeDriver: true,
    });
    const animationEnd = Animated.timing(YAnimated, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
    });


    const handlePressBottom = () => {
    if (navigation.isFocused()) {
        animationStart.start();
        setTimeout(() => animationEnd.start(), 200);
    } else {
      navigation.navigate(route.name);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePressBottom}>
      <Animated.View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          transform: [{ translateY: YAnimated }],
        }}
      >
        {children}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

export default TabBarButton;
