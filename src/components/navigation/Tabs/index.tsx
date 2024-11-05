import { ReactNode } from 'react';

import { cn } from '@/utils/cn';

export type TabLabel = { label: string; icon: ReactNode };

type TabsProps = {
  className?: string;
  currentTabIndex: number;
  tabs: ReactNode[];
  tabLabel: TabLabel[];
  onChangeTab: (index: number) => void;
};

export default function Tabs({
  className,
  currentTabIndex,
  onChangeTab,
  tabs,
  tabLabel,
}: TabsProps) {
  return (
    <section className={cn('flex flex-col items-center', className)}>
      <div role="tablist" className="tabs tabs-bordered w-full">
        {tabLabel.map(({ icon, label }, index) => (
          <button
            key={label}
            role="tab"
            type="button"
            aria-label={`Tab ${index}`}
            className={cn(
              'tab flex items-center gap-2',
              currentTabIndex === index && 'tab-active',
            )}
            onClick={() => onChangeTab(index)}
          >
            <p className="hidden sm:block">{label}</p>
            {icon}
          </button>
        ))}
      </div>
      <div className="w-full py-8">{tabs[currentTabIndex]}</div>
    </section>
  );
}
