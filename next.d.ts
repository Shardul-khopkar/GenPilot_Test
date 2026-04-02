declare module 'next' {
  export type Metadata = any;
  export type Viewport = any;
}

declare module 'next/navigation' {
  export function useRouter(): any;
  export function usePathname(): string;
  export function useSearchParams(): any;
}

declare module 'next/dist/lib/metadata/types/metadata-interface.js' {
  export interface ResolvingMetadata {}
  export interface ResolvingViewport {}
}

declare module 'next/link' {
  import { ReactNode } from 'react';
  interface LinkProps {
    href: string;
    children?: ReactNode;
    [key: string]: any;
  }
  export default function Link(props: LinkProps): JSX.Element;
}
