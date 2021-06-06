var d = new Date();
var h = d.getHours();

const EmbyDay   = '免流';
const EmbyNight = 'Proxy';

if (h >= 19 || h <8) {
    var EmbyNewPolicy = EmbyNight;
} else {
    var EmbyNewPolicy = EmbyDay;
}

$surge.setSelectGroupPolicy('外出在家', EmbyNewPolicy);
$notification.post("魔法启动~", "免流定时切换", "'外出在家' 切换到 '" + EmbyNewPolicy + "'");
console.log("EmbySwitch.js script: '外出在家' 切换到 '" + EmbyNewPolicy + "'");

$done();
