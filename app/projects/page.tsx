import WebAppsPage from './WebAppsPage'
import BackendPage from './BackendPage'
import IntegrationsPage from './IntegrationsPage'

interface ProjectsPageProps {
  searchParams: Promise<{
    type?: string
  }>
}

export default async function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const params = await searchParams
  const type = params.type

  if (type === 'backend') {
    return <BackendPage />
  }

  if (type === 'integration') {
    return <IntegrationsPage />
  }

  return <WebAppsPage />
}