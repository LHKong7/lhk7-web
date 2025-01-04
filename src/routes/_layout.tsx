import { createFileRoute } from '@tanstack/react-router';
import Layout from '../widgets/Layout';

export const Route = createFileRoute('/_layout')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Layout />
}
