import React, {Component} from "react";
import {
  Image,
  ScrollView,
  Text,
  TouchableHighlight,
  View
} from "react-native";
import { FontAwesome } from '@expo/vector-icons';

class LandingPage extends Component {
  static navigationOptions = {
    headerTitle: <Text>Unofficial MangaDex Tracker</Text>
  };

  constructor(props) {
    super(props);
    this.state = {
      tabSelected: 0
    };
  }

  render() {
    return(
      <View style={{flex: 1}}>
        {/*<View style={{backgroundColor: "#f2f2f2", marginTop: 20, width: "100%", height: 50, alignItems: "center", justifyContent: "center"}}>
          <Text>Manga Reader</Text>
        </View>*/}
        <ScrollView style={{marginTop: 10, width: "100%", height: "100%"}}>
          <View style={{borderRadius: 5, width: "100%", height: "100%", padding: 10}}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#f2f2f2",
                borderRadius: 5,
                width: "100%",
                height: 50}}
            >              
              <View style={{flex: 9, alignItems: "center"}}>
                <Text>Your Followed Manga</Text>
              </View>
              <View style={{flex: 1}}>
                <TouchableHighlight style={{width: "100%", height: "100%"}}>
                  <View style={{backgroundColor: "green", height: "100%", width: "100%", alignItems: "center", justifyContent: "center", borderRadius: 5}}>
                    <FontAwesome name="plus" size={14} color="white"/>
                  </View>
                </TouchableHighlight>
              </View>
            </View>
          {/*
            <View style={{flexDirection: "row"}}>
              <TouchableHighlight style={{flex: 1, height: 35}} onPress={()=>{this.setState({tabSelected: 0});}}>
                <View
                  style={{
                    borderRadius: 5,
                    width: "100%",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: this.state.tabSelected == 0 ? "#337ab7" : "#f2f2f2"
                  }}
                >
                  <Text style={{ color: this.state.tabSelected == 0 ? "white" : "black"}}>All</Text>
                </View>
              </TouchableHighlight>
              <TouchableHighlight style={{flex: 1, height: 35}} onPress={()=>{this.setState({tabSelected: 1});}}>
                <View
                  style={{
                    borderRadius: 5,
                    width: "100%",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: this.state.tabSelected == 1 ? "#337ab7" : "#f2f2f2"
                  }}
                >
                  <Text style={{ color: this.state.tabSelected == 1 ? "white" : "black"}}>Follows</Text>
                </View>
              </TouchableHighlight>
            </View>
          */}
            <TouchableHighlight style={{width: "100%", height: 100, margin: 5}}>
              <View style={{flexDirection: "row"}}>
                <View style={{flex: 1, margin: 2}}>
                  <Image
                    style={{width: "100%", height: "100%"}}
                    source={{uri: "https://mangadex.org/images/manga/22422.thumb.jpg"}}
                  />
                </View>
                <View style={{margin: 2, flex: 5, flexDirection: "column"}}>
                  <View style={{width: "100%"}}>
                    <Text style={{fontSize: 14}}>Force Field Girl</Text>
                  </View>
                  <View style={{width: "100%"}}>
                    <Text style={{fontSize: 12}}>Chapter 19</Text>
                  </View>
                  <View style={{width: "100%"}}>
                    <Text style={{fontSize: 12}}>Fe Scans</Text>
                  </View>
                  <View style={{width: "100%"}}>
                    <Text style={{fontSize: 12}}>26 Mins</Text>
                  </View>
                </View>
              </View>
            </TouchableHighlight>

          </View>
        </ScrollView>
      </View>
    )
  }
}

export default LandingPage;