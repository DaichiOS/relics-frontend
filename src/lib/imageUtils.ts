export function getBookCoverUrl(coverImage: string | undefined): string {
  if (!coverImage) {
    return '/images/book-cover.png';
  }
  
  return coverImage;
}