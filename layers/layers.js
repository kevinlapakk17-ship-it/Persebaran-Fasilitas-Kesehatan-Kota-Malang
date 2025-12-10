ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([112.549122, -8.045485, 112.703703, -7.931685]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Batas_Administrasi_Kotamalang_2023_1 = new ol.format.GeoJSON();
var features_Batas_Administrasi_Kotamalang_2023_1 = format_Batas_Administrasi_Kotamalang_2023_1.readFeatures(json_Batas_Administrasi_Kotamalang_2023_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Batas_Administrasi_Kotamalang_2023_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_Administrasi_Kotamalang_2023_1.addFeatures(features_Batas_Administrasi_Kotamalang_2023_1);
var lyr_Batas_Administrasi_Kotamalang_2023_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Batas_Administrasi_Kotamalang_2023_1, 
                style: style_Batas_Administrasi_Kotamalang_2023_1,
                popuplayertitle: 'Batas_Administrasi_Kotamalang_2023',
                interactive: true,
    title: 'Batas_Administrasi_Kotamalang_2023<br />\
    <img src="styles/legend/Batas_Administrasi_Kotamalang_2023_1_0.png" /> Blimbing<br />\
    <img src="styles/legend/Batas_Administrasi_Kotamalang_2023_1_1.png" /> Kedungkandang<br />\
    <img src="styles/legend/Batas_Administrasi_Kotamalang_2023_1_2.png" /> Klojen<br />\
    <img src="styles/legend/Batas_Administrasi_Kotamalang_2023_1_3.png" /> Lowokwaru<br />\
    <img src="styles/legend/Batas_Administrasi_Kotamalang_2023_1_4.png" /> Sukun<br />' });
var format_SUNGAI_LN_25K_2 = new ol.format.GeoJSON();
var features_SUNGAI_LN_25K_2 = format_SUNGAI_LN_25K_2.readFeatures(json_SUNGAI_LN_25K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SUNGAI_LN_25K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_LN_25K_2.addFeatures(features_SUNGAI_LN_25K_2);
var lyr_SUNGAI_LN_25K_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAI_LN_25K_2, 
                style: style_SUNGAI_LN_25K_2,
                popuplayertitle: 'SUNGAI_LN_25K',
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_LN_25K_2.png" /> SUNGAI_LN_25K'
            });
var format_JALAN_LN_25K_3 = new ol.format.GeoJSON();
var features_JALAN_LN_25K_3 = format_JALAN_LN_25K_3.readFeatures(json_JALAN_LN_25K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_JALAN_LN_25K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_LN_25K_3.addFeatures(features_JALAN_LN_25K_3);
var lyr_JALAN_LN_25K_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_LN_25K_3, 
                style: style_JALAN_LN_25K_3,
                popuplayertitle: 'JALAN_LN_25K',
                interactive: true,
    title: 'JALAN_LN_25K<br />\
    <img src="styles/legend/JALAN_LN_25K_3_0.png" /> Jalan Kolektor<br />\
    <img src="styles/legend/JALAN_LN_25K_3_1.png" /> Jalan Lain<br />\
    <img src="styles/legend/JALAN_LN_25K_3_2.png" /> Jalan Lokal<br />\
    <img src="styles/legend/JALAN_LN_25K_3_3.png" /> Jalan Setapak<br />\
    <img src="styles/legend/JALAN_LN_25K_3_4.png" /> Jalan Tol Dua Jalur Dengan Pemisah Fisik<br />' });
var format_PT_FasilitasKesehatanAtribut_4 = new ol.format.GeoJSON();
var features_PT_FasilitasKesehatanAtribut_4 = format_PT_FasilitasKesehatanAtribut_4.readFeatures(json_PT_FasilitasKesehatanAtribut_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PT_FasilitasKesehatanAtribut_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PT_FasilitasKesehatanAtribut_4.addFeatures(features_PT_FasilitasKesehatanAtribut_4);
var lyr_PT_FasilitasKesehatanAtribut_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PT_FasilitasKesehatanAtribut_4, 
                style: style_PT_FasilitasKesehatanAtribut_4,
                popuplayertitle: 'PT_FasilitasKesehatan+Atribut',
                interactive: true,
                title: '<img src="styles/legend/PT_FasilitasKesehatanAtribut_4.png" /> PT_FasilitasKesehatan+Atribut'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Batas_Administrasi_Kotamalang_2023_1.setVisible(true);lyr_SUNGAI_LN_25K_2.setVisible(true);lyr_JALAN_LN_25K_3.setVisible(true);lyr_PT_FasilitasKesehatanAtribut_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Batas_Administrasi_Kotamalang_2023_1,lyr_SUNGAI_LN_25K_2,lyr_JALAN_LN_25K_3,lyr_PT_FasilitasKesehatanAtribut_4];
lyr_Batas_Administrasi_Kotamalang_2023_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'WADMKC': 'WADMKC', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'Lat': 'Lat', 'Long': 'Long', });
lyr_SUNGAI_LN_25K_2.set('fieldAliases', {'REMARK': 'REMARK', 'LCODE': 'LCODE', });
lyr_JALAN_LN_25K_3.set('fieldAliases', {'REMARK': 'REMARK', 'LCODE': 'LCODE', });
lyr_PT_FasilitasKesehatanAtribut_4.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Jam buka -': 'Jam buka -', 'Jenis fasi': 'Jenis fasi', 'Jenis pela': 'Jenis pela', 'Status Neg': 'Status Neg', 'Alamat': 'Alamat', 'Kelurahan': 'Kelurahan', 'Kecamatan': 'Kecamatan', 'Provinsi': 'Provinsi', 'Nomor Tele': 'Nomor Tele', 'Lat': 'Lat', 'Long': 'Long', });
lyr_Batas_Administrasi_Kotamalang_2023_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', });
lyr_SUNGAI_LN_25K_2.set('fieldImages', {'REMARK': 'TextEdit', 'LCODE': 'TextEdit', });
lyr_JALAN_LN_25K_3.set('fieldImages', {'REMARK': 'TextEdit', 'LCODE': 'TextEdit', });
lyr_PT_FasilitasKesehatanAtribut_4.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Jam buka -': 'TextEdit', 'Jenis fasi': 'TextEdit', 'Jenis pela': 'TextEdit', 'Status Neg': 'TextEdit', 'Alamat': 'TextEdit', 'Kelurahan': 'TextEdit', 'Kecamatan': 'TextEdit', 'Provinsi': 'TextEdit', 'Nomor Tele': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', });
lyr_Batas_Administrasi_Kotamalang_2023_1.set('fieldLabels', {'OBJECTID': 'no label', 'NAMOBJ': 'no label', 'FCODE': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'WADMKC': 'no label', 'WADMKK': 'no label', 'WADMPR': 'hidden field', 'Lat': 'no label', 'Long': 'no label', });
lyr_SUNGAI_LN_25K_2.set('fieldLabels', {'REMARK': 'no label', 'LCODE': 'no label', });
lyr_JALAN_LN_25K_3.set('fieldLabels', {'REMARK': 'no label', 'LCODE': 'no label', });
lyr_PT_FasilitasKesehatanAtribut_4.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Jam buka -': 'no label', 'Jenis fasi': 'no label', 'Jenis pela': 'no label', 'Status Neg': 'no label', 'Alamat': 'no label', 'Kelurahan': 'no label', 'Kecamatan': 'no label', 'Provinsi': 'no label', 'Nomor Tele': 'no label', 'Lat': 'no label', 'Long': 'no label', });
lyr_PT_FasilitasKesehatanAtribut_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'difference';
});