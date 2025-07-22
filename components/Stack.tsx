"use client"

import type React from "react"

import { motion, useMotionValue, useTransform } from "framer-motion"
import { useState, useEffect } from "react"
import "./Stack.css"

interface CardData {
  id: number
  img: string
  title?: string
  date?: string
  venue?: string
}

interface StackProps {
  randomRotation?: boolean
  sensitivity?: number
  cardDimensions?: { width: number; height: number }
  cardsData?: CardData[]
  animationConfig?: { stiffness: number; damping: number }
  sendToBackOnClick?: boolean
}

function CardRotate({
  children,
  onSendToBack,
  sensitivity,
}: {
  children: React.ReactNode
  onSendToBack: () => void
  sensitivity: number
}) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [60, -60])
  const rotateY = useTransform(x, [-100, 100], [-60, 60])

  function handleDragEnd(_: any, info: any) {
    if (Math.abs(info.offset.x) > sensitivity || Math.abs(info.offset.y) > sensitivity) {
      onSendToBack()
    } else {
      x.set(0)
      y.set(0)
    }
  }

  return (
    <motion.div
      className="card-rotate"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={{ cursor: "grabbing" }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  )
}

export default function Stack({
  randomRotation = false,
  sensitivity = 200,
  cardDimensions = { width: 300, height: 400 },
  cardsData = [],
  animationConfig = { stiffness: 260, damping: 20 },
  sendToBackOnClick = false,
}: StackProps) {
  const [cards, setCards] = useState(
    cardsData.length
      ? cardsData
      : [
          {
            id: 1,
            img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format",
            title: "Summer Festival",
            date: "July 15",
            venue: "Central Park",
          },
          {
            id: 2,
            img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format",
            title: "Rock Concert",
            date: "Aug 20",
            venue: "Madison Square",
          },
          {
            id: 3,
            img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format",
            title: "Jazz Night",
            date: "Sep 5",
            venue: "Blue Note",
          },
          {
            id: 4,
            img: "https://clubbookers.com/wp-content/uploads/2023/01/E11even.jpg",
            title: "Electronic Beats",
            date: "Oct 12",
            venue: "Warehouse",
          },
        ],
  )

  const [dimensions, setDimensions] = useState(cardDimensions)

  // --- NEW: Store random rotations in state ---
  const [randomRotations, setRandomRotations] = useState<number[]>([])

  // Generate random rotations on mount or when cards change
  useEffect(() => {
    if (randomRotation) {
      setRandomRotations(cards.map(() => Math.random() * 10 - 5))
    } else {
      setRandomRotations(cards.map(() => 0))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cards.length, randomRotation])

  // Responsive dimensions
  useEffect(() => {
    const updateDimensions = () => {
      if (window.innerWidth < 768) {
        setDimensions({ width: 350, height: 300 })
      } else if (window.innerWidth < 1024) {
        setDimensions({ width: 500, height: 400 })
      } else {
        setDimensions(cardDimensions)
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [cardDimensions])

  const sendToBack = (id: number) => {
    setCards((prev) => {
      const newCards = [...prev]
      const index = newCards.findIndex((card) => card.id === id)
      const [card] = newCards.splice(index, 1)
      newCards.unshift(card)
      return newCards
    })
    // Also rotate the randomRotations array to match the new card order
    setRandomRotations((prev) => {
      const newRots = [...prev]
      const [rot] = newRots.splice(cards.findIndex((c) => c.id === id), 1)
      newRots.unshift(rot)
      return newRots
    })
  }

  // Wait for randomRotations to be ready
  if (randomRotations.length !== cards.length) return null

  return (
    <div
      className="stack-container"
      style={{
        width: dimensions.width,
        height: dimensions.height,
        perspective: 600,
      }}
    >
      {cards.map((card, index) => {
        const randomRotate = randomRotations[index] || 0

        return (
          <CardRotate key={card.id} onSendToBack={() => sendToBack(card.id)} sensitivity={sensitivity}>
            <motion.div
              className="card"
              onClick={() => sendToBackOnClick && sendToBack(card.id)}
              animate={{
                rotateZ: (cards.length - index - 1) * 4 + randomRotate,
                scale: 1 + index * 0.06 - cards.length * 0.06,
                transformOrigin: "90% 90%",
              }}
              initial={false}
              transition={{
                type: "spring",
                stiffness: animationConfig.stiffness,
                damping: animationConfig.damping,
              }}
              style={{
                width: dimensions.width,
                height: dimensions.height,
              }}
            >
              <img src={card.img || "/placeholder.svg"} alt={`card-${card.id}`} className="card-image" />
              <div className="card-overlay">
                <div className="card-content">
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-date">{card.date}</p>
                  <p className="card-venue">{card.venue}</p>
                </div>
              </div>
            </motion.div>
          </CardRotate>
        )
      })}
    </div>
  )
}
