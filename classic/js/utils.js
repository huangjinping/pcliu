/**
 * Created by harrishuang on 2019/3/4.
 */
function getParameter(name) {
    var quary = window.location.search;
    var len = quary.length;
    var start = quary.indexOf(name);
    if (start == -1) {
        return "";
    }
    var end = quary.indexOf("&", start);
    if (end == -1) {
        var param = quary.substring(start);
        return param.split("=")[1];
    }
    var param = quary.substring(start, end);
    return param.split("=")[1];
}


function myTrim(x) {
    return x.replace(/\s+/g, "");
//        return x.replace(/^\s+|\s+$/gm,'');
}

String.prototype.trim = function () {
    return this.replace(/(^\s*)|(\s*$)/g, "");
}
String.prototype.ltrim = function () {
    return this.replace(/(^\s*)/g, "");
}
String.prototype.rtrim = function () {
    return this.replace(/(\s*$)/g, "");
}

String.prototype.startWith = function (str) {
    if (str == null || str == "" || this.length == 0 || str.length > this.length)
        return false;
    if (this.substr(0, str.length) == str)
        return true;
    else
        return false;
    return true;
}

String.prototype.endWith = function (str) {
    if (str == null || str == "" || this.length == 0 || str.length > this.length) {
        return false;
    }
    if (this.substring(this.length - str.length)) {
        return true;
    } else {
        return false;
    }
    return true;
};

function inputUpdateColor() {
    requestAnimationFrame(inputUpdateColor);
    // $("input:disabled").each(function (p1, p2, p3) {
    //     if ($(p2).val()) {
    //         $(p2).css("-webkit-text-fill-color", "red");
    //         $(p2).css("color", "red");
    //         $(p2).css("opacity","1");
    //     } else {
    //         $(p2).css("-webkit-text-fill-color", "#ccc");
    //         $(p2).css("color", "#ccc");
    //         $(p2).css("opacity","1");
    //
    //     }
    // });

    $("input[type!='checkbox']").each(function (p1, p2, p3) {
        if ($(p2).val()) {
            $(p2).css("-webkit-text-fill-color", "black");
            $(p2).css("color", "black");
            $(p2).css("opacity", "1");
        } else {
            $(p2).css("-webkit-text-fill-color", "#ccc");
            $(p2).css("color", "#ccc");
            $(p2).css("opacity", "1");
        }
    });
}


function isWeiXin() {
    //window.navigator.userAgent属性包含了浏览器类型、版本、操作系统类型、浏览器引擎类型等信息，这个属性可以用来判断浏览器类型
    var ua = window.navigator.userAgent.toLowerCase();
    //通过正则表达式匹配ua中是否含有MicroMessenger字符串
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        return true;
    } else {
        return false;
    }
}


function isAlipay() {
    //window.navigator.userAgent属性包含了浏览器类型、版本、操作系统类型、浏览器引擎类型等信息，这个属性可以用来判断浏览器类型
    var ua = window.navigator.userAgent.toLowerCase();
    //通过正则表达式匹配ua中是否含有MicroMessenger字符串

    if (ua.match(/alipayclient/i) == 'alipayclient') {
        return true;
    } else {
        return false;
    }
}


function iosDate(data) {
    console.log("===============" + data);
    return data = data.replace(/\-/g, '/')
}


