let path = require('path');
var content = "sawfasf![[./saf/sdfasfas.ksf]]fgugjkhg";

new_content = content.replace(/!\[\[([^\n]+)]]/g, function (match, p1, offset, string) {
    let name = path.basename(p1);
    return `![avatar](../assets/${name})`;

});

console.log(new_content);