import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(timezone)

export const formatDate = (date: string): string => {
  return dayjs(date).tz('America/Sao_Paulo').format('hh:mm DD/MM/YYYY')
}

export const isSameSecondTime = (date: string, compareTo: string): boolean => {
  const firstDate = dayjs(date).format('DD/MM/YYYY-hh:mm:ss')
  const compareDate = dayjs(compareTo).format('DD/MM/YYYY-hh:mm:ss')
  return firstDate === compareDate
}
