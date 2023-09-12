export function calculateChunk(index: number, quantity: number): number[] {
  const start = quantity * index
  const end = start + quantity

  return [start, end]
}
