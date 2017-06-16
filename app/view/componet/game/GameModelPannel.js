/**
 * Created by soga on 2017/4/20.
 */
import React, {Component, PropTypes} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import MoneyUnit from './MoneyUnit';
import MultipleBtnGrounp from "./MultipleBtnGrounp";
import CleanBalls from "./CleanBalls";
import SelectAutoOne from "./SelectAutoOne";


export default class GameModelPannel extends Component {

    constructor(props) {
        super(props);
    }

    static defaultProps = {
        isShowMoneyUnit: true//是否展示圆角分模式
    };

    showMoneyUnit(moneyUnit) {
        return ( <MoneyUnit moneyMode={moneyUnit}/>)
    }

    render() {
        const me = this;
        const {moneyUnit, multiple, maxMultiple, isShowMoneyUnit, checkBallIsComplete, cleanBall, randomSelct} = this.props;
        return (
            <View style={styles.moneyOperateBox}>
                {/*<CleanBalls cleanBall={cleanBall}/>*/}
                <SelectAutoOne randomSelct={randomSelct}/>
                <MultipleBtnGrounp multiple={multiple} maxMultiple={maxMultiple}
                                   checkBallIsComplete={checkBallIsComplete}/>
                {isShowMoneyUnit ? me.showMoneyUnit(moneyUnit) : null}

            </View>
        );

    }

}


const styles = StyleSheet.create({

    moneyOperateBox: {
        flexDirection: 'row',
        marginBottom: 10,
        justifyContent: 'space-between'
    }

});