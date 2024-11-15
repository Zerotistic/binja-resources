# binja-resources

Attempt at listing all the best resources related to Binary Ninja

## Contributing Resources

To add a new resource to the Binary Ninja Resource Library, follow these steps:

1. Fork this repository
2. Edit `data.js`
3. Add your resource using the following format:

```javascript
{
    title: "Your Resource Title",
    url: "https://link-to-your-resource",
    description: "A brief, clear description of your resource (one sentence recommended)",
    category: "category",
    tags: ["tag1", "tag2", "tag3"]
}
```

### Required Fields

- **title**: The name of your resource
- **url**: Direct link to the resource
- **description**: Brief description explaining what the resource is about
- **category**: One of the following:
  - `tools` - Tools and utilities
  - `tutorials` - Guides and tutorials
  - `Research` - Research papers and findings
  - `Case Study` - Real-world examples and case studies
  - `videos` - Video content
- **tags**: Array of relevant tags (see existing resources for commonly used tags)

### Example Submission

```javascript
{
    title: "Binary Ninja API Tutorial",
    url: "https://example.com/binja-tutorial",
    description: "Step-by-step guide for using Binary Ninja's Python API for automated analysis",
    category: "tutorials",
    tags: ["api", "automation", "python"]
}
```

4. Create a pull request with your addition

Please ensure your resource is:
- Relevant to Binary Ninja
- High quality and accessible
- Not a duplicate of an existing resource
- Has a working URL
- Uses appropriate tags for discoverability
