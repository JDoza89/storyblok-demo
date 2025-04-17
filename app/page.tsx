
import Link from "next/link";

export default async function Home() {
  console.log('fetch')
	// We could use the Storyblok sdk here, but we are leveraging on Nextjs fetch api
	//Since we prefetched the routes above, and our arguments are the same here, we will be statically rendering these pages
	const data = await fetch(`https://api.storyblok.com/v2/cdn/stories?content_type=blog&version=${process.env.NODE_ENV === "development" ? "draft" : "published"}&token=${process.env.STORYBLOCK_PREVIEW_ACCESS_TOKEN}`)
	const response = await data.json();

  return <div>
    <p>List of available blogs by slug:</p>
    <ul>
    {response.stories.map((story: { slug: string }) => {
      return (
      <li key={story.slug} className="py-2"><Link href={`/${story.slug}`}>{story.slug}</Link></li>)
    })}
    </ul>
  </div>

}
