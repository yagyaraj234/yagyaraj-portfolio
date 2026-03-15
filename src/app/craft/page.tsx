import Container from "../components/container"
import { Navbar } from "../components/navbar"
import Image from "next/image"

const images = [
  {
    src: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Mountain landscape",
    width: 800,
    height: 1200,
  },
  {
    src: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Breakfast",
    width: 800,
    height: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Burger",
    width: 800,
    height: 500,
  },
  {
    src: "https://images.unsplash.com/photo-1522770179533-24471fcdba45?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Camera",
    width: 800,
    height: 1000,
  },
  {
    src: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Coffee",
    width: 800,
    height: 900,
  },
  {
    src: "https://images.unsplash.com/photo-1533827432537-70133748f5c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Hats",
    width: 800,
    height: 600,
  },
  {
    src: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Honey",
    width: 800,
    height: 1100,
  },
  {
    src: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Basketball",
    width: 800,
    height: 800,
  },
  {
    src: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Fern",
    width: 800,
    height: 700,
  },
  {
    src: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Mushrooms",
    width: 800,
    height: 900,
  },
]

export default function CraftPage() {
  return (
    <Container>
      <Navbar />
      <div className="mt-8 space-y-8">
        <div className="px-4">
          <h1 className="mb-2 text-3xl font-bold tracking-tight">My Craft</h1>
          <p className="text-gray-500 dark:text-gray-400">
            A collection of things I've built, or designed.
          </p>
        </div>
      </div>
    </Container>
  )
}
