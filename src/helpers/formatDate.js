import { formatDistanceToNow, format } from 'date-fns';

export default function formateDate(date) {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
}

export function formate(date) {
  return format(new Date(date), 'Pp');
}
