(function () {
    var page = function () {
        var app = new Vue({
            el: '#app',
            data: {
                source: 'https://gov.sg',
                message: ''
            },
            methods: {
                checkSource: function () {
                    var points = checkSource(this.source);
                    this.message = translateReliablePoints(points);
                }
            }
        });
        return app;
    };
    if ($) {
        $(document).ready(function () {
            page();
        });
    } else {
        setTimeout(function () {
            page();
        }, 0);
    }
})();