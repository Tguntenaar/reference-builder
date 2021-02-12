import * as React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { Feather } from "@expo/vector-icons";
import { Image as CacheImage } from "react-native-expo-image-cache";
import NextButton from "../NextButton";

// Constants
import { blankImage } from "../../constants/Images";
import styles from "./style";

const TeamMember = ({ teamMember, color, onPress }) => {
  const preview = {
    uri:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==",
  };
  const uri =
    "https://firebasestorage.googleapis.com/v0/b/react-native-e.appspot.com/o/b47b03a1e22e3f1fd884b5252de1e64a06a14126.png?alt=media&token=d636c423-3d94-440f-90c1-57c4de921641";

  return (
    <View style={[styles.Box, { backgroundColor: color }]}>
      <View style={styles.circleBox}>
        {/* 
          <CacheImage style={styles.image} {...{ preview, uri }} />
        */}
        <Image style={styles.image} source={blankImage} />
      </View>
      <View style={styles.textBox2}>
        <View style={styles.textBox}>
          <Text style={styles.title}>{teamMember.name}</Text>
          <Text style={styles.description}>{teamMember.jobTitle}</Text>
        </View>
        {onPress ? (
          <TouchableOpacity onPress={onPress}>
            <Feather name="play" color="blue" style={styles.playIcon} />
          </TouchableOpacity>
        ) : null}

        {/**
          <NextButton size={45} textSize={15} title="Request evaluation" onPress={handlePress} />
        */}
      </View>
    </View>
  );
};

TeamMember.propTypes = {
  teamMember: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    jobTitle: PropTypes.string,
  }).isRequired,
  color: PropTypes.string,
  onPress: PropTypes.func,
};

TeamMember.defaultProps = {
  color: "rgb(239,244,253)",
};

export default TeamMember;
