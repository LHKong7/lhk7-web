import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/blog')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello! Content coming soon...</div>
}
