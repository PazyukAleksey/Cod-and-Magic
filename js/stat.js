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
    var startPointY = 90;
    for (var i = 0; i < names.length; i++) {
        if (names[i] == 'Вы') {
            ctx.fillStyle = 'coral';
        } else {
            ctx.fillStyle = 'rgba(0, 33, 255, ' + Math.random().toFixed(1) + ')';
        }
        ctx.fillRect(startPointX, startPointY, columnWidth, columnHeight);
        startPointX += columnWidth + columnSpacing;
    }
}
