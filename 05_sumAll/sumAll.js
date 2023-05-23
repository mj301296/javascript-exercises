const sumAll = function(start, end) {

    var result =0;
    if(start >end)
    {
        var temp = start
        start =end
        end =temp
    }

    for(var i=start;i<=end;i++)
    {
        result +=i;
    }
    return result

};

// Do not edit below this line
module.exports = sumAll;
