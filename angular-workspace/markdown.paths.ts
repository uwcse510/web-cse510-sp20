class MarkdownRenderingPair {
  constructor(
    public pathMarkdown: string, // Path to the Markdown file
    public nameDestinationTemplate: string // Name of the destination template
  ) {
  }
}

class MarkdownRenderingData {
  constructor(
    public pathPrefixTemplate: string, // Prefix for the template and the rendered template
    public markdownRenderingPairs: MarkdownRenderingPair[] // Markdown files to be rendered into the template
  ) {
  }
}

export const RENDERING_DATA: MarkdownRenderingData[] = [
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
    'src/app/calendar/calendar.component',
    [
      new MarkdownRenderingPair(
        'src/app/calendar/calendar.component.content.md',
        'content'
      )
    ]
  ),
  new MarkdownRenderingData(
    'src/app/content/content.component',
    [
      // Content for assignments
      new MarkdownRenderingPair(
        'src/content/assignments.md',
        'assignments'
      ),
      new MarkdownRenderingPair(
        'src/content/exam.md',
        'exam'
      ),
      new MarkdownRenderingPair(
        'src/content/project.md',
        'project'
      ),
      new MarkdownRenderingPair(
        'src/content/readings.md',
        'readings'
      ),
      new MarkdownRenderingPair(
        'src/content/statisticslab.md',
        'statisticslab'
      ),
      // Content for readings
      new MarkdownRenderingPair(
        'src/content/contributions_in_hci.md',
        'contributions_in_hci'
      ),
      new MarkdownRenderingPair(
        'src/content/no_reading.md',
        'no_reading'
      ),
      new MarkdownRenderingPair(
        'src/content/visions_of_hci.md',
        'visions_of_hci'
      ),
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
