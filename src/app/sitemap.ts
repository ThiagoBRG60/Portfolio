import { MetadataRoute } from "next"
import { projects } from "@/data/projects"

function sitemap(): MetadataRoute.Sitemap {
   const baseUrl = "https://thiagocorrea.vercel.app"

   const homeUrl = {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1
   }

   const projectUrls = projects.map(project => ({
      url: `${baseUrl}/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8
   }))

   return [homeUrl, ...projectUrls]
}

export default sitemap