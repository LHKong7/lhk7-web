/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LayoutImport } from './routes/_layout'
import { Route as LayoutBlogImport } from './routes/_layout.blog'

// Create Virtual Routes

const LayoutIndexLazyImport = createFileRoute('/_layout/')()

// Create/Update Routes

const LayoutRoute = LayoutImport.update({
  id: '/_layout',
  getParentRoute: () => rootRoute,
} as any)

const LayoutIndexLazyRoute = LayoutIndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => LayoutRoute,
} as any).lazy(() => import('./routes/_layout.index.lazy').then((d) => d.Route))

const LayoutBlogRoute = LayoutBlogImport.update({
  id: '/blog',
  path: '/blog',
  getParentRoute: () => LayoutRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_layout': {
      id: '/_layout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LayoutImport
      parentRoute: typeof rootRoute
    }
    '/_layout/blog': {
      id: '/_layout/blog'
      path: '/blog'
      fullPath: '/blog'
      preLoaderRoute: typeof LayoutBlogImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/': {
      id: '/_layout/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof LayoutIndexLazyImport
      parentRoute: typeof LayoutImport
    }
  }
}

// Create and export the route tree

interface LayoutRouteChildren {
  LayoutBlogRoute: typeof LayoutBlogRoute
  LayoutIndexLazyRoute: typeof LayoutIndexLazyRoute
}

const LayoutRouteChildren: LayoutRouteChildren = {
  LayoutBlogRoute: LayoutBlogRoute,
  LayoutIndexLazyRoute: LayoutIndexLazyRoute,
}

const LayoutRouteWithChildren =
  LayoutRoute._addFileChildren(LayoutRouteChildren)

export interface FileRoutesByFullPath {
  '': typeof LayoutRouteWithChildren
  '/blog': typeof LayoutBlogRoute
  '/': typeof LayoutIndexLazyRoute
}

export interface FileRoutesByTo {
  '/blog': typeof LayoutBlogRoute
  '/': typeof LayoutIndexLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_layout': typeof LayoutRouteWithChildren
  '/_layout/blog': typeof LayoutBlogRoute
  '/_layout/': typeof LayoutIndexLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '' | '/blog' | '/'
  fileRoutesByTo: FileRoutesByTo
  to: '/blog' | '/'
  id: '__root__' | '/_layout' | '/_layout/blog' | '/_layout/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  LayoutRoute: typeof LayoutRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  LayoutRoute: LayoutRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_layout"
      ]
    },
    "/_layout": {
      "filePath": "_layout.tsx",
      "children": [
        "/_layout/blog",
        "/_layout/"
      ]
    },
    "/_layout/blog": {
      "filePath": "_layout.blog.tsx",
      "parent": "/_layout"
    },
    "/_layout/": {
      "filePath": "_layout.index.lazy.tsx",
      "parent": "/_layout"
    }
  }
}
ROUTE_MANIFEST_END */
