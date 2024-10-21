import { Serie } from './Serie.js';
import { data } from './Data.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;
let serieDetailsCard: HTMLElement = document.getElementById('serie-details')!;
const SeasonsAvgElm: HTMLElement = document.getElementById("avg-seasons")!;

renderSeriesTable(data);

function renderSeriesTable(series: any[]): void {
  const seriesTbody: HTMLElement = document.getElementById('series')!;
  let seriesHtml = '';

  series.forEach(s => {
    seriesHtml += `
      <tr>
        <td>${s.id}</td>
        <td>${s.name}</td>
        <td>${s.channel}</td>
        <td>${s.seasons}</td>
      </tr>
    `;
  });

  seriesTbody.innerHTML = seriesHtml;

  const averageSeasons = calculateAverageSeasons(series);
  const averageSeasonsText: HTMLElement = document.getElementById('averageSeasons')!;
  averageSeasonsText.innerHTML = `Promedio de temporadas: ${averageSeasons}`;
}

function calculateAverageSeasons(series: any[]): number {
  const totalSeasons = series.reduce((sum, serie) => sum + serie.seasons, 0);
  return totalSeasons / series.length;
}

