import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html'



const aboutDir = path.join(process.cwd(), 'src/components/AboutBlurb/about.md')

export async function getAboutData() {
    const aboutContents = fs.readFileSync(aboutDir, 'utf8');
    const matterResult = matter(aboutContents);
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();
    // TODO:
    //   here I could write a simple regex, that inserts the target every time I see an <a> tag?
    return (
        {
            contentHtml,
            ...matterResult.data
        }
    )
}