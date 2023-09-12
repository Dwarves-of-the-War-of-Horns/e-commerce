export function calculatePaginationLength(length: number, quantity: number): number {
  return length ? Math.round((length + 1) / quantity) : 1
}
