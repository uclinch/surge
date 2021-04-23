var d = new Date();
var h = d.getHours();

const EmbyDay   = '星星✨饭团';
const EmbyNight = '影视专线';

if (h >= 18 || h <8) {
    var EmbyNewPolicy = EmbyNight;
} else {
    var EmbyNewPolicy = EmbyDay;
}

$surge.setSelectGroupPolicy('Emby', EmbyNewPolicy);
$notification.post("魔法启动~", "Emby自动切换", "'Emby' switched to '" + EmbyNewPolicy + "'");
console.log("EmbySwitch.js script: 'Emby' switched to '" + EmbyNewPolicy + "'");

$done();
