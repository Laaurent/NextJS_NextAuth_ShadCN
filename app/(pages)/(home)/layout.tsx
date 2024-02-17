import NavigationChildrenHeader from "@/components/Layout/navigation/nav-children-header";
import NavigationWrapper from "@/components/Layout/navigation/nav-wrapper";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="h-full bg-background flex w-screen">
      <header className="h-full w-[320px] py-8 px-6">
        <NavigationWrapper />
      </header>

      <section className="flex-1 flex flex-col gap-9 rounded-xl bg-primary-foreground my-2 mr-2 px-6 py-6 w-4/5">
        <NavigationChildrenHeader />
        <main className="overflow-y-auto flex-1">{children}</main>
      </section>
    </main>
  );
}
