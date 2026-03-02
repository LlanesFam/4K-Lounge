import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { BackgroundPattern } from "@/app/components/background-pattern";
import { ThemeToggle } from "@/app/components/theme-toggle";

export default function Hero() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <BackgroundPattern />
      <div className="absolute top-4 right-4 z-20">
        <ThemeToggle />
      </div>

      <div className="relative z-10 max-w-3xl text-center">
        <Badge
          asChild
          className="rounded-full border-border py-1"
          variant="secondary"
        >
          <Link href="https://github.com/LlanesFam/4K-OmniShop" target="_blank">
            OmniShop is in progress <ArrowUpRight className="ml-1 size-4" />
          </Link>
        </Badge>
        <h1 className="mt-6 font-semibold text-4xl tracking-tighter sm:text-5xl md:text-6xl md:leading-[1.2] lg:text-7xl">
          Four Names. One Family. Endless Builds.
        </h1>
        <p className="mt-6 text-foreground/80 md:text-lg">
          QuadKore is a family-owned studio behind a growing suite of purposeful
          apps. We build tools that solve real problems — starting with{" "}
          <span className="font-bold text-cyan-500">OmniShop</span>, an
          offline-first store management system, with more to come.
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <Button className="rounded-full text-base" size="lg" asChild>
            <Link href="/projects">
              Explore Projects <ArrowUpRight className="h-5! w-5!" />
            </Link>
          </Button>
          <Button
            className="rounded-full text-base shadow-none"
            size="lg"
            variant="outline"
            asChild
          >
            <Link href="https://github.com/LlanesFam" target="_blank">
              <Github className="h-5! w-5!" /> View on GitHub
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
