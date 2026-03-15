import type { Link } from '@/entities/link';

export interface Category {
  key: string;
  name: string;
  dotColor: string;
  links: Link[];
}