Date.prototype.Format = function (fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1,                 //月份
        "d+": this.getDate(),                    //日
        "h+": this.getHours(),                   //小时
        "m+": this.getMinutes(),                 //分
        "s+": this.getSeconds(),                 //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds()             //毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

function isEmpty(src) {
    if (typeof (src) == 'undefined' || src == null || src == "") {
        return true;
    } else {
        return false;
    }
}


function isLogin() {
    var data = localStorage.getItem('userKey')
    if (isEmpty(data)) {
        return false;
    }
    var LoginTokenAS = JSON.parse(localStorage.getItem('userKey'));
    if (LoginTokenAS == null) {
        return false;
    }
    return true;
}


function dismissLoading(e) {
    var loading = document.getElementById("loading_hjp");
    if (loading) {
        loading.remove();
    }
}

// function showLoading(e) {
//     dismissLoading();
//     var img = document.createElement("img");
//     img.width = 100;
//     img.height = 100;
//     img.style.objectFit = 'cover';
//     img.style.display="inline"
//     img.src = "../../images/ic_loadging.gif";
//
//     if (e) {
//         if (!isEmpty(e.src)) {
//             img.src = e.src;
//         }
//     }
//     var div = document.createElement("div");
//     div.id = "loading_hjp";
//     div.style.cssText = "max-width:60%;min-width: 150px;padding:14px 14px;color: rgb(255, 255, 255);line-height: 40px;text-align: center;border-radius: 4px;position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);z-index: 999999999999;background: rgba(0, 0, 0,.7);font-size: 16px;";
//     div.appendChild(img);
//     document.body.appendChild(div);
// }

function showLoading(e) {
    dismissLoading();
    var img = document.createElement("img");
    img.width = 50;
    img.height = 50;
    img.style.objectFit = 'cover';
    img.src = "../../images/ic_loadging.gif";
    img.style.cssText = "position: fixed;" +
        "top: 50%;left: 50%;" +
        "transform: translate(-50%, -50%);" +
        "z-index: 999999999999;";
    if (e) {
        if (!isEmpty(e.src)) {
            img.src = e.src;
        }
    }
    var div = document.createElement("div");
    div.id = "loading_hjp";
    div.style.cssText = "max-width:60%;" +
        "min-width:150px;" +
        "min-height:100px;" +
        "padding:14px 14px;color: rgb(255, 255, 255);" +
        "line-height: 40px;" +
        "text-align: center;" +
        "border-radius: 4px;" +
        "position: fixed;" +
        "top: 50%;left: 50%;" +
        "transform: translate(-50%, -50%);" +
        "z-index: 999999999999;" +
        "background: rgba(0, 0, 0,.7);" +
        "font-size: 16px;";
    div.appendChild(img);
    document.body.appendChild(div);
}


function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

//获取用户的openId
function getWxOpenid() {
    //获取用户的openId
    var LoginTokenA = JSON.parse(localStorage.getItem('register'));
    var jsData = {};
    jsData.jsCode = GetQueryString("code");
    jsData.type = '01'
    jsData.token = LoginTokenA.token;
    jsData.id = LoginTokenA.id;
    var https = httpss;
    $.ajax({
        url: https + "mobile/payment/getWxOpenid",
        dataType: "text",
        type: "POST",
        data: jsData,
        error: function (msg) {
            dismissLoading();
            console.log(msg)
        },
        success: function (data) {
            var resdataH = eval('(' + data + ')');
            console.log(resdataH);
            alert(resdataH);
            if (resdataH.code == 0) {
                var openIdA = resdataH.result.openId;
                if (!isEmpty(openIdA)) {
                    localStorage.setItem('openIdAH', openIdA)
                }
            }
        }
    })
}


/**
 * 提示信息
 * @param msg
 */
function showToast(msg) {
    if (isEmpty(msg)) {
        return;
    }
    if (msg == 'null') {
        msg = "服务异常稍后重试";
    }

    if (msg.toLowerCase().indexOf("exception") != -1) {
        msg = "服务异常稍后重试";
    }
    Toast(msg, 2000);
    // $.MsgBox.Alert({
    //     msg: msg,
    //     positiveTitle: "我知道了"
    // });
}


function Toast(msg, duration) {
    duration = isNaN(duration) ? 3000 : duration;
    var hdCommToast = document.getElementsByClassName("hdCommToast");
    if (hdCommToast) {
        $(".hdCommToast").remove();
    }
    var m = document.createElement('div');
    m.className = "hdCommToast"
    m.innerHTML = msg;
    m.style.cssText = "max-width:60%;min-width: 150px;padding:0 14px;color: rgb(255, 255, 255);line-height: 40px;text-align: center;border-radius: 4px;position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);z-index: 999999999999;background: rgba(0, 0, 0,.7);font-size: 16px;";
    document.body.appendChild(m);
    setTimeout(function () {
        var d = 0.5;
        m.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';
        m.style.opacity = '0';
        setTimeout(function () {
            if (m) {
                // document.body.removeChild(m)
                $(m).remove();
            }
        }, d * 1000);
    }, duration);
}


(function () {
    // $.ShowLoading= {
    //
    // }
    // $.ShowLoading.prototype={
    //     show:function () {
    //         console.log("123123");
    //     }
    // }


    $.MsgBox = {
        Alert: function (e) {
            var params = {
                title: "温馨提示",
                msg: "",
                positiveTitle: "确定",
                negativeTitle: "取消",
                type: "alert",
                callback: function () {
                },
                isCancel: false
            }
            if (e) {
                console.log(e);
                for (var item in e) {
                    console.log(item);
                    params[item] = e[item];

                }
                console.log(params);
            }
            GenerateHtml(params);
            btnOk(params.callback); //alert只是弹出消息，因此没必要用到回调函数callback
            btnNo();
        },
        Confirm: function (e) {
            var params = {
                title: "温馨提示",
                msg: "",
                positiveTitle: "确定",
                negativeTitle: "取消",
                type: "confirm",
                callback: function () {
                },
                negativeCallback: function () {
                },
                isCancel: false
            }
            if (e) {
                console.log(e);
                for (var item in e) {
                    console.log(item);
                    params[item] = e[item];
                }
            }
            GenerateHtml(params);
            btnOk(params.callback); //alert只是弹出消息，因此没必要用到回调函数callback
            btnNo(params.negativeCallback);
        }
    }
    //生成Html
    var GenerateHtml = function (param) {
        var _html = "";
        _html += '<div id="mb_box"></div><div id="mb_con"><span id="mb_tit">' + param.title + '</span>';
        _html += '<a id="mb_ico">x</a><div id="mb_msg">' + param.msg + '</div><div id="mb_btnbox">';
        if (param.type == "alert") {
            _html += '<input id="mb_btn_ok" type="button" value=' + param.positiveTitle + ' />';
        }
        if (param.type == "confirm") {
            _html += '<input id="mb_btn_ok" type="button" value=' + param.positiveTitle + ' />';
            _html += '<span class="dividing_line"></span>';
            _html += '<input id="mb_btn_no" type="button" value=' + param.negativeTitle + ' />';
        }
        _html += '</div></div>';
        $("#mb_box,#mb_con").remove();
        //必须先将_html添加到body，再设置Css样式
        $("body").append(_html);
        //生成Css
        GenerateCss();
        if (!param.isCancel) {
            $("#mb_ico").css("display", "none");
        }
    }

    //生成Css
    var GenerateCss = function () {
        $("#mb_box").css({
            width: '100%',
            height: '100%',
            zIndex: '99999',
            position: 'fixed',
            filter: 'Alpha(opacity=60)',
            backgroundColor: 'black',
            top: '0',
            left: '0',
            opacity: '0.6'
        });


        $("#mb_con").css({
            zIndex: '999999999',
            width: '80%',
            position: 'fixed',
            backgroundColor: 'White',
            borderRadius: '15px'
        });
        $("#mb_tit").css({
            display: 'block',
            fontSize: '20px',
            color: '#444',
            padding: '10px 15px',
            borderRadius: '15px 15px 0 0',
            borderBottom: '0px solid #DDD',
            fontWeight: 'bold',
            textAlign: "center",
        });
        $("#mb_msg").css({
            padding: ' 30px 20px',
            lineHeight: '20px',
            borderBottom: '1px solid #DDD',
            fontSize: '16px',
            textAlign: 'center'
        });
        $("#mb_ico").css({
            display: 'block',
            position: 'absolute',
            right: '10px',
            top: '9px',
            border: '1px solid Gray',
            width: '18px',
            height: '18px',
            textAlign: 'center',
            lineHeight: '16px',
            cursor: 'pointer',
            borderRadius: '12px',
            fontFamily: '微软雅黑'
        });
        $("#mb_btnbox").css({
            margin: '0px 0 10px 0',
            textAlign: 'center',
            position: 'relative',

        });


        $("#mb_btnbox .dividing_line").css({
            height: '45px',
            width: "1px",
            backgroundColor: '#DDD',
            lineHeight: '45px',
            display: "inline-block",
            position: 'absolute',
            left: "50%",
            top: "0"

        });


        $("#mb_btn_ok,#mb_btn_no").css({
            width: '45%',
            margin: '10px 0 0 0',
            height: '30px',
            fontSize: '20px',
            backgroundColor: 'white',
            cursor: 'pointer',
            border: 'none',
            color: '#2976EA',
            appearance:'none'
    });

        $("#mb_btn_ok").css({
            color: '#2976EA',
        });
        $("#mb_btn_no").css({
            color: '#2976EA',
            marginLeft: '20px'
        });
        //右上角关闭按钮hover样式
        $("#mb_ico").hover(function () {
            $(this).css({
                backgroundColor: 'Red',
                color: 'White'
            });
        }, function () {
            $(this).css({
                backgroundColor: '#DDD',
                color: 'black'
            });
        });
        var _widht = document.documentElement.clientWidth; //屏幕宽
        var _height = document.documentElement.clientHeight; //屏幕高

        console.log($(document).height());
        console.log($(document).height());
        console.log($(document.body).height());

        var _height = $(window).height();
        console.log("123123");
        var boxWidth = $("#mb_con").width();
        var boxHeight = $("#mb_con").height();

        console.log(_widht + "======_widht=====_height======" + _height);
        console.log(boxWidth + "=======boxWidth====boxHeight======" + boxHeight);


        //让提示框居中
        $("#mb_con").css({
            top: (_height - boxHeight) / 2 + "px",
            left: (_widht - boxWidth) / 2 + "px"
        });
    }
    //确定按钮事件
    var btnOk = function (callback) {
        $("#mb_btn_ok").click(function () {
            $("#mb_box,#mb_con").remove();
            if (typeof (callback) == 'function') {
                callback();
            }
        });
    }
    //取消按钮事件
    var btnNo = function (callback) {
        $("#mb_btn_no,#mb_ico").click(function () {
            $("#mb_box,#mb_con").remove();
            if (typeof (callback) == 'function') {
                callback();
            }
        });
    }
})();