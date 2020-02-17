/**
 * Author@AlanG
 * Email@
 * Data@2019-11-17
 * Version@2.3.1
 */

/**
 * DOM 加载完毕的1s后才开始执行
 */
window.onload = function () {
    setTimeout(() => begin(), 1000)
};

/**
 * 选择是看见面课还是普通课程
 * 0为见面课，1为普通课程
 */
let teachvideo = 1;

/** 
 * 倍速设置
 * 默认为1.5倍速
 * 倍速上限为16倍速
 * 但是为了躲避封号，建议不要超过2倍速
*/
let playSpeed = 1.5;

/**
 * 主程序
 */
async function begin() {
    let loginUrl = 'https://passport.zhihuishu.com/login';
    //获取当前窗口的url
    let url = window.location.href;
    //时间初始化
    console.log('%c =>「时间计时初始化中，请稍等」', 'color:#00FFFF;')
    MyTime();
    console.log('%c =>「时间计时初始化成功」', 'color:#00FFFF;')
    console.log("%c[" + myTime + "]现在是 " + myTime + " TT很高兴为您服务", 'color:#00FFFF;');

    //检测是否为主页，如果是，点击用户头像进入用户中心
    if (url.search('www.zhihuishu.com') != -1) {
        console.log('%c[' + myTime + ']检测到当前页面为网站首页，开始跳转', 'color:#00FFFF;')
        let userImg = getElement('userImg')
        userImg.click();
        console.log('%c[' + myTime + ']跳转成功', 'color:#00FFFF;')
    }

    //检测是否为登陆网页，如果是，就调用自动登陆函数上传表单登陆
    if (url.search('passport.zhihuishu.com/login') != -1) {
        console.log('%c[' + myTime + ']检测到当前页面为用户登陆界面，开始登陆', 'color:#00FFFF;')
        postCallLogin(loginUrl);
        console.log('%c[' + myTime + ']登陆成功，登陆页面关闭', 'color:#00FFFF;')
    }

    //检测是否为用户中心界面，如果是，就搜寻还没开始看的网课
    if (url.search('onlineh5.zhihuishu.com/onlineWeb.html#/studentIndex') != -1) {
        console.log('%c[' + myTime + ']检测到当前页面为用户中心界面，开始跳转', 'color:#00FFFF;')
        if (teachvideo == 1) {
            let processNum = document.querySelectorAll('.processNum');
            let courseName = document.querySelectorAll('.courseName');
            if (courseName !== null) {
                for (let i = 0; i < 3; i++) {
                    let percent = processNum[i]["childNodes"][0]["data"];
                    percent = percent.replace('%', '');
                    if (Number(percent) < 75) {
                        courseName = courseName[i];
                        courseName.click();
                        console.log('%c[' + myTime + ']跳转成功', 'color:#00FFFF;');
                    } else {
                        console.log('%c[' + myTime + ']第' + (i + 1) + '节课(' + courseName[i]['innerText'] + ')达到目标', 'color:#00FFFF;');
                    }
                }
                console.log('%c[' + myTime + ']所有课程均已达到目标', 'color:#00FFFF;');
            }
        } else if (teachvideo == 0) {
            let courseName = document.querySelectorAll('.courseName');
            let length = courseName.length;
            var i = Math.floor(Math.random() * (length));
            courseName = courseName[i];
            courseName.click();
            CloseWebPage();
            console.log('%c[' + myTime + ']跳转成功', 'color:#00FFFF;');
        }
    }

    //检测当前网页是否为见面课选课网页，如果是，就继续
    if (url.search('stuonline.zhihuishu.com/stuonline') != -1) {
        console.log('%c[' + myTime + ']网址确定，为见面课选课网址', 'color:#00FFFF;');
        console.log('%c[' + myTime + ']点击回放按钮', 'color:#00FFFF');
        let videogreen_ico = getElement('videogreen_ico')
        let length = videogreen_ico.length;
        var i = Math.floor(Math.random() * (length));  //获取0-见面课总数的随机数
        videogreen_ico = videogreen_ico[i];
        videogreen_ico.click();
        await wait1s(6);
        let popbtn_yes = getElement('popbtn_yes');
        if (popbtn_yes != null) {
            console.log('%c[' + myTime + ']点击见面课三秒确认按钮', 'color:#00FFFF;');
            popbtn_yes.click();
            CloseWebPage();
        }
    }

    //检测当前网页是否为见面课播放网页
    if (url.search('lc.zhihuishu.com/live') != -1) {
        console.log('%c[' + myTime + ']网址确认，为见面课播放网页', 'color:#00FFFF;');
        console.log('%c[' + myTime + ']询查视频进度', 'color:#00FFFF;');
        let videoCurrent = getElement('videoCurrent');
        var timer = Number(videoCurrent.length) - 1;
        let check = "100%"
        for (i = 0; i < (videoCurrent.length - 1); i++) {
            videoCurrent_x = videoCurrent[i];
            if (videoCurrent_x["textContent"] == check) {
                timer--;
            } else {
                videoCurrent_x.click();
                console.log('%c[' + myTime + ']视频点击', 'color:#00FFFF;');
            }
        }
        if (timer != 0) {
            console.log('%c[' + myTime + ']初始化中，请稍等', 'color:#00FFFF;');
            let video = null;
            let count = 0;
            console.log('%c[' + myTime + ']建立监听事件', 'color:#00FFFF;');
            console.log('%c[' + myTime + ']拉取video元素中', 'color:#00FFFF;')
            await wait1s(3);
            video = getElement('video');
            count = 0;
            while (1) {
                if (video !== null || count >= 12) break;
                count++;
                await wait1s(5);
                video = getElement('video')
            }
            if (video !== null) {
                await specialEffect(video);
            }
            console.log('%c[' + myTime + ']video元素拉取成功', 'color:#00FFFF;')
            console.log('%c[' + myTime + ']监听成功', 'color:#00FFFF;')
            await specialEffect(video);
        }
        if (timer == 0) {
            let online_school = document.querySelector('.online-school');
            online_school.click();
            CloseWebPage();
        }

    }
    if (url.search('studyh5.zhihuishu.com/videoStudy') != -1){
        console.log('%c[' + myTime + ']检测到为新版播放网页，正在跳转至旧版播放网站', 'color:#00FFFF;');
        window.alert("检测到为新版播放网页，确认跳转至旧版播放网页请点击确认");
        let returnoldversion = document.querySelector('.returnoldversion');
        returnoldversion.click()
    }
    //检测当前网页是否为视频播放网页，如果是，就继续
    if (url.search('study.zhihuishu.com/learning') != -1) {
        console.log('%c[' + myTime + ']网址确定', 'color:#00FFFF;');
        console.log('%c[' + myTime + ']初始化中，请稍等', 'color:#00FFFF;');
        if (teachvideo == 1) {
            let list = null; // 整个视频播放列表
            let video = null; // video播放器
            let count = 0;
            console.log('%c[' + myTime + ']建立监听事件', 'color:#00FFFF;')
            //检测是否有提交失败的课程，如果有，就重新提交
            let withborder_no_tip = getElement('withborder_no_tip')
            if (withborder_no_tip !== null) {
                console.log('%c[' + myTime + ']处理错误提交事件中', 'color:#FF0000;')
                withborder_no_tip.click();
                console.log('%c[' + myTime + ']错误提交事件处理成功', 'color:#FF0000;')
            }
            if (withborder_no_tip == null) {
                console.log('%c[' + myTime + ']没有发现错误提交事件，继续执行任务', 'color:#00FFFF;')
            }

            // 60s内获取播放列表，若失败，插件不能正常使用
            console.log('%c[' + myTime + ']拉取播放列表中', 'color:#00FFFF;')
            list = getElement('list');
            while (1) {
                if (list !== null || count >= 12) break;
                count++;
                await wait1s(5);
                list = getElement('list')
            }
            if (list !== null) { //播放下一集
                playVideo(list);
            }
            console.log('%c[' + myTime + ']播放列表拉取成功', 'color:#00FFFF;')

            // 60s内获取video元素，若失败，插件不能正常使用
            console.log('%c[' + myTime + ']拉取video元素中', 'color:#00FFFF;')
            await wait1s(5);
            video = getElement('video');
            count = 0;
            while (1) {
                if (video !== null || count >= 12) break;
                count++;
                await wait1s(5);
                video = getElement('video')
            }
            if (video !== null) {
                await specialEffect(video);
            }
            console.log('%c[' + myTime + ']video元素拉取成功', 'color:#00FFFF;')
            console.log('%c[' + myTime + ']监听成功', 'color:#00FFFF;')
            Warning();
            // 隔10s就检查视频是否播放完毕，是否弹出'测试'对话框
            background();
            console.log('%c[' + myTime + ']开始任务监听', 'color:#FF0000;');
        }
        if (teachvideo == 0) {
            let meetingClass = document.querySelector('.meetingClass');
            meetingClass['firstElementChild'].click();
            CloseWebPage();
            console.log('%c[' + myTime + ']跳转成功', 'color:#00FFFF;');
        }
    }

}

