import { AppSidebar } from "@/app/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/app/components/ui/breadcrumb";
import { Separator } from "@/app/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/app/components/ui/sidebar";
import { ThemeToggle } from "@/app/components/theme-toggle";

export default function Page() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">Getting Started</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Introduction</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="ml-auto">
            <ThemeToggle />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-6 p-6 max-w-3xl">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">
              Documentation
            </h1>
            <p className="mt-2 text-muted-foreground text-sm">
              This documentation is a work in progress.
              <br />
              <strong>QuadKore</strong> is just getting started!
            </p>
          </div>
          <div className="bg-muted/50 rounded-xl p-4 text-base text-muted-foreground">
            <p>
              <strong>OmniShop</strong> is our first app: an offline-first store
              management system for small businesses and families.
              <br />
              More details and documentation will be added as development
              continues.
            </p>
            <p className="mt-2">
              Stay tuned for updates and more projects from the QuadKore family.
            </p>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
