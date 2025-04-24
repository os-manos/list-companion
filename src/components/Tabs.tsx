import { TabsConfig } from '@/lib/types';
import { TabsContent, TabsList, TabsRoot, TabsTrigger } from './ui/tabs';
import Link from 'next/link';

type Props<TConfig extends Record<string, TabsConfig>> = {
  config: TConfig;
  defaultValue: keyof TConfig;
  currentPageUrl?: string;
};

export const Tabs = <TConfig extends Record<string, TabsConfig>>({
  config,
  defaultValue,
  currentPageUrl,
}: Props<TConfig>) => {
  return (
    <TabsRoot defaultValue={defaultValue as string}>
      <TabsList className="bg-black">
        {Object.entries(config).map(([key, { name }], index) => (
          <TabsTrigger
            key={index}
            value={key}
            className="bg-black text-white data-[state=active]:bg-gray-500"
            asChild
          >
            {currentPageUrl ? (
              <Link href={`${currentPageUrl}?tab=${key}`}>{name}</Link>
            ) : (
              <span className="cursor-pointer select-none">{name}</span>
            )}
          </TabsTrigger>
        ))}
      </TabsList>

      {Object.entries(config).map(([key, { tab }], index) => (
        <TabsContent key={index} value={key}>
          {tab}
        </TabsContent>
      ))}
    </TabsRoot>
  );
};