function Warning() {
    let popbtn_yes = getElement('popbtn_yes');
    if (popbtn_yes != null) {
        console.log('%c[' + myTime + ']检测到警告界面', 'color:#FF0000;');
        popbtn_yes.click();
        console.log('%c[' + myTime + ']处理警告界面成功', 'color:#00FFFF;');
    }
}

function CloseWebPage() {
    if (navigator.userAgent.indexOf("MSIE") > 0) {
        if (navigator.userAgent.indexOf("MSIE 6.0") > 0) {
            window.opener = null;
            window.close();
        } else {
            window.open('', '_top');
            window.top.close();
        }
    } else if (navigator.userAgent.indexOf("Firefox") > 0) {
        window.location.href = 'about:blank ';        //FireFox默认状态非window.open的页面window.close是无效的
        //window.history.go(-2);
    } else {
        window.opener = null;
        window.open('', '_self', '');
        window.close();
    }
}

/**
* 时间函数
* @param {string} myTime 获取当前时间
* @returns void
*/
function MyTime() {
    myDate = new Date();
    myTime = myDate.toLocaleTimeString();
    r = /(\S{2})(\d{1,2}):(\d{1,2}):(\d{1,2})$/;
    r.exec(myTime);
    s1 = RegExp.$1;
    s2 = Number(RegExp.$2);
    s3 = Number(RegExp.$3);
    s4 = Number(RegExp.$4);
    setInterval(() => {
        myDate = new Date();
        myTime = myDate.toLocaleTimeString();
        r = /(\S{2})(\d{1,2}):(\d{1,2}):(\d{1,2})$/;
        r.exec(myTime);
        s1 = RegExp.$1;
        s2 = Number(RegExp.$2);
        s3 = Number(RegExp.$3);
        s4 = Number(RegExp.$4);
    }, 1000)
    if (s1 == "下午") {
        if (s2 >= 6 && s2 != 12) {
            s1 = "晚上";
        }
    }
    if (s1 == "上午") {
        if ((0 < s2 && s2 < 3) || s2 == 12) {
            s1 = "深夜";
        }
        if (3 <= s2 && s2 < 6) {
            s1 = "凌晨";
        }
    }
    myTime = s1 + s2 + ":" + s3 + ":" + s4;
    console.log("%c[" + myTime + "]任务加载成功", 'color:#00FFFF;');
    //首次判断时间
    if (s1 == "凌晨") {
        if (3 <= Number(s2) && Number(s2) < 6) {
            console.log("%c[" + myTime + "]躲避系统检测机制启动，明天见", 'color:#FF0000');
            let pauseButton = getElement('pauseButton');
            if (pauseButton != null) {
                pauseButton.click();
                console.log('%c log:[' + myDate.toLocaleTimeString() + ']休眠待机中', 'color:#00FFFF;');
            }
            //CloseWebPage()
        } else console.log("%c[" + myTime + "]任务继续执行", 'color:#00FFFF;');
    } else {
        let playButton = getElement('playButton');
        if (playButton != null) {
            playButton.click();
            console.log('%c[' + myTime + ']现在是' + myDate.toLocaleTimeString() + '点，唤醒成功', 'color:#00FFFF;');
        }
    }
    //每隔一小时判断时间
    setInterval(() => {
        if (s1 == "凌晨") {
            if (3 <= Number(s2) && Number(s2) < 6) {
                console.log("%c[" + myTime + "]躲避系统检测机制启动，明天见", 'color:#FF0000');
                let pauseButton = getElement('pauseButton');
                if (pauseButton != null) {
                    pauseButton.click();
                    console.log('%c log:[' + myDate.toLocaleTimeString() + ']休眠待机中', 'color:#00FFFF;');
                }
                //CloseWebPage()
            } else console.log("%c[" + myTime + "]任务继续执行", 'color:#00FFFF;');
        } else {
            let playButton = getElement('playButton');
            if (playButton != null) {
                playButton.click();
                console.log('%c[' + myTime + ']现在是' + myDate.toLocaleTimeString() + '点，唤醒成功', 'color:#00FFFF;');
            }
        }
    }, 3600000)
}

/**
 * 自动播放下一集
 * @param {Array} list 视频播放列表
 * @returns void
 */
function playVideo(list) {
    for (let i = 0, len = list.length; i < len; i++) {
        let watchstate = list[i].getAttribute('watchstate');
        let id = list[i].getAttribute('id');
        // 视频没被播放过并且不是标题行
        if ((watchstate === '0' || watchstate === '2') && id !== 'video-0') {
            list[i].click(); // 播放视频
            console.log('%c[' + myTime + ']播放下一个视频', 'color:#00FFFF;')
            return true;
        }
    }
    // 上一节课已经看完，跳入下一节课
    let return_class = getElement('return_class');
    console.log('%c[' + myTime + ']选课界面跳转中', 'color:#00FFFF;')
    return_class.click();
    console.log('%c[' + myTime + ']跳转选课界面成功', 'color:#00FFFF;')
    let checklogin = document.querySelector('other-signin-way-tit');
    if (checklogin != null) {
        postCallLogin(loginUrl);
    }
}

/**
 * 按要求播放视频: n倍速度，无声播放
 * @param {Element} video 视频元素
 * @returns void
 */
async function specialEffect(video) {
    try {
        return new Promise((resolve) => { // 3s后按要求播放视频
            setTimeout(() => {
                video.currentTime = 2; // 视频重新播放
                if (video.paused && typeof video.play === 'function') video.play(); // 视频停止的话，继续播放
                let volumn = getElement('volumn');
                //let speedTab = getElement('speedTab');
                let sharpness = getElement('sharpness');
                if (volumn !== null) volumn.click(); // 关闭声音
                console.log('%c[' + myTime + ']成功关闭音源', 'color:#00FFFF;')
                /**
                 * 这是2.2.0版本用到的速率1.5倍化
                 * if (speedTab !== null) speedTab.click(); // 1.5倍加速
                 */
                setInterval(() => {
                    document.querySelector('video').playbackRate = String(playSpeed);
                }, 4000)
                console.log('%c[' + myTime + ']成功调整倍速，倍速为：' + playSpeed, 'color:#00FFFF;')
                if (sharpness !== null) sharpness.click();// 标清
                console.log('%c[' + myTime + ']成功调整清晰度', 'color:#00FFFF;')
                resolve();
            }, 3000)
        })
    } catch (error) {
        console.log(error);
    }
}

