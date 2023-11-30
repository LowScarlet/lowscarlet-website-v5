export interface image {
  title: string,
  url: string | null,
}

export interface imageModal {
  isOpen: boolean,
  image: image | null
}