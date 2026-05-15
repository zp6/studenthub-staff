/**
 * date-fns v3 replacements for moment.js. Part of issue #31.
 * Replaces common moment patterns with tree-shakeable date-fns functions.
 */
import {
  format,
  formatDistanceToNow,
  differenceInDays,
  addDays,
  isBefore,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  parseISO,
  isValid,
  subDays,
  addMonths,
  subMonths,
} from 'date-fns';

// Replacements for moment().format()
export function formatDate(date: Date | string | number, pattern: string = 'dd/MM/yyyy'): string {
  const d = typeof date === 'string' ? parseISO(date) : new Date(date);
  return isValid(d) ? format(d, pattern) : '';
}

// Replacement for moment(date).fromNow()
export function timeAgo(date: Date | string | number): string {
  const d = typeof date === 'string' ? parseISO(date) : new Date(date);
  return isValid(d) ? formatDistanceToNow(d, { addSuffix: true }) : '';
}

// Replacement for moment(date).diff(other, 'days')
export function daysBetween(date: Date | string | number, other: Date | string | number): number {
  const a = typeof date === 'string' ? parseISO(date) : new Date(date);
  const b = typeof other === 'string' ? parseISO(other) : new Date(other);
  return differenceInDays(a, b);
}

// Replacement for moment(date).add(7, 'days')
export function addDaysToDate(date: Date | string | number, days: number): Date {
  const d = typeof date === 'string' ? parseISO(date) : new Date(date);
  return addDays(d, days);
}

// Replacement for moment(date).isBefore(other)
export function isDateBefore(date: Date | string | number, other: Date | string | number): boolean {
  const a = typeof date === 'string' ? parseISO(date) : new Date(date);
  const b = typeof other === 'string' ? parseISO(other) : new Date(other);
  return isBefore(a, b);
}

// Replacement for moment(date).startOf('month')
export function getStartOfMonth(date: Date | string | number): Date {
  const d = typeof date === 'string' ? parseISO(date) : new Date(date);
  return startOfMonth(d);
}

// Replacement for moment(date).endOf('month')
export function getEndOfMonth(date: Date | string | number): Date {
  const d = typeof date === 'string' ? parseISO(date) : new Date(date);
  return endOfMonth(d);
}
