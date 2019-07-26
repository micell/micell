import isBrowser from './isBrowser'

let now

if (isBrowser && window.performance && window.performance.now) {
  now = () => performance.now()
} else {
  const loadTime = Date.now()
  now = () => Date.now - loadTime
}

export default now
