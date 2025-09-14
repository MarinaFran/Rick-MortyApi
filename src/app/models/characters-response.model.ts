export interface CharactersResponse {
  name: string;
  id: number;
  status: string;
  species: string;
  type: string;
  image: string;
}

export interface PagedRequest {
  pages: number;
  next: string | null;
  prev: string | null;
}
