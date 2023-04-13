import { useState, useEffect, useRef } from 'react'

function useNearScreen ({ externalRef, distance = '200px', once = true }) {
    const [isShow, setShow] = useState(false)
    const fromRef = useRef()

    useEffect(() => {
        const ref = externalRef != null ? externalRef.current : fromRef.current

        const handleObserver = (entries, observer) => {
            const e = entries[0]

            if (e.isIntersecting) {
                setShow(true)
                once && observer.disconnect()
            } else {
                !once && setShow(false)
            }
        }

        const observer = new IntersectionObserver(handleObserver, {
            rootMargin: distance
        })

        if (observer) observer.observe(ref)

        return () => observer && observer.disconnect()
    }, [distance, externalRef])

    return { isShow, fromRef }
}

export default useNearScreen
