import { useEffect, useState } from 'react'

export function useTyping(text: string, speed = 42, startDelay = 400) {
  const [display, setDisplay] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    let cancelled = false
    const timeouts: ReturnType<typeof setTimeout>[] = []

    const schedule = (fn: () => void, ms: number) => {
      const id = setTimeout(() => {
        if (!cancelled) fn()
      }, ms)
      timeouts.push(id)
    }

    // Defer reset + typing so eslint `set-state-in-effect` is satisfied (async tick).
    schedule(() => {
      setDisplay('')
      setDone(false)

      let i = 0
      const typeNext = () => {
        if (cancelled) return
        i += 1
        setDisplay(text.slice(0, i))
        if (i >= text.length) {
          setDone(true)
          return
        }
        schedule(typeNext, speed)
      }

      schedule(typeNext, startDelay)
    }, 0)

    return () => {
      cancelled = true
      timeouts.forEach(clearTimeout)
    }
  }, [text, speed, startDelay])

  return { display, done }
}
