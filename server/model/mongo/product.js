/**
 * Created by yujintang on 2017/2/10.
 */
'use strict';

/**
 * Created by yujintang on 2017/2/8.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var temp = new Schema({

    name: {
        type: String,
        required: true
    },
    logo: {
        type: String
    },
    info: {
        type: String
    },
    status: {
        type: Number,
        default: 1 //1:正常 0:关闭 -1:存在异常
    }

}, {
    versionKey: false //控制 __v 的输出
});

module.exports = mongoose.model('Product', temp);