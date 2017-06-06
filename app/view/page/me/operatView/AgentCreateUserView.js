/**
 * Created by thomas on 2017/6/2.
 */
/**
 * Created by thomas on 2017/6/2.
 */
import React from 'react';
import {
    View,
    Text, StyleSheet,
    Switch,
    TextInput,
    Slider,
} from 'react-native';

import {connect} from 'react-redux';
import BaseView from "../../../componet/BaseView";
import AwardListView from "../../../componet/BaseListView";
import SegmentedControlTab from "react-native-segmented-control-tab";
import Button from "react-native-button";
import AIcon from 'react-native-vector-icons/FontAwesome';
const mapStateToProps = state => {
    return {
        // gameModel:state.get("appState").get("gameModel"),
    }
}

@connect(mapStateToProps)
export default class AgentCreateUserView extends BaseView {
    constructor(props) {
        super(props)
        this.state = {
            selectedTabIndex: 0,
            switchValue: false,
            value:0
        };

    }

    renderBody() {
        return (<View>
            <SegmentedControlTab
                values={['人工开户', '链接开户']}
                onTabPress={this.onTabChange}
                tabsContainerStyle={{marginLeft: 40, marginRight: 40, alignSelf: "center", margin: 5}}
                tabStyle={{borderColor: "#a52a2a",borderWidth:StyleSheet.hairlineWidth,borderStyle: 'dashed'}}
                selectedIndex={this.state.selectedTabIndex}
                activeTabStyle={{backgroundColor: "#a52a2a",borderWidth:2}}
                borderRadius={10}
            />
            <View style={{width: 300, alignSelf: "center"}}>
                <View style={{flexDirection: "row",alignItems: "center", justifyContent: "space-between"}}>
                    <Text style={{textAlign:"right"}}>账户类型</Text>
                    <Switch style={{marginLeft: 20}} value={this.state.switchValue} onValueChange={(switchValue) => {
                        this.setState({switchValue})
                    }}/>
                </View>
                <View style={{flexDirection: "row",alignItems: "center", justifyContent: "space-between"}}>
                    <Text style={{textAlign:"right"}}>设置账号信息</Text>
                    <View>
                        <TextInput
                            style={styles.textStyle}
                            onChangeText={(pwdText) => this.setState({pwdText: pwdText})}
                            value={this.state.pwdText}
                            placeholder={"设置账户"}
                            multiline={false}
                            underlineColorAndroid={'transparent'}
                        />
                        <TextInput
                            style={[styles.textStyle,{marginTop:10}]}
                            onChangeText={(pwdText) => this.setState({pwdText: pwdText})}
                            value={this.state.pwdText}
                            placeholder={"设置密码"}
                            secureTextEntry={true}
                            multiline={false}
                            underlineColorAndroid={'transparent'}
                        />
                    </View>
                </View>
                <View style={{flexDirection: "row",marginTop: 30,alignItems: "center", justifyContent: "space-between"}}>
                    <Text style={{textAlign:"right"}}>设置奖金组</Text>
                    <Text style={{textAlign:"left"}}>1956 预计平均返点率 0.00%</Text>
                </View>
                <View style={{flexDirection: "row",marginTop: 30,alignItems: "center", justifyContent: "space-between"}}>
                    <Slider
                        value={this.state.value}
                        step={10}
                        maximumValue={200}
                        minimumValue={0}
                        minimumTrackTintColor={"red"}
                        maximumTrackTintColor={"blue"}
                        thumbTintColor={"yellow"}
                        style={{height: 10, flex:1, marginLeft:20}}
                        onValueChange={(value) =>{ this.setState({value: value})
                            TLog("onValueChange-----------",value)
                        }} />
                </View>
                <Button
                    containerStyle={{
                        padding: 5,
                        margin: 10,
                        overflow: 'hidden',
                        borderRadius: 3,
                        backgroundColor: '#d7213c'
                    }}
                    style={{fontSize: 14, color: "white"}}
                    styleDisabled={{color: '#fff'}}
                    onPress={this.clickLogin}>
                    立即开户
                </Button>
            </View>
        </View>)
    }

    onTabChange = (index) => {
        this.setState({index});
    }
}
const styles = StyleSheet.create({
    textStyle: {
        width: 150,
        left: 10,
        fontSize: 14,
        height: 30,
        borderWidth:1,
        borderRadius:5,
        textAlign:"center"
    },
    iconUser: {
        color: G_Theme.grayDeep,
        fontSize: 18,
    },
    icoPwd: {
        color: G_Theme.grayDeep,
        fontSize: 20,
    },
    inputContain: {
        paddingBottom: 5,
        marginTop: 15,
        paddingLeft: 5,
        flexDirection: "row",
        height: 40,
        justifyContent: "flex-start",
        alignItems: "center",
        borderColor: 'gray',
        borderBottomWidth: 0.5,
    }
});