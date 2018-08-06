!(function(window) {
    function broswerInfo() {
        var broswer = {}
        var ua = navigator.userAgent.toLowerCase()
        var s
        (s = ua.match(/micromessenger\/([\d.]+)/)) ? broswer.wechat = s[1] :
            (s = ua.match(/dingtalk\/([\d.]+)/)) ? broswer.dingtalk = s[1] :
                (s = ua.match(/alipayclient\/([\d.]+)/)) ? broswer.alipay = s[1] :
                    (s = ua.match(/mqqbrowser\/([\d.]+)/)) ? broswer.qq = s[1] :
                        (s = ua.match(/ucbrowser\/([\d.]+)/)) ? broswer.uc = s[1] :
                            (s = ua.match(/edge\/([\d.]+)/)) ? broswer.edge = s[1] :
                                (s = ua.match(/chrome\/([\d.]+)/)) ? broswer.chrome = s[1] :
                                    (s = ua.match(/version\/([\d.]+).*safari/)) ? broswer.safari = s[1] :
                                        (s = ua.match(/firefox\/([\d.]+)/)) ? broswer.firefox = s[1] :
                                            (s = ua.match(/opera.([\d.]+)/)) ? broswer.opera = s[1] :
                                                (s = ua.match(/rv:([\d.]+)\) like gecko/)) ? broswer.ie = s[1] :
                                                    (s = ua.match(/msie ([\d.]+)/)) ? broswer.ie = s[1] : 0
        return broswer
    }

    function deviceInfo() {
        var device = {}
        if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
            device.mobile = true
        }
        else {
            device.pc = true
        }
        return device
    }

    window.broswerInfo = broswerInfo
    window.deviceInfo = deviceInfo

})(window)