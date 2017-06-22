/**
 * Created by soga on 2017/5/8.
 */

import L115Danshi from "./L115Danshi";

export default class ErmaZhixuanDanshi extends L115Danshi {

    constructor(props) {
        super(props);

    }

    //设置球排列
    setBalls = () => [
        [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
    ];

    //检测单注号码是否通过
    checkSingleNum(lotteryNum) {
        const me = this;
        return me.checkData(lotteryNum,2)
    }

}
