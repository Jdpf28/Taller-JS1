import { data } from './Data.js';
var seriesTbody = document.getElementById('series');
var serieDetailsCard = document.getElementById('serie-details');
var SeasonsAvgElm = document.getElementById("avg-seasons");
renderSeriesTable(data);
function renderSeriesTable(series) {
    var seriesTbody = document.getElementById('series');
    var seriesHtml = '';
    series.forEach(function (s) {
        seriesHtml += "\n      <tr>\n        <td>".concat(s.id, "</td>\n        <td>").concat(s.name, "</td>\n        <td>").concat(s.channel, "</td>\n        <td>").concat(s.seasons, "</td>\n      </tr>\n    ");
    });
    seriesTbody.innerHTML = seriesHtml;
    var averageSeasons = calculateAverageSeasons(series);
    var averageSeasonsText = document.getElementById('averageSeasons');
    averageSeasonsText.innerHTML = "Promedio de temporadas: ".concat(averageSeasons);
}
function calculateAverageSeasons(series) {
    var totalSeasons = series.reduce(function (sum, serie) { return sum + serie.seasons; }, 0);
    return totalSeasons / series.length;
}
