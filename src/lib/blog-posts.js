import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

import { remark } from 'remark'
import html from 'remark-html'


const blogPostsDir = path.join(process.cwd(), 'src/blog-posts')

/**
 * A method to check all the posts in the directory, and
 *   return the a sorted list of them all by date, with id.
 * 
 * @returns the sorted list of blog posts, with id and contents
 */
export const getSortedPostsData = () => {

    const fileNames = fs.readdirSync(blogPostsDir);
    const allPosts = fileNames.map( (fName) => {

        // use a regex to take out the .md extension
        const fId = fName.replace(/\.md$/, '')

        // read contents of markdown file
        const fullPath = path.join(blogPostsDir, fName)
        const fContents = fs.readFileSync(fullPath, 'utf8')

        // using gray matter, parse metadata
        const matterResult = matter(fContents)

        // combine, and return
        return {
            "id": fId,
            ...matterResult.data
        }

    })

    // sort and return, using comparators
    return allPosts.sort( ({ date: a }, { date: b }) => {
        if (a < b) {
            return 1
          } else if (a > b) {
            return -1
          } else {
            return 0
          }
    })
}




export const getAllPostIds = () => {
    const fileNames = fs.readdirSync(blogPostsDir)
  
    // Returns an array that looks like this:
    // [
    //   {
    //     params: {
    //       id: 'ssg-ssr'
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'pre-rendering'
    //     }
    //   }
    // ]
    return (
        fileNames.map( (fileName) => {
            return {
                params: 
                {
                    id: fileName.replace(/\.md$/, '')
                }
            }
        })
    )
}



export async function getPostData(id) {
    const fullPath = path.join(blogPostsDir, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
  
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)
    const contentHtml = processedContent.toString()
  
    // Combine the data with the id
    return (
        {
            id,
            contentHtml,
            ...matterResult.data
        }
    )
}
  
  