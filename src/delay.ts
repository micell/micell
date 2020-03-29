export default function delay (duration: number = 0): Promise<void> {
  return new Promise(resolve => setTimeout(() => resolve(), duration))
}
