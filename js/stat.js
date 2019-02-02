var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT =270;

window.renderStatistics = function(ctx, names, times){
    CreateCloud(ctx);
    TimeHistogram(ctx, names, times);
}

function CreateCloud(ctx){
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)' ;
    ctx.fillRect(110, 20, CLOUD_WIDTH, CLOUD_HEIGHT);
    ctx.fillStyle = 'white';
    ctx.fillRect(100, 10, CLOUD_WIDTH, CLOUD_HEIGHT);
    ctx.fillStyle = "#000";
    ctx.textBaseline = 'top';
    ctx.font = '16px PT Mono';
    ctx.fillText("Ура вы победили!", 120, 30);
    ctx.fillText("Список результатов:", 120, 50);
}

function TimeHistogram(ctx, names, times){
    var columnWidth = 40;
    var columnHeight = 150;
    var columnSpacing = 50;
    var startPointX = 140;
    var startPointY = 70; //240
    var maxTimeValue = times[0].toFixed();

    for (var i = 0; i < times.length; i++) {
        if(maxTimeValue<times[i].toFixed()) maxTimeValue = times[i].toFixed();
    }

    for (var i = 0; i < names.length; i++) {
        ctx.fillStyle = "#000";
        ctx.fillText(times[i].toFixed(), startPointX, startPointY);
        var tempPointY = startPointY;
        tempPointY += 20;
        if (names[i] == 'Вы') {
            ctx.fillStyle = 'rgba(255, 0, 0, 1)';
        } else {
            ctx.fillStyle = 'rgba(0, 33, 255, ' + ( Math.random() * (1-0.1) + 0.1).toFixed(1) + ')';
        }
        var tempColumnHeight = drawingRactangle(times[i].toFixed(), maxTimeValue)
        ctx.fillRect(startPointX, tempPointY, columnWidth, tempColumnHeight);
        tempPointY += tempColumnHeight;
        // alert('высота - ' + typeof tempColumnHeight);
        // alert('поинт Y - '+tempPointY);
        ctx.fillStyle = "#000";
        ctx.fillText(names[i], startPointX, tempPointY);
        startPointX += columnWidth + columnSpacing;
    }
}

function drawingRactangle(time, maxValue){
    if(time == maxValue) return 150;
    else {
        return Number(((time * 150) / maxValue).toFixed());
    }
}
