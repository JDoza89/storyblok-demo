import { richTextResolver } from "@storyblok/richtext";

const RichText = (doc: any) => {
    console.log(doc)
    const html = richTextResolver().render(doc);
    if(!html){return null};
    return <div className="py-4" dangerouslySetInnerHTML={ {__html: html}}/>
    }
export default RichText;