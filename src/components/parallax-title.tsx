"use client"
import "./parallax-title.css"
import React, { useEffect, useRef, useState } from "react"

interface Position {
  x: number
  y: number
}

export type ParallaxHeroProps = {
  children: React.ReactNode
}

export const ParallaxHero = ({ children }: ParallaxHeroProps) => {
  const [pos, setPos] = useState<Position>({ x: 0, y: 0 })

  const sectionRef = useRef<HTMLHeadingElement>(null)
  const firstWordRef = useRef<HTMLSpanElement>(null)
  const secondWordRef = useRef<HTMLSpanElement>(null)

  const onMouseMove = (e: React.MouseEvent) => {
    setPos({ x: e.pageX, y: e.pageY })
  }

  useEffect(() => {
    const createShadow = () => {
      if ("ontouchstart" in window) return

      let [moveX, moveY] = [pos.x / -140, pos.y / -160]

      if (firstWordRef.current && secondWordRef.current && sectionRef.current) {
        firstWordRef.current.style.transform = `translate3d(${
          moveX / 2
        }px, ${moveY}px, 0)`
        secondWordRef.current.style.transform = `translate3d(${
          moveX / 2
        }px, ${moveY}px, 0)`
        sectionRef.current.style.textShadow = `${moveX}px ${moveY}px rgba(0, 0, 0, 0.1)`
      }
    }

    createShadow()
  }, [pos])

  return (
    <section
      className="z-50 flex min-h-screen w-full flex-col items-center justify-center"
      onMouseMove={onMouseMove}
    >
      <div className="relative mb-8 w-full">
        <h1
          className="middle parallax text-xl font-semibold  sm:text-3xl md:text-4xl"
          ref={sectionRef}
        >
          A Helping{" "}
          <span className="bold font-bold text-cyan-400" ref={firstWordRef}>
            Hand
          </span>{" "}
          For
          <br />
          Your{" "}
          <span className="bold font-bold text-cyan-400" ref={secondWordRef}>
            Next.js
          </span>{" "}
          Journey
        </h1>
      </div>
      {children}
    </section>
  )
}
