// formatDuration.js or in your utils
import { formatDistanceToNow } from 'date-fns'

export const formatDuration = (card, dateMessage) => {
  let dateToFormat;
  let message
  
  // Check based on the dateMessage value
  if (dateMessage === 'Ends' && card.end_date) {
    // If it's "Ends", use the end_date
    dateToFormat = new Date(card.end_date)
    message = 'Ends'
  } else if (dateMessage === 'Starts' && card.start_date) {
    // If it's "Starts", use start_date if it's available
    dateToFormat = new Date(card.start_date)
    message = 'Starts'

  } else if (dateMessage === 'Starts' && !card.start_date && card.created_at) {
    // If there's no start_date, fallback to created_at (this means "Assigned")
    dateToFormat = new Date(card.created_at)
    message = 'Assigned'

  } else if (dateMessage === 'Assigned' && card.created_at) {
    // If it's "Assigned", use created_at
    dateToFormat = new Date(card.created_at)
    message = 'Assigned'
  }

  // Format and return the result, or return a placeholder if no date
  if (dateToFormat) {
    const formattedDistance = formatDistanceToNow(dateToFormat, { addSuffix: true })

    const parts = formattedDistance.split(' ');
  
    // Return everything except the first word
    return message + ': ' + parts.slice(1).join(' ');
  }
  return '—'
}
