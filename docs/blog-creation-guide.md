# Blog Creation Guide

This guide explains how to create and manage blog posts in our Next.js application using MDX.

## File Structure

Blog posts are stored in the `content/blog` directory as MDX files. Each blog post should be a separate `.mdx` file.

```
content/
└── blog/
    ├── welcome-to-our-store.mdx
    └── your-new-post.mdx
```

## Creating a New Blog Post

### 1. Create a New MDX File

Create a new `.mdx` file in the `content/blog` directory. The filename will become the URL slug for your blog post.

Example: `content/blog/my-new-post.mdx` will be accessible at `/blog/my-new-post`

### 2. Add Frontmatter

Every blog post must start with frontmatter metadata at the top of the file. Use the following template:

```yaml
---
title: 'Your Blog Post Title'
date: 'YYYY-MM-DD'
description: 'A brief description of your blog post'
image: '/blog/your-image.jpg'
author: 'Your Name'
---
```

### 3. Write Content

Below the frontmatter, write your blog post content using Markdown syntax. You can use:

- # H1 for main titles
- ## H2 for sections
- ### H3 for subsections
- Regular paragraphs
- Lists (bulleted or numbered)
- Code blocks
- Images
- Links

Example:

```markdown
# Main Title

## Introduction

Your introduction text here...

## Key Points

- Point 1
- Point 2
- Point 3

## Code Examples

```js
const example = "This is a code block";
```

## Images

![Alt text](/path/to/image.jpg)
```

### 4. Adding Images

1. Place blog post images in the `public/blog` directory
2. Reference them in your MDX file using the path: `/blog/image-name.jpg`

## Best Practices

1. **File Names**
   - Use lowercase letters
   - Replace spaces with hyphens
   - Keep names concise but descriptive
   - Example: `getting-started-with-skulls.mdx`

2. **Images**
   - Optimize images before uploading
   - Use descriptive file names
   - Include alt text for accessibility
   - Recommended dimensions: 800x400 pixels for featured images

3. **Content Structure**
   - Start with an engaging introduction
   - Use clear headings and subheadings
   - Keep paragraphs concise
   - Include relevant images to break up text
   - End with a conclusion or call to action

## Technical Details

The blog system uses:
- `@next/mdx` for MDX processing
- `gray-matter` for frontmatter parsing
- `date-fns` for date formatting

Blog posts are automatically:
- Listed on the main blog page
- Given individual pages at `/blog/[slug]`
- Sorted by date (newest first)
