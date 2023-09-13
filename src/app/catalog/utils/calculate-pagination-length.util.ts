export function calculatePaginationLength(length: number, quantity: number): number {
  return Math.round(length / quantity)
}
