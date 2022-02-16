var d = new Date();
var h = d.getHours();

const OthersDay   = '联通国外免流✈️';
const OthersNight = 'Proxy';

if (h >= 18 || h <8) {
    var OthersNewPolicy = OthersNight;
} else {
    var OthersNewPolicy = OthersDay;
}

$surge.setSelectGroupPolicy('Others', OthersNewPolicy);


$done();