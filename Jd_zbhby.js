/*
qx(tf 1.0.11(316)) 及 loon(tf 2.1.1(163))、 surge(tf 4.10.0(1807))  及更新版本可用。
半自动提醒京东抢红包雨。

到时候点击通知即可跳转至京东直播。

自不用 by zZPiglet
*/

const $ = new cmp()

!(async () => {
    let voucher = "openapp.jdmobile://virtual?params=%7B%22liveOrigin%22%3A%2213%22%2C%22des%22%3A%22LivePlayerRoom%22%2C%22category%22%3A%22jump%22%2C%22id%22%3A%223007714%22%2C%22urlParam%22%3A%7B%22origin%22%3A%222%22%2C%22appid%22%3A%22jdzb%22%2C%22sharer%22%3A%22Mozzzie%22%2C%22user%22%3A%22YRaX0Wr2%201E0OEbUregvxA%3D%3D%22%2C%22utm_source%22%3A%22iosapp%22%2C%22utm_medium%22%3A%22appshare%22%2C%22utm_campaign%22%3A%22t_335139774%22%2C%22utm_term%22%3A%22CopyURL%22%2C%22ad_od%22%3A%22share%22%2C%22utm_user%22%3A%22plusmember%22%2C%22gx%22%3A%22RnEyyjYKOTLQzNRR_sYuDIytoaA0%22%7D%2C%22sourceType%22%3A%22JSHOP_SOURCE_TYPE%22%2C%22sourceValue%22%3A%22JSHOP_SOURCE_VALUE%22%2C%22M_sourceFrom%22%3A%22mxz%22%2C%22msf_type%22%3A%22click%22%2C%22m_param%22%3A%7B%22m_source%22%3A%220%22%2C%22event_series%22%3A%7B%7D%2C%22jda%22%3A%2264921067.1607325635114448823155.1607325635.1607662329.1607662329.16%22%2C%22usc%22%3A%22iosapp%22%2C%22ucp%22%3A%22t_335139774%22%2C%22umd%22%3A%22appshare%22%2C%22utr%22%3A%22CopyURL%22%2C%22jdv%22%3A%2264921067%7Ciosapp%7Ct_335139774%7Cappshare%7CCopyURL%7C1607662329827%22%2C%22ref%22%3A%22https%3A%2F%2Flives.jd.com%2F%23%2F3007714%3Forigin%3D2%26appid%3Djdzb%26sharer%3DMozzzie%26user%3DYRaX0Wr2%25201E0OEbUregvxA%253D%253D%26utm_source%3Diosapp%26utm_medium%3Dappshare%26utm_campaign%3Dt_335139774%26utm_term%3DCopyURL%26ad_od%3Dshare%26utm_user%3Dplusmember%26gx%3DRnEyyjYKOTLQzNRR_sYuDIytoaA0%22%2C%22psn%22%3A%221607325635114448823155%7C16%22%2C%22psq%22%3A1%2C%22unpl%22%3A%22V2_ZzNtbURRREdxCk8HchpfUmJTRwhLABRAdggTBn9JXgRjABBZclRCFnQURldnGV0UZwAZXURcRhRFCEZkexhdBWQAFV9FVXMlfQAoVzYZMgYJAF8QD2dAFUUIR2R7Hl0DZQAWWkBTQxVwDUNdchpeBWMHIm1CUXMlRQl2VUsYbE4JAl9dRVZFF3YMQVZ%2FGVwAYgYbVEFVQxFxOEdkeA%3D%3D%22%2C%22pc_source%22%3A%22%22%2C%22mba_muid%22%3A%221607325635114448823155%22%2C%22mba_sid%22%3A%2216076623298276928897271984337%22%2C%22std%22%3A%22MO-J2011-1%22%2C%22par%22%3A%22%22%2C%22event_id%22%3A%22Mlive_LiveRoom_OpenAPP%22%2C%22mt_xid%22%3A%22%22%2C%22mt_subsite%22%3A%22%22%7D%2C%22SE%22%3A%7B%22mt_subsite%22%3A%22%22%2C%22__jdv%22%3A%2264921067%7Ciosapp%7Ct_335139774%7Cappshare%7CCopyURL%7C1607662329827%22%2C%22unpl%22%3A%22V2_ZzNtbURRREdxCk8HchpfUmJTRwhLABRAdggTBn9JXgRjABBZclRCFnQURldnGV0UZwAZXURcRhRFCEZkexhdBWQAFV9FVXMlfQAoVzYZMgYJAF8QD2dAFUUIR2R7Hl0DZQAWWkBTQxVwDUNdchpeBWMHIm1CUXMlRQl2VUsYbE4JAl9dRVZFF3YMQVZ%2FGVwAYgYbVEFVQxFxOEdkeA%3D%3D%22%2C%22__jda%22%3A%2264921067.1607325635114448823155.1607325635.1607662329.1607662329.16%22%7D%7D"
    $.notify("京东直播😝", "", "点击跳转抢红包雨🧧啦", voucher)
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
