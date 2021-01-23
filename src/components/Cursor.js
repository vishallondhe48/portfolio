import React, { useRef, useEffect } from 'react'
import './cursor.scss'

const Cursor = () => {
    const cursor = useRef(null)
    const cursor_dot_outline = useRef(null)

    useEffect(() => {
        document.addEventListener('mousemove', (event) => {
            cursor.current.style.top = `${event.pageY}px`
            cursor.current.style.left = `${event.pageX}px`
            cursor.current.style.right = `${event.pageX}px`
            cursor.current.style.bottom = `${event.pageY}px`
        })
        document.addEventListener('mousemove', (event) => {
            cursor_dot_outline.current.style.top = `${event.pageY}px`
            cursor_dot_outline.current.style.left = `${event.pageX}px`
            cursor_dot_outline.current.style.right = `${event.pageX}px`
            cursor_dot_outline.current.style.bottom = `${event.pageY}px`
        })
    }, [])



    return (
        <>
            <div className="cursor">
                <div className="cursor-dot" ref={cursor} ></div>
                <div className="cursor-dot-outline" ref={cursor_dot_outline}></div>
            </div>

        </>
    )
}

export default Cursor
