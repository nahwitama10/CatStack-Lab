import ProjectsPageClient from '@/components/ProjectsPageClient'

interface PageProps {
  searchParams: Promise<{
    type?: string
  }>
}

export default async function Page({
  searchParams,
}: PageProps) {
  const params = await searchParams

  return (
    <ProjectsPageClient
      typeParam={params.type || 'all'}
    />
  )
}