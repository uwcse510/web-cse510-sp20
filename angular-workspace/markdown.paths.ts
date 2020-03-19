class MarkdownRenderingPair {
  constructor(
    public pathMarkdown:string, // Path to the Markdown file
    public nameDestinationTemplate:string // Name of the destination template
  ) {
  }
}

class MarkdownRenderingData {
  constructor(
    public pathPrefixTemplate:string, // Prefix for the template and the rendered template
    public markdownRenderingPairs:MarkdownRenderingPair[] // Markdown files to be rendered into the template
  ) {
  }
}

export const RENDERING_DATA:MarkdownRenderingData[] = [
  new MarkdownRenderingData(
    'src/app/assignment-contribution-statement/assignment-contribution-statement.component',
    [
      new MarkdownRenderingPair(
        'src/app/assignment-contribution-statement/assignment-contribution-statement.component.content.md',
        'content'
      )
    ]
  ),
  new MarkdownRenderingData(
    'src/app/assignment-samples/assignment-samples.component',
    [
      new MarkdownRenderingPair(
        'src/app/assignment-samples/assignment-samples.component.content.md',
        'content'
      )
    ]
  ),
  new MarkdownRenderingData(
    'src/app/assignments/assignments.component',
    [
      new MarkdownRenderingPair(
        'src/app/assignments/assignments.component.content.md',
        'content'
      )
    ]
  ),
  new MarkdownRenderingData(
    'src/app/assignments/assignment0/assignment0.component',
    [
      new MarkdownRenderingPair(
        'src/app/assignments/assignment0/assignment0.component.content.md',
        'content'
      )
    ]
  ),
  new MarkdownRenderingData(
    'src/app/assignments/assignment1/assignment1.component',
    [
      new MarkdownRenderingPair(
        'src/app/assignments/assignment1/assignment1.component.content.md',
        'content'
      )
    ]
  ),
  new MarkdownRenderingData(
    'src/app/assignments/assignment2/assignment2.component',
    [
      new MarkdownRenderingPair(
        'src/app/assignments/assignment2/assignment2.component.content.md',
        'content'
      )
    ]
  ),
  new MarkdownRenderingData(
    'src/app/assignments/assignment3/assignment3.component',
    [
      new MarkdownRenderingPair(
        'src/app/assignments/assignment3/assignment3.component.content.md',
        'content'
      )
    ]
  ),
  new MarkdownRenderingData(
    'src/app/assignments/assignment4/assignment4.component',
    [
      new MarkdownRenderingPair(
        'src/app/assignments/assignment4/assignment4.component.content.md',
        'content'
      )
    ]
  ),
  new MarkdownRenderingData(
    'src/app/calendar/calendar.component',
    [
      new MarkdownRenderingPair(
        'src/app/calendar/calendar.component.content.md',
        'content'
      )
    ]
  ),
  new MarkdownRenderingData(
    'src/app/home/home.component',
    [
      new MarkdownRenderingPair(
        'src/app/home/home.component.content.md',
        'content'
      )
    ]
  ),
];
