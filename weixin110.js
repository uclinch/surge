#!name=微信跳转链接
#!desc=淘宝口令直接跳转
[Script]

微信链接跳转 = type=http-response,pattern=^https?:\/\/weixin110\.qq\.com\/cgi-bin\/mmspamsupport-bin\/newredirectconfirmcgi,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/HotKids/Rules/master/Script/weixin110.js

[MITM]
hostname = %APPEND% trade-acs.m.taobao.com
