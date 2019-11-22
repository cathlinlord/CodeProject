// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/AddData/nls/strings":{_widgetLabel:"\ub370\uc774\ud130 \ucd94\uac00",noOptionsConfigured:"\uad6c\uc131\ub41c \uc635\uc158\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.",tabs:{search:"\uac80\uc0c9",url:"URL",file:"\ud30c\uc77c"},search:{featureLayerTitlePattern:"{serviceName} - {layerName}",layerInaccessible:"\ub808\uc774\uc5b4\uc5d0 \uc811\uadfc\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.",loadError:"\ub370\uc774\ud130 \ucd94\uac00, \ub85c\ub4dc\ud560 \uc218 \uc5c6\uc74c:",searchBox:{search:"\uac80\uc0c9",
placeholder:"\uac80\uc0c9..."},bboxOption:{bbox:"\ub9f5 \ub0b4\ubd80"},scopeOptions:{anonymousContent:"\ucf58\ud150\uce20",myContent:"\ub0b4 \ucf58\ud150\uce20",myOrganization:"\ub0b4 \uae30\uad00",curated:"\uc120\ubcc4\ub428",ArcGISOnline:"ArcGIS Online"},sortOptions:{prompt:"\uc815\ub82c \uae30\uc900:",relevance:"\uad00\ub828\uc131",title:"\uc81c\ubaa9",owner:"\uc18c\uc720\uc790",rating:"\ud3c9\uc810",views:"\uc870\ud68c\uc218",date:"\ub0a0\uc9dc",switchOrder:"\uc804\ud658"},typeOptions:{prompt:"\uc720\ud615",
mapService:"\ub9f5 \uc11c\ube44\uc2a4",featureService:"\ud53c\ucc98 \uc11c\ube44\uc2a4",imageService:"\uc774\ubbf8\uc9c0 \uc11c\ube44\uc2a4",vectorTileService:"\ubca1\ud130 \ud0c0\uc77c \uc11c\ube44\uc2a4",kml:"KML",wms:"WMS"},resultsPane:{noMatch:"\uacb0\uacfc\ub97c \ucc3e\uc744 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."},paging:{first:"\x3c\x3c",firstTip:"\uccab \ubc88\uc9f8",previous:"\x3c",previousTip:"\uc774\uc804",next:"\x3e",nextTip:"\ub2e4\uc74c",pagePattern:"{page}"},resultCount:{countPattern:"{count} {type}",
itemSingular:"\ud56d\ubaa9",itemPlural:"\ud56d\ubaa9"},item:{actions:{add:"\ucd94\uac00",close:"\ub2eb\uae30",remove:"\uc81c\uac70",details:"\uc138\ubd80\uc815\ubcf4",done:"\uc644\ub8cc",editName:"\uc774\ub984 \ud3b8\uc9d1"},messages:{adding:"\ucd94\uac00\ud558\ub294 \uc911...",removing:"\uc81c\uac70\ud558\ub294 \uc911...",added:"\ucd94\uac00\ub428",addFailed:"\ucd94\uac00\ud558\uc9c0 \ubabb\ud568",unsupported:"\uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc74c"},typeByOwnerPattern:"{type} \uc18c\uc720\uc790 {owner}",
dateFormat:"yyyy MMMM d",datePattern:"{date}",ratingsCommentsViewsPattern:"{ratings} {ratingsIcon} {comments} {commentsIcon} {views} {viewsIcon}",ratingsCommentsViewsLabels:{ratings:'ratings", "comments": "comments", "views": "views'},types:{"Map Service":"\ub9f5 \uc11c\ube44\uc2a4","Feature Service":"\ud53c\ucc98 \uc11c\ube44\uc2a4","Image Service":"\uc774\ubbf8\uc9c0 \uc11c\ube44\uc2a4","Vector Tile Service":"\ubca1\ud130 \ud0c0\uc77c \uc11c\ube44\uc2a4",WMS:"WMS",KML:"KML"}}},addFromUrl:{type:"\uc720\ud615",
url:"URL",types:{ArcGIS:"ArcGIS Server \uc6f9 \uc11c\ube44\uc2a4",WMS:"WMS OGC \uc6f9 \uc11c\ube44\uc2a4",WMTS:"WMTS OGC \uc6f9 \uc11c\ube44\uc2a4",WFS:"WFS OGC \uc6f9 \uc11c\ube44\uc2a4",KML:"KML \ud30c\uc77c",GeoRSS:"GeoRSS \ud30c\uc77c",CSV:"CSV \ud30c\uc77c"},samplesHint:"\uc0d8\ud50c URL"},addFromFile:{intro:"\ub2e4\uc74c \ud30c\uc77c \uc720\ud615\uc744 \ub4dc\ub86d\ud558\uac70\ub098 \ucc3e\uc544\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.",types:{Shapefile:"\uc250\uc774\ud504\ud30c\uc77c(.zip, \ubaa8\ub4e0 \uc250\uc774\ud504 \ud30c\uc77c\uc774 \ud3ec\ud568\ub41c ZIP \uc544\uce74\uc774\ube0c)",
CSV:"CSV \ud30c\uc77c(.csv, \uc8fc\uc18c \ub610\ub294 \uc704\ub3c4/\uacbd\ub3c4\uac00 \ud3ec\ud568\ub41c \ud30c\uc77c, \uc138\ubbf8\ucf5c\ub860 \ub610\ub294 \ud0ed\uc73c\ub85c \uad6c\ubd84\ub41c \ud30c\uc77c)",KML:"KML \ud30c\uc77c(.kml)",GPX:"GPX \ud30c\uc77c(.gpx, GPS Exchange \ud615\uc2dd)",GeoJSON:"GeoJSON \ud30c\uc77c(.geo.json \ub610\ub294 .geojson)"},generalizeOn:"\uc6f9 \ubcf4\uae30\ub97c \uc704\ud55c \ud53c\ucc98 \uc77c\ubc18\ud654",dropOrBrowse:"\ub4dc\ub86d \ub610\ub294 \ucc3e\uc544\ubcf4\uae30",
browse:"\ucc3e\uc544\ubcf4\uae30",invalidType:"\uc774 \ud30c\uc77c \ud615\uc2dd\uc740 \uc9c0\uc6d0\ub418\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.",addingPattern:"{filename}: \ucd94\uac00 \uc911...",addFailedPattern:"{filename}: \ucd94\uac00 \uc2e4\ud328",featureCountPattern:"{filename}: \ud53c\ucc98 {count}\uac1c",invalidTypePattern:"{filename}: \uc774 \ud615\uc2dd\uc740 \uc9c0\uc6d0\ub418\uc9c0 \uc54a\uc74c",maxFeaturesAllowedPattern:"\ucd5c\ub300 {count}\uac1c \ud53c\ucc98\uac00 \ud5c8\uc6a9\ub428",layerNamePattern:"{filename} - {name}",
generalIssue:"\ubb38\uc81c\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.",kmlProjectionMismatch:"\ub9f5\uacfc KML \ub808\uc774\uc5b4\uc758 \uacf5\uac04 \ucc38\uc870\uac00 \uc77c\uce58\ud558\uc9c0 \uc54a\uc73c\uba70 \ud074\ub77c\uc774\uc5b8\ud2b8\uc5d0\uc11c \ubcc0\ud658\uc744 \uc218\ud589\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."},layerList:{caption:"\ub808\uc774\uc5b4",noLayersAdded:"\ucd94\uac00\ub41c \ub808\uc774\uc5b4\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.",removeLayer:"\ub808\uc774\uc5b4 \uc81c\uac70",
back:"\ub4a4\ub85c"},_localized:{}}});