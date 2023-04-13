import { useEffect, useState } from 'react'

function useImageLoader (image) {
    const [processingImage, setProcessingImage] = useState(true)

    useEffect(() => {
        let interval
        clearInterval(interval)

        if (processingImage) {
            interval = setInterval(() => {
                const img = new Image()
                img.src = image
                img.onload = () => {
                    setProcessingImage(false)
                    clearInterval(interval)
                }
            }, 500)
        }

        return () => clearInterval(interval)
    }, [])

    return { processingImage }
}

export default useImageLoader
