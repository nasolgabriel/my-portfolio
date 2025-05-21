"use client";

/**
 * Refined Floating Dock (Light Theme Only)
 * Enhanced smooth animations with vertical and horizontal support
 **/
import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef, useState } from "react";

// Define allowed positions - we'll focus on vertical layouts
export type DockPosition =
  | "left-vertical"  // Our primary use case
  | "right-vertical"
  | "bottom"
  | "bottom-right";

export const FloatingDock = ({
  items,
  position = "left-vertical",
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  position?: DockPosition;
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop
        items={items}
        position={position}
        className={desktopClassName}
      />
      <FloatingDockMobile
        items={items}
        position={position}
        className={mobileClassName}
      />
    </>
  );
};

const positionMapDesktop: Record<DockPosition, string> = {
  "left-vertical":
    "fixed left-4 top-1/2 transform -translate-y-1/2 flex-col gap-4",
  "right-vertical":
    "fixed right-4 top-1/2 transform -translate-y-1/2 flex-col gap-4",
  bottom: "fixed left-1/2 bottom-4 transform -translate-x-1/2 flex-row gap-4",
  "bottom-right": "fixed right-4 bottom-4 flex-row gap-4",
};

const isVertical = (position: DockPosition) =>
  position === "left-vertical" || position === "right-vertical";

const FloatingDockDesktop = ({
  items,
  position = "left-vertical",
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  position?: DockPosition;
  className?: string;
}) => {
  // Track both axes
  const mouseX = useMotionValue(Infinity);
  const mouseY = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => {
        mouseX.set(e.pageX);
        mouseY.set(e.pageY);
      }}
      onMouseLeave={() => {
        mouseX.set(Infinity);
        mouseY.set(Infinity);
      }}
      className={cn(
        positionMapDesktop[position],
        "hidden md:flex items-center rounded-2xl bg-gray-50 p-3",
        // Set width for vertical layouts, height for horizontal
        isVertical(position) ? "w-16" : "h-16",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer
          key={item.title}
          mouseX={mouseX}
          mouseY={mouseY}
          position={position}
          {...item}
        />
      ))}
    </motion.div>
  );
};

const positionMapMobile: Record<DockPosition, string> = {
  "left-vertical": "fixed left-4 bottom-4 md:hidden",
  "right-vertical": "fixed right-4 bottom-4 md:hidden",
  bottom: "fixed inset-x-0 bottom-4 flex justify-center",
  "bottom-right": "fixed right-4 bottom-4",
};

const FloatingDockMobile = ({
  items,
  position = "left-vertical",
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  position?: DockPosition;
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  const vertical = isVertical(position);

  return (
    <div
      className={cn(positionMapMobile[position], "block md:hidden", className)}
    >
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className={cn(
              "absolute flex gap-2",
              vertical
                ? "left-full ml-2 flex-col top-0"
                : "inset-x-0 bottom-full mb-2 flex-col"
            )}
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  x: vertical ? -10 : 0,
                  y: vertical ? 0 : 10,
                }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{
                  opacity: 0,
                  x: vertical ? -10 : 0,
                  y: vertical ? 0 : 10,
                  transition: { delay: idx * 0.05 },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50"
                >
                  <div className="h-4 w-4">{item.icon}</div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50"
      >
        <IconLayoutNavbarCollapse className="h-5 w-5 text-neutral-500" />
      </button>
    </div>
  );
};

function IconContainer({
  mouseX,
  mouseY,
  title,
  icon,
  href,
  position,
}: {
  mouseX: MotionValue;
  mouseY: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
  position: DockPosition;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const vertical = isVertical(position);

  // More responsive distance calculation
  const distance = useTransform(vertical ? mouseY : mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    };
    return vertical
      ? val - (bounds.y + bounds.height / 2)
      : val - (bounds.x + bounds.width / 2);
  });

  // Refined size transformation with more subtle scaling
  const useSizeFromDistance = (min: number, max: number) =>
    useTransform(distance, [-200, 0, 200], [min, max, min]);

  // Softer spring configuration for smoother animations
  const springConfig = {
    mass: 0.5,
    stiffness: 120,
    damping: 10,
  };

  const width = useSpring(useSizeFromDistance(40, 70), springConfig);
  const height = useSpring(useSizeFromDistance(40, 70), springConfig);
  const widthIcon = useSpring(useSizeFromDistance(20, 35), springConfig);
  const heightIcon = useSpring(useSizeFromDistance(20, 35), springConfig);

  // More subtle horizontal shift
  const hoverX = useSpring(0, {
    mass: 0.3,
    stiffness: 100,
    damping: 8,
  });

  const [hovered, setHovered] = useState(false);

  // Enhanced hover effect with more subtle movement
  const handleHover = (hovering: boolean) => {
    setHovered(hovering);
    if (vertical) {
      hoverX.set(hovering ? 15 : 0);
    }
  };

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <motion.div
        ref={ref}
        style={{
          width,
          height,
          x: vertical ? hoverX : 0,
          scale: hovered ? 1.05 : 1,
        }}
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
        className="relative flex aspect-square items-center justify-center rounded-full bg-gray-200 transition-colors"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{
                opacity: 0,
                x: vertical ? 10 : "-50%",
                y: vertical ? "-50%" : 10,
              }}
              animate={{
                opacity: 1,
                x: vertical ? 0 : "-50%",
                y: vertical ? "-50%" : 0,
              }}
              exit={{
                opacity: 0,
                x: vertical ? 5 : "-50%",
                y: vertical ? "-50%" : 2,
              }}
              className={cn(
                "absolute whitespace-pre rounded-md border border-gray-200 bg-gray-100 px-2 py-0.5 text-xs text-neutral-700 shadow-sm",
                vertical ? "left-full ml-2 top-1/2" : "-top-8 left-1/2"
              )}
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{
            width: widthIcon,
            height: heightIcon,
            scale: hovered ? 0.9 : 1,
          }}
          className="flex items-center justify-center transition-transform"
        >
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
}
