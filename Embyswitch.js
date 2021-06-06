var d = new Date();
var h = d.getHours();

const EmbyDay   = '免流';
const EmbyNight = 'Proxy';

if (h >= 19 || h <8) {
    var EmbyNewPolicy = EmbyNight;
} else {
    var EmbyNewPolicy = EmbyDay;
}

$surge.setSelectGroupPolicy('Emby', EmbyNewPolicy);
$notification.post("魔法启动~", "Emby自动切换", "'Emby' 切换到 '" + EmbyNewPolicy + "'");
console.log("EmbySwitch.js script: 'Emby' 切换到 '" + EmbyNewPolicy + "'");

$done();