/**
 * 隔10s就检查视频是否播放完毕，是否弹出'测试'对话框
 * @returns void
 */
function background() {
    // 每10s检查视频是否播放完毕，是的话，刷新页面
    setInterval(() => {
        let video = getElement('video'); // 需要不断的获取video元素
        if (video.ended) {
            console.log('%c[' + myTime + ']视频播放完毕，刷新界面中', 'color:#00FFFF;');
            wait1s(1);
            window.location.reload()
        }
    }, 10000);
    // 每5s检查是否弹出'测试'对话框，并关闭
    setInterval(() => {
        let close = getElement('close'); // 对话框的关闭按钮
        let choose = getElement('choose');
        if (choose && close) {
            console.log('%c[' + myTime + ']检测到测试弹窗', 'color:#FF0000;')
            choose.click();
            close.click();
            console.log('%c[' + myTime + ']已关闭测试弹窗', 'color:#00FFFF;')
        }
        if (close && !choose) {
            console.log('%c[' + myTime + ']答题失败', 'color:#FF0000;')
        }
    }, 3000)
}

/**
 * 隔10s就检查见面课视频是否播放完毕，是否弹出'测试'对话框
 * @returns void
 */
function background_x() {
    // 每10s检查视频是否播放完毕，是的话，刷新页面
    setInterval(() => {
        let video = getElement('video'); // 需要不断的获取video元素
        if (video.ended) {
            console.log('%c[' + myTime + ']视频播放完毕，刷新界面中', 'color:#00FFFF;');
            wait1s(1);
            window.location.reload()
        }
    }, 10000);
}

