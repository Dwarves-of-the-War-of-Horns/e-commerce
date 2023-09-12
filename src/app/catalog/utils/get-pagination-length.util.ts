export function getPaginationLength(length: number, quantity: number): number {
  return length ? Math.round((length + 1) / quantity) : 1
}
