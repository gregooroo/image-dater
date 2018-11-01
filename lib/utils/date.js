const pad = s => ((s < 10) ? `0${s}` : s);

function getFormattedDate(date) {
  const d = new Date(date);
  return `${pad(d.getDate())}-${pad(d.getMonth() + 1)}-${d.getFullYear()}`;
}

module.exports = getFormattedDate;
