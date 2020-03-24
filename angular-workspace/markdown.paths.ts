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
      //
      // Content for assignments
      //
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
      //
      // Content for calendar
      //
      new MarkdownRenderingPair(
        'src/content/available_exam.md',
        'available_exam'
      ),
      new MarkdownRenderingPair(
        'src/content/due_exam.md',
        'due_exam'
      ),
      new MarkdownRenderingPair(
        'src/content/due_project_final_report.md',
        'due_project_final_report'
      ),
      new MarkdownRenderingPair(
        'src/content/due_statistics_lab.md',
        'due_statisticslab'
      ),
      new MarkdownRenderingPair(
        'src/content/project_milestone.md',
        'project_milestone'
      ),
      new MarkdownRenderingPair(
        'src/content/project_proposal.md',
        'project_proposal'
      ),
      //
      // Content for readings
      //
      new MarkdownRenderingPair(
        'src/content/chi2020.md',
        'chi2020'
      ),
      new MarkdownRenderingPair(
        'src/content/contributions_in_hci.md',
        'contributions_in_hci'
      ),
      new MarkdownRenderingPair(
        'src/content/no_reading.md',
        'no_reading'
      ),
      new MarkdownRenderingPair(
        'src/content/readings_tbd.md',
        'readings_tbd'
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
