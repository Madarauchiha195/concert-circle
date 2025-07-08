"use client"

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react"
import { gsap } from "gsap"
import "./Masonry.css"

interface MasonryItem {
  id: string
  img: string
  colorImg: string
  url: string
  height: number
  artist: string
}

interface MasonryProps {
  items: MasonryItem[]
  ease?: string
  duration?: number
  stagger?: number
  animateFrom?: "bottom" | "top" | "left" | "right"
  scaleOnHover?: boolean
  hoverScale?: number
  blurToFocus?: boolean
  colorShiftOnHover?: boolean
}

const useMedia = (queries: string[], values: any[], defaultValue: any) => {
  const get = () =>
    typeof window !== "undefined"
      ? values[queries.findIndex((q) => window.matchMedia(q).matches)] ?? defaultValue
      : defaultValue

  const [value, setValue] = useState(get)

  useEffect(() => {
    const handler = () => setValue(get)
    const mediaQueryLists = queries.map((q) => matchMedia(q))

    mediaQueryLists.forEach((mql) => mql.addEventListener("change", handler))

    return () => {
      mediaQueryLists.forEach((mql) => mql.removeEventListener("change", handler))
    }
  }, [queries, values])

  return value
}

const Masonry = ({
  items,
  ease = "power3.out",
  duration = 0.6,
  stagger = 0.05,
  animateFrom = "bottom",
  scaleOnHover = true,
  hoverScale = 0.95,
  blurToFocus = true,
  colorShiftOnHover = false,
}: MasonryProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const itemsRef = useRef<(HTMLDivElement | null)[]>([])
  const [clickedItems, setClickedItems] = useState<Set<string>>(new Set())

  const columns = useMedia(["(min-width: 1024px)", "(min-width: 768px)", "(min-width: 640px)"], [4, 3, 2], 2)

  const isMobile = useMedia(["(max-width: 768px)"], [true], false)

  // Adjust item heights for mobile
  const adjustedItems = useMemo(() => {
    if (isMobile) {
      return items.map((item) => ({
        ...item,
        height: Math.max(200, item.height * 0.8), // Reduce height by 40% but minimum 200px
      }))
    }
    return items
  }, [items, isMobile])

  const columnizedItems = useMemo(() => {
    const cols: MasonryItem[][] = Array.from({ length: columns }, () => [])
    const colHeights = Array(columns).fill(0)

    adjustedItems.forEach((item) => {
      const shortestColIndex = colHeights.indexOf(Math.min(...colHeights))
      cols[shortestColIndex].push(item)
      colHeights[shortestColIndex] += item.height
    })

    return cols
  }, [adjustedItems, columns])

  useLayoutEffect(() => {
    if (!containerRef.current) return

    const ctx = gsap.context(() => {
      const elements = itemsRef.current.filter(Boolean)

      gsap.set(elements, {
        opacity: 0,
        y: animateFrom === "bottom" ? 50 : animateFrom === "top" ? -50 : 0,
        x: animateFrom === "left" ? -50 : animateFrom === "right" ? 50 : 0,
        scale: 0.8,
      })

      gsap.to(elements, {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        duration,
        ease,
        stagger,
      })
    }, containerRef)

    return () => ctx.revert()
  }, [columnizedItems, animateFrom, duration, ease, stagger])

  const handleItemInteraction = (itemId: string, isEnter = true) => {
    if (isMobile) {
      // Mobile: toggle on click
      if (isEnter) {
        setClickedItems((prev) => {
          const newSet = new Set(prev)
          if (newSet.has(itemId)) {
            newSet.delete(itemId)
          } else {
            newSet.add(itemId)
          }
          return newSet
        })
      }
    }
  }

  const handleMouseEnter = (index: number, itemId: string) => {
    if (isMobile) return

    const element = itemsRef.current[index]
    if (!element) return

    gsap.to(element, {
      scale: scaleOnHover ? hoverScale : 1,
      duration: 0.3,
      ease: "power2.out",
    })

    if (blurToFocus) {
      gsap.to(element.querySelector(".masonry-image"), {
        filter: "blur(0px) grayscale(0%)",
        duration: 0.4,
        ease: "power2.out",
      })
    }
  }

  const handleMouseLeave = (index: number) => {
    if (isMobile) return

    const element = itemsRef.current[index]
    if (!element) return

    gsap.to(element, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    })

    if (blurToFocus) {
      gsap.to(element.querySelector(".masonry-image"), {
        filter: "blur(0px) grayscale(100%)",
        duration: 0.4,
        ease: "power2.out",
      })
    }
  }

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null; // or a placeholder

  return (
    <div ref={containerRef} className="masonry-container">
      <div className="masonry-grid" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
        {columnizedItems.map((column, colIndex) => (
          <div key={colIndex} className="masonry-column">
            {column.map((item, itemIndex) => {
              const globalIndex = colIndex * Math.ceil(adjustedItems.length / columns) + itemIndex
              const isActive = clickedItems.has(item.id)

              return (
                <div
                  key={item.id}
                  ref={(el) => { itemsRef.current[globalIndex] = el }}
                  className="masonry-item"
                  style={{ height: `${item.height}px` }}
                  onMouseEnter={() => handleMouseEnter(globalIndex, item.id)}
                  onMouseLeave={() => handleMouseLeave(globalIndex)}
                  onClick={() => handleItemInteraction(item.id)}
                >
                  <div className="masonry-image-container">
                    <img
                      src={item.img || "/placeholder.svg"}
                      alt={item.artist}
                      className={`masonry-image ${isMobile && isActive ? "active" : ""}`}
                      loading="lazy"
                    />
                    <img
                      src={item.colorImg || "/placeholder.svg"}
                      alt={item.artist}
                      className={`masonry-image masonry-image-color ${isMobile && isActive ? "active" : ""}`}
                      loading="lazy"
                    />
                    <div className="masonry-overlay">
                      <div className="masonry-content">
                        <h3 className="masonry-title">{item.artist}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Masonry