//2019-11-18 记录，自动登录需要提前设置
/**
* 自动登录
* @function 获取LT且自动登录
*/
function postCallLogin(url) {
    var target = '_self';
    //获取登陆界面的LT令牌
    console.log('%c[' + myTime + ']获取LT令牌中', 'color:#00FFFF;')
    var input = document.getElementsByTagName('input');
    var inputlist = document.getElementsByName('lt');
    inputlist = inputlist[0];
    var searchStr = 'defaultValue';
    var lt = inputlist.searchStr;
    lt = inputlist.defaultValue;
    console.log('%c[' + myTime + ']获取LT令牌成功，令牌为：' + lt, 'color:#00FFFF;')
    let params = {
        "lt": lt,
        "execution": "e1s1",
        "_eventId": "submit",
        "username": "",    //用户名填这里
        "password": "",    //密码填这里
        "clCode": "",
        "clPassword": "",
        "tlCode": "",
        "tlPassword": "",
        "remember": "on"
    };
    var tempform = document.createElement("form");
    tempform.action = url;
    tempform.method = "post";
    tempform.style.display = "none";
    if (target) {
        tempform.target = target;
    }

    for (var x in params) {
        var opt = document.createElement("input");
        opt.name = x;
        opt.value = params[x];
        tempform.appendChild(opt);
    }

    var opt = document.createElement("input");
    opt.type = "submit";
    tempform.appendChild(opt);
    document.body.appendChild(tempform);
    tempform.submit();
    document.body.removeChild(tempform);
}

/**
 * 获取指定元素
 * @param {string} ele 指定的元素名称
 * @returns {Element} switch返回指定元素
 */
function getElement(ele) {
    switch (ele) {
        case 'list': { // 视频列表
            let list = document.getElementById('chapterList').getElementsByTagName('li');
            if (list === null) {
                console.log('%c[' + myTime + ']网速过慢，无法获取视频播放列表，请刷新页面', 'color:#00FFFF;')
                window.alert("网速过慢，无法获取视频播放列表，请刷新页面");
            }
            return list
        }
        case 'video': { // 播放器
            let video = document.querySelector('.vjs-tech');
            return video
        }
        case 'volumn': { // 播放器的声音控件
            let volumn = document.querySelector('.volumeIcon');
            return volumn
        }
        case 'speedTab': { // 播放器的速度控件
            let speedTab = document.querySelector('.speedTab15');
            return speedTab
        }
        case 'sharpness': { // 播放器的清晰度控件
            let sharpness = document.querySelector('.line1bq');
            return sharpness
        }
        case 'close': { // '测试'对话框的关闭按钮
            let close = document.querySelector('.popboxes_close');
            // let close = document.querySelector('.popbtn_cancel')
            return close
        }
        case 'choose': { //测试对话框的选择按钮
            let chooseInput;
            let chooseDiv;
            let iframeContent = document.querySelector('#tmDialog_iframe');
            if (iframeContent) {
                chooseDiv = iframeContent.contentWindow.document.querySelector('.answerOption');
                if (chooseDiv) {
                    chooseInput = chooseDiv.getElementsByTagName('input')[0]
                }
            }
            return chooseInput
        }
        case 'return_class':  //回到选课界面
            {
                let fl = document.querySelector('.fl');
                return fl
            }
        case 'pauseButton':  //暂停键
            {
                let pauseButton = document.querySelector('.pauseButton');
                return pauseButton
            }
        case 'playButton':  //播放键
            {
                let playButton = document.querySelector('.playButton');
                return playButton
            }
        case 'popbtn_yes':  //警告按钮
            {
                let popbtn_yes = document.querySelector('.popbtn_yes');
                return popbtn_yes
            }
        case 'processNum':  //课程进度
            {
                let processNum = document.querySelectorAll('.processNum');
                return processNum;
            }
        case 'courseName':  //选课按钮
            {
                let courseName = document.querySelectorAll('.courseName');
                return courseName;
            }
        case 'userImg':     //个人中心按钮
            {
                let loggedIn = document.getElementById('userImg');
                return loggedIn;
            }
        case 'withborder_no_tip':
            {
                let withborder_no_tip = document.querySelector('.withborder_no_tip');
                return withborder_no_tip;
            }
        case 'videogreen_ico':
            {
                let videogreen_ico = document.querySelectorAll('.videogreen_ico');
                return videogreen_ico;
            }
        case 'popbtn_yes': //见面课三秒确定
            {
                let popbtn_yes = document.querySelector('.popbtn_yes');
                return popbtn_yes;
            }
        case 'videoCurrent':
            {
                let videoCurrent = document.querySelectorAll('.videoCurrent');
                return videoCurrent;
            }
    }
}

/**
 * 延时函数
 * @param {number} sec 延时多少秒
 * @returns {Promise} 异步执行
 */
async function wait1s(sec) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, sec * 1000)
    })
}
