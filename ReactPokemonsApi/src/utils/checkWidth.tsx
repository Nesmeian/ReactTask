import { useEffect, useState } from 'react'

const checkWidth = (): number => {
    const [windowDimensions, setWindowDimensions] = useState({
        width: window.innerWidth,
    })

    useEffect(() => {
        const handleResize = (): void => {
            setWindowDimensions({
                width: window.innerWidth,
            })
        }
        window.addEventListener('resize', handleResize)
        return (): void => window.removeEventListener('resize', handleResize)
    }, [])
    if (windowDimensions.width <= 600) return 1
    else if (windowDimensions.width <= 900) return 2
    else if (windowDimensions.width <= 1200) return 3
    else return 4
}
export default checkWidth
