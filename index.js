let path = require('path');

module.exports = {
    hooks: {
        "page:before": function (page) {
            var content = page.content;
            
            page.content = content.replace(/!\[\[([^\n]+)]]/g, function (match, p1, offset, string) {
                let name = path.basename(p1);
                return `![avatar](../assets/${name})`;

            });
            return page;
        }
    }
};
