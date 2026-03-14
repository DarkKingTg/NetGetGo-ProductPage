// src/utils/helpers.js
// Utility functions used across the project

/**
 * Debounce — limits how often a function fires
 * Used for scroll and resize event listeners
 */
export function debounce(fn, delay = 100) {
  let timer
  return (...args) => {
    clearTimeout(timer)
    timer = setTimeout(() => fn(...args), delay)
  }
}

/**
 * Clamp — keeps a number within a min/max range
 */
export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max)
}

/**
 * Format currency — Indian Rupee formatting
 */
export function formatINR(amount) {
  return new Intl.NumberFormat('en-IN', {
    style:    'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount)
}

/**
 * Truncate text — cuts long strings with ellipsis
 */
export function truncate(str, maxLength = 100) {
  if (str.length <= maxLength) return str
  return str.slice(0, maxLength).trim() + '...'
}