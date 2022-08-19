export default function delay(duration = 0): Promise<void> {
  return new Promise((resolve) => setTimeout(() => resolve(), duration))
}
