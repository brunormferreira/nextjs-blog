import { format, parseISO } from 'date-fns'
import enUS from 'date-fns/locale/en-US'
import pt from 'date-fns/locale/pt-BR'

export const Date = ({ dateString, locale }) => {
  const date = parseISO(dateString)
  return (
    <time dateTime={dateString}>
      {format(date, 'LLLL d, yyyy', { locale: locale === 'en-US' ? enUS : pt })}
    </time>
  )
}

export default Date
