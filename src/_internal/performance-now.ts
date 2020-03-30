import isBrowser from './isBrowser'

let now: () => number

if (isBrowser && window.performance && window.performance.now) {
  now = (): number => performance.now()
} else {
  const loadTime = Date.now()
  now = (): number => Date.now() - loadTime
}

export default now
