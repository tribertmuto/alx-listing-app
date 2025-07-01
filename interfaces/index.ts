export interface CardProps {
  title: string
  description: string
  image: string
}

export interface ButtonProps {
  label: string
  onClick: () => void
}
export const API_URL = 'https://api.example.com/properties'

export const PLACEHOLDER_IMAGE = '/assets/placeholder.jpg'

export const UI_TEXT = {
  bookNow: 'Book Now',
  viewDetails: 'View Details',
}
