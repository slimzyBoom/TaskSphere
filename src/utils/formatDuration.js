// utils/formatDuration.js
import {
  formatDistanceToNow,
  isPast,
  differenceInDays,
} from 'date-fns'

/**
 * @param {object} card
 *   - card.created_at: ISO string
 *   - card.start_date: ISO string (optional)
 *   - card.end_date:   ISO string (optional)
 * @param {'Ends'|'auto'} mode
 *   - 'auto'  → only show “Ends” if end_date is within 7 days AFTER the start
 *   - 'Ends'  → always show “Ends” (if end_date exists), regardless of how far away
 */
export function formatDuration(card, mode = 'auto') {
  const now = new Date()

  function fmt(label, date) {
    return `${label}: ${formatDistanceToNow(date, { addSuffix: true })}`
  }

  // 1) If there's a start_date, decide Starts vs Started
  if (card.start_date) {
    const start = new Date(card.start_date)

    // Already begun?
    if (isPast(start)) {
      // a) Forced “Ends” mode wins:
      if (mode === 'Ends' && card.end_date) {
        return fmt('Ends', new Date(card.end_date))
      }

      // b) Auto “Ends” only if end_date is within 7 days from now:
      if (card.end_date) {
        const end = new Date(card.end_date)
        const daysUntilEnd = differenceInDays(end, now)
        if (daysUntilEnd >= 0 && daysUntilEnd <= 7) {
          return fmt('Ends', end)
        }
      }

      // Otherwise show “Started”
      return fmt('Started', start)
    }

    // Not yet started
    return fmt('Starts', start)
  }

  // 2) No start_date, but maybe an end_date?
  if (card.end_date) {
    if (mode === 'Ends') {
      return fmt('Ends', new Date(card.end_date))
    }
    // If auto mode, show “Ends” only if within 7 days:
    const end = new Date(card.end_date)
    const daysUntilEnd = differenceInDays(end, now)
    if (daysUntilEnd >= 0 && daysUntilEnd <= 7) {
      return fmt('Ends', end)
    }
  }

  // 3) Fallback: show when it was assigned
  if (card.created_at) {
    return fmt('Assigned', new Date(card.created_at))
  }

  // 4) Nothing to show
  return '—'
}
