import Navbar from '@/components/ui/Navbar';
import Hero from '@/components/sections/Hero';
import ToolsSection from '@/components/sections/ToolsSection';
import ComparisonSection from '@/components/sections/ComparisonSection';
import UseCasesSection from '@/components/sections/UseCasesSection';
import Footer from '@/components/ui/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <Hero />
      <ToolsSection />
      <ComparisonSection />
      <UseCasesSection />
      <Footer />
    </main>
  );
}
