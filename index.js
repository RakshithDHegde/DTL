import React from "react";
import {
  AppRegistry,
  Environment,
  VideoModule,
  StyleSheet,
  NativeModules,
  Text,
  View,
  VrButton,
  VideoControl,
  MediaPlayerState,
  Video,
  Image,
  asset,
} from "react-360";
const EventEmitter = require("EventEmitter");
const Linking = NativeModules.Linking;
const { AudioModule } = NativeModules;
class Info1 extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text>Quiz !!</Text>
          {/* <Video ></Video> */}
          <Image style={styles.image} source={asset("quiz.jpg")} />
        </View>
        <VrButton
          onEnter={() =>
            NativeModules.LinkingManager.openURL(
              "https://quizizz.com/join/quiz/6333d05803d606001e021dcd/start"
            ).catch((err) => console.error("An error occurred", err))
          }
        >
          <Text style={styles.greeting}>
            Click Here !! and know your understanding!!{" "}
          </Text>
        </VrButton>
        {/* <Image source={asset("binary.gif")} /> */}
      </View>
    );
  }
}

class Info extends React.Component {
  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text>Binary Search</Text>
          <Video
            style={styles.image}
            muted="false"
            source={asset("binary.mp4")}
            loop="true"
          />

          {/* <Video ></Video> */}
        </View>
        <VrButton
          onEnter={() =>
            NativeModules.LinkingManager.openURL(
              "https://codepen.io/rakshith1440/full/rNvJNze"
            ).catch((err) => console.error("An error occurred", err))
          }
        >
          <Text style={styles.greeting}>
            Click Here !! To experience and interact with visualization{" "}
          </Text>
        </VrButton>
        {/* <Image source={asset("binary.gif")} /> */}
      </View>
    );
  }
}
export default class Dtl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerState: new MediaPlayerState({ autoPlay: false, muted: false }), // init with muted, autoPlay
    };
  }
  render() {
    // AudioModule.playEnvironmental({
    //   source: asset("mp3.mp3"),
    //   volume: 1, // play at 3/10 original volume,
    //   loop: false,
    // });
    return (
      <View style={styles.panel}>
        <View style={styles.greetingBox}>
          <Text>Visualization of Binary Search </Text>
          <Video
            source={asset("mp4.mp4")}
            style={styles.image}
            muted={false}
            playerState={this.state.playerState}
          />
          <VideoControl
            style={{ height: 20, width: 950 }}
            playerState={this.state.playerState}
          />
          {/* <Video ></Video> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    // justifyContent: "center",
    alignItems: "center",
  },
  greetingBox: {
    padding: 20,
    backgroundColor: "#000000",
    borderColor: "#639dda",
    borderWidth: 2,
  },
  greeting: {
    fontSize: 25,
  },
  image: {
    width: 950,
    height: 500,
  },
});

AppRegistry.registerComponent("Dtl", () => Dtl);
AppRegistry.registerComponent("Info", () => Info);
AppRegistry.registerComponent("Info1", () => Info1);
