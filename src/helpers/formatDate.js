import { formatDistanceToNow } from 'date-fns'


export default function formateDate(date){
   return formatDistanceToNow(new Date(date), { addSuffix: true })
}