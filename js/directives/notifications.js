app.directive('notification', function(){
    return {
        restrict: 'E',
        scope: {
            info: '='
        },
        template: `
        <div>
            <p>hejs {{info}}</p>
        </div>`
    };
});
