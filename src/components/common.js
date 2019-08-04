var dateFormat = function(NewDtime){
        var dt = new Date(parseInt(NewDtime.slice(6, 19)));
        var year = dt.getFullYear();
        var month = dt.getMonth() + 1;
        var date = dt.getDate();
        var hour = dt.getHours();
        var minute = dt.getMinutes();
        var second = dt.getSeconds();
        return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
}