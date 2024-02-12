import React, {useEffect, useState} from 'react'

const CDNSVGComponent = ({svgUrl}) => {
    const [svgContent, setSvgContent] = useState(null)
    const fetchSvgUrl = async () => {
        const svgData = await fetch(svgUrl)
        const svgTest = await svgData.text()
        setSvgContent(svgTest)
        console.log('****', svgTest)
    }

    useEffect(() => {
        fetchSvgUrl()
    }, [svgUrl])

    return (
        <div
          dangerouslySetInnerHTML={{ __html: svgContent }}
          style={{ display: svgContent ? 'inline-block' : 'none' }}
        />
    )
}

export default CDNSVGComponent
