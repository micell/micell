import isBrowser from './isBrowser'

let now: () => number

// @ts-ignore
if (isBrowser && window.performance && window.performance.now) {
  now = (): number => performance.now()
} else {
  const loadTime = Date.now()
  now = (): number => Date.now() - loadTime
}

export default now
