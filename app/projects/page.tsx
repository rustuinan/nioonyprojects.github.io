import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { ProjectsArchivePage } from '@/components/ProjectsArchivePage';

export default function ProjectsRoute() {
  return (
    <>
      <Header compact />
      <main>
        <ProjectsArchivePage />
      </main>
      <Footer />
    </>
  );
}
