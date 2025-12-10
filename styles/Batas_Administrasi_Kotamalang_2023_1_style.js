var size = 0;
var placement = 'point';
function categories_Batas_Administrasi_Kotamalang_2023_1(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Blimbing':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(247,247,247,0.31520000000000004)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.8}),fill: new ol.style.Fill({color: 'rgba(92,229,54,0.394)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Kedungkandang':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(247,247,247,0.31520000000000004)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.8}),fill: new ol.style.Fill({color: 'rgba(111,207,186,0.394)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Klojen':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(247,247,247,0.31520000000000004)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.8}),fill: new ol.style.Fill({color: 'rgba(184,64,217,0.394)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Lowokwaru':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(247,247,247,0.31520000000000004)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.8}),fill: new ol.style.Fill({color: 'rgba(204,180,93,0.394)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Sukun':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(247,247,247,0.31520000000000004)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.8}),fill: new ol.style.Fill({color: 'rgba(230,68,103,0.394)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Batas_Administrasi_Kotamalang_2023_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("NAMOBJ");
    var labelFont = "24.7px \'Bodoni MT Black\', sans-serif";
    var labelFill = "#050101";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("WADMKC") !== null) {
        labelText = String(feature.get("WADMKC"));
    }
    
    var style = categories_Batas_Administrasi_Kotamalang_2023_1(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
