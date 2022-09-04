import { format, formatDistance } from 'date-fns';

export function convertDateFormat(date: string): string {
  return format(new Date(date), 'yyyy-MM-dd');
}

function calcDateDistance(from: Date, to: Date): string {
  return formatDistance(from, to);
}
