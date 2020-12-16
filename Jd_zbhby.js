/*
qx(tf 1.0.11(316)) 及 loon(tf 2.1.1(163))、 surge(tf 4.10.0(1807))  及更新版本可用。
半自动提醒京东金融天天领京豆。

到时候点击通知即可跳转至京东金融。

自不用 by zZPiglet
*/

const $ = new cmp()

!(async () => {
    let voucher = "jdmobile://share?jumpType=7&jumpUrl=3711&channel=default&sourceUrl=1000*https%3A%2F%2Fu2.jr.jd.com%2FdownloadApp%2Findex.html%3Fid%3D6514&source=&time=1608080540795"
    $.notify("京东金融😝", "", "点击跳转 天天领京豆🧧", voucher)
})().finally(() => $done())

function cmp() {
    _isQuanX = typeof $task != "undefined"
    _isLoon = typeof $loon != "undefined"
    _isSurge = typeof $httpClient != "undefined" && !_isLoon
    this.notify = (title, subtitle, message, url) => {
        if (_isLoon) $notification.post(title, subtitle, message, url)
        if (_isQuanX) $notify(title, subtitle, message, { "open-url": url })
        if (_isSurge) $notification.post(title, subtitle, message, { url: url })
    }
}
