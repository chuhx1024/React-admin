import React, { useState } from 'react'
import { Tooltip, Button } from 'antd'
import { FullscreenExitOutlined, FullscreenOutlined } from '@ant-design/icons'

const TheFullScreen: React.FC = () => {
    const [isFull, setIsFull] = useState(false)
    const requestFullScreen = () => {
        const de = document.documentElement
        if (de.requestFullscreen) {
            de.requestFullscreen()
        }
    }

    const exitFullscreen = () => {
        const de = document
        if (de.exitFullscreen) {
            de.exitFullscreen()
        }
    }

    const toFullOrExit = () => {
        setIsFull(!isFull)
        if (isFull) {
            requestFullScreen()
        } else {
            exitFullscreen()
        }
    }

    return (
        <Tooltip placement="bottom" title={isFull ? '退出全屏' : '全屏'} arrow={true}>
            <Button
                type="text"
                onClick={toFullOrExit}
                icon={isFull ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
                style={{
                    fontSize: '16px',
                    width: 64,
                    height: 64,
                    marginRight: 10,
                }}
            />
        </Tooltip>
    )
}

export default TheFullScreen
