export function formatTimestamp(timestamp: { seconds: number }): string {
  const date = new Date(timestamp.seconds * 1000);

  const yy = String(date.getFullYear()).slice(-2);
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');

  const hh = String(date.getHours()).padStart(2, '0');
  const min = String(date.getMinutes()).padStart(2, '0');
  const sec = String(date.getSeconds()).padStart(2, '0');

  return `${yy}.${mm}.${dd} ${hh}:${min}:${sec}`;
}
