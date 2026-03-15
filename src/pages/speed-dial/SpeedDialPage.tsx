import { useState } from 'react';
import { categories } from '@/entities/category';
import { CategoryTabs } from '@/widgets/category-tabs';
import { SearchBar } from '@/widgets/search-bar';
import { LinkGrid } from '@/widgets/link-grid';
import { Footer } from '@/widgets/footer';

export function SpeedDialPage() {
  const [activeCategory, setActiveCategory] = useState(categories[0].key);

  const currentCategory = categories.find((c) => c.key === activeCategory) ?? categories[0];

  return (
    <div className="flex min-h-screen flex-col bg-[#08090d] font-sans text-white antialiased">
      <CategoryTabs activeKey={activeCategory} onChange={setActiveCategory} />

      <main className="flex flex-1 flex-col items-center px-6 pt-10">
        <SearchBar />
        <LinkGrid links={currentCategory.links} />
      </main>

      <Footer />
    </div>
  );
}
