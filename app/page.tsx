import ActionButton from "@/components/action-button";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ProjectShowcase from "@/components/project-showcase";
import Sidebar from "@/components/sidebar";
import SkillOutline from "@/components/skill-outline";
import { Separator } from "@/components/ui/separator";
import { IBlogPosts } from "@/lib/data";
import BlogPosts from "@/components/blog-posts";
import { getPosts, Project, aboutYou, marketingHeadlines, projects, skills } from "@/lib/data";
 
export default async function Home() {
  const blogs: IBlogPosts[] = await getPosts();

  return (
    <div className="md:max-w-3xl mx-auto md:mt-8">
      <Navbar />
      <div className="flex flex-col md:flex-row my-10 mx-10 md:mx-0 space-x-0 md:space-x-10 space-y-10 md:space-y-0 ">
        <Sidebar />
        <div className="md:min-w-[65vh] min-w-full space-y-10">
          <section id="home" key="home" className="space-y-5">
            <div className="text-2xl font-bold tracking-tight">
              {marketingHeadlines.mainHeadline}
            </div>
            <div className="text-muted-foreground">
              {marketingHeadlines.subHeadline}
            </div>
            <div>
              <Separator />
            </div>
            <div className="flex justify-between">
              <ActionButton actionText="Hire me" />
              <div className="space-y-1">
                <h3 className="font-medium leading-none">
                  {aboutYou.yearsOfExperience}
                </h3>
                <p className="text-xs text-muted-foreground">Experience</p>
              </div>
              <div className="space-y-1">
                <h3 className="font-medium leading-none">
                  {aboutYou.location}
                </h3>
                <p className="text-xs text-muted-foreground">Location</p>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-xs text-muted-foreground">
                <strong>My techs stack</strong>
              </p>
              <div className="space-y-2">
                {skills.map((skill) => (
                  <SkillOutline
                    key={skill.text}
                    Icon={skill.icon}
                    // text={skill.text}
                  />
                ))}
              </div>
            </div>
          </section>

          <section id="projects" key="projects">
            <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
            <div>
              <div className="space-y-5 mt-5">
                {projects.map((project: Project) => (
                  <ProjectShowcase key={project.title} project={project} />
                ))}
              </div>
            </div>
          </section>

          <section id="blog" key="work">
            <h2 className="text-2xl font-semibold tracking-tight">Blog</h2>
            <div className="mt-5 rounded-xl border bg-card text-card-foreground shadow">
              <div className="p-6 space-y-6">
                {blogs.map((blog) => (
                  <BlogPosts blog={blog} key={blog.url} />
                ))}
              </div>
            </div>
          </section>

          <section id="contact" key="contact">
            <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
            <div className="mt-5 rounded-xl border bg-card text-card-foreground shadow">
              <p className="p-6 text-sm text-muted-foreground">
                Best way to reach me is through:{" "}
                <a href={`mailto:${aboutYou.email}`}>{aboutYou.email}</a>
              </p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
