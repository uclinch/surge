var d = new Date();
var h = d.getHours();

const EmbyDay   = '星星✨饭团';
const EmbyNight = '影视专线';

if (h >= 18 || h <3) {
    var EmbyNewPolicy = EmbyNight;
} else {
    var EmbyNewPolicy = EmbyDay;
}

$surge.setSelectGroupPolicy('Emby', EmbyNewPolicy);
$notification.post("魔法启动~", "Emby自动切换", "'Emby' 切换到 '" + EmbyNewPolicy + "'");
console.log("EmbySwitch.js script: 'Emby' 切换到 '" + EmbyNewPolicy + "'");

$done();
