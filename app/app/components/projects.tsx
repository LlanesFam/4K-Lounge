import { ArrowUpRight, Construction } from "lucide-react";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { OmniShopLogo } from "@/app/components/ui/omnishop-logo";
import Link from "next/link";

const projects = [
  {
    name: "OmniShop",
    tagline: "Offline-first store management.",
    description:
      "A desktop app built for small businesses and families to manage their store operations without depending on an internet connection. Built with Electron, React, and a local-first data layer.",
    status: "In Progress",
    stack: ["Electron", "React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/LlanesFam/4K-OmniShop",
  },
];

const Projects = () => {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12 lg:py-20">
      <div className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight">Our Projects</h1>
        <p className="mt-2 text-muted-foreground">
          Everything being built under the QuadKore family. More to come.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <Card
            key={project.name}
            className="rounded-2xl border bg-card shadow-none"
          >
            <CardContent className="p-0">
              {/* Logo banner */}
              <div className="flex items-center justify-center rounded-t-2xl border-b bg-muted/40 px-8 py-6 dark:bg-muted/20">
                {project.name === "OmniShop" && (
                  <OmniShopLogo className="h-10 w-auto" />
                )}
              </div>
              <div className="p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h2 className="text-xl font-semibold tracking-tight">
                      {project.name}
                    </h2>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {project.tagline}
                    </p>
                  </div>
                  <Badge
                    variant="secondary"
                    className="flex items-center gap-1 rounded-full"
                  >
                    <Construction className="size-3" />
                    {project.status}
                  </Badge>
                </div>

                <p className="mt-4 text-sm leading-7 text-foreground/80">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6">
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full"
                    asChild
                  >
                    <Link href={project.github} target="_blank">
                      View on GitHub <ArrowUpRight className="ml-1 size-3.5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}

        {/* More coming soon */}
        <div className="flex items-center justify-center rounded-2xl border border-dashed bg-muted/30 p-10 text-center">
          <div>
            <p className="font-medium text-muted-foreground">
              More projects coming soon.
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Powered by Zen Garden
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
