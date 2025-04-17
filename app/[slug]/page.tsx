//import { draftMode } from "next/headers";
import RichText from "@/components/RichText";

//statically generate routes at build time instead of on-demand at request time
//Content is memoized - any fetch requests with the same arguments will not be made again
export const generateStaticParams = async () => {
	//await our response from the api endpoint
	const data = await fetch(`https://api.storyblok.com/v2/cdn/stories?content_type=blog&version=${process.env.DRAFT_MODE === "true" ? "draft" : "published"}&token=${process.env.STORYBLOCK_PREVIEW_ACCESS_TOKEN}`)
	//await the response body to be parsed as Json
	const response = await data.json();
	return response.stories.map((story: { slug: string }) => ({
		slug: story.slug,
	}));
};
const fetchPage = async (slug: string) => {
	//If we wanted to enable draft mode based on Nextjs draftMode cookie, we could set that here!
	//const { isEnabled } = await draftMode();
	//we would then need to handle turning preview mode on and off - we would do that by adding a preview route handler in the api folder
	// We could use the Storyblok sdk here, but we are leveraging on Nextjs fetch api
	//Since we prefetched the routes above, and our arguments are the same here, we will be statically rendering these pages
	const data = await fetch(`https://api.storyblok.com/v2/cdn/stories/${slug}?version=${process.env.DRAFT_MODE === "true" ? "draft" : "published"}&token=${process.env.STORYBLOCK_PREVIEW_ACCESS_TOKEN}`)
	const response = await data.json();
	return response.story;
};

const Page = async (props: {
	params: Promise<{ slug: string }>
  }) => {
	const { params } = props;
	const { slug } = await params;
	const story = await fetchPage(slug);
	const storyContent = story?.content;
	return (
		<section>
		<h1 className="pb-4">{storyContent?.title}</h1>
		<RichText {...storyContent?.body}/>
	</section>
	)
};

export default Page;
