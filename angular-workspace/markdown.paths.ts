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
  new MarkdownRenderingData(
    'src/app/projects/projects.component',
    [
      new MarkdownRenderingPair(
        'src/app/projects/projects.component.content.md',
        'content'
      ),

      new MarkdownRenderingPair(
        'src/assets/projects/chaser/designresearch.md',
        'designresearch_chaser'
      ),
      new MarkdownRenderingPair(
        'src/assets/projects/doze/designresearch.md',
        'designresearch_doze'
      ),
      new MarkdownRenderingPair(
        'src/assets/projects/feedo/designresearch.md',
        'designresearch_feedo'
      ),
      new MarkdownRenderingPair(
        'src/assets/projects/fridgigotchi/designresearch.md',
        'designresearch_fridgigotchi'
      ),
      new MarkdownRenderingPair(
        'src/assets/projects/guardia/designresearch.md',
        'designresearch_guardia'
      ),
      new MarkdownRenderingPair(
        'src/assets/projects/mode/designresearch.md',
        'designresearch_mode'
      ),
      new MarkdownRenderingPair(
        'src/assets/projects/pinpoint/designresearch.md',
        'designresearch_pinpoint'
      ),
      new MarkdownRenderingPair(
        'src/assets/projects/pocketgrocer/designresearch.md',
        'designresearch_pocketgrocer'
      ),
      new MarkdownRenderingPair(
        'src/assets/projects/pocketplanner/designresearch.md',
        'designresearch_pocketplanner'
      ),
      new MarkdownRenderingPair(
        'src/assets/projects/poolbuddy/designresearch.md',
        'designresearch_poolbuddy'
      ),
      new MarkdownRenderingPair(
        'src/assets/projects/procabulary/designresearch.md',
        'designresearch_procabulary'
      ),
      new MarkdownRenderingPair(
        'src/assets/projects/reminice/designresearch.md',
        'designresearch_reminice'
      ),
      new MarkdownRenderingPair(
        'src/assets/projects/stude/designresearch.md',
        'designresearch_stude'
      ),
      new MarkdownRenderingPair(
        'src/assets/projects/tidy/designresearch.md',
        'designresearch_tidy'
      ),
      new MarkdownRenderingPair(
        'src/assets/projects/vapeweight/designresearch.md',
        'designresearch_vapeweight'
      ),

      new MarkdownRenderingPair(
        'src/assets/projects/chaser/designprototyping.md',
        'designprototyping_chaser'
      ),
      new MarkdownRenderingPair(
        'src/assets/projects/doze/designprototyping.md',
        'designprototyping_doze'
      ),
      new MarkdownRenderingPair(
        'src/assets/projects/feedo/designprototyping.md',
        'designprototyping_feedo'
      ),
      new MarkdownRenderingPair(
        'src/assets/projects/fridgigotchi/designprototyping.md',
        'designprototyping_fridgigotchi'
      ),
      new MarkdownRenderingPair(
        'src/assets/projects/guardia/designprototyping.md',
        'designprototyping_guardia'
      ),
      new MarkdownRenderingPair(
        'src/assets/projects/mode/designprototyping.md',
        'designprototyping_mode'
      ),
      new MarkdownRenderingPair(
        'src/assets/projects/pinpoint/designprototyping.md',
        'designprototyping_pinpoint'
      ),
      new MarkdownRenderingPair(
        'src/assets/projects/pocketgrocer/designprototyping.md',
        'designprototyping_pocketgrocer'
      ),
      new MarkdownRenderingPair(
        'src/assets/projects/pocketplanner/designprototyping.md',
        'designprototyping_pocketplanner'
      ),
      new MarkdownRenderingPair(
        'src/assets/projects/poolbuddy/designprototyping.md',
        'designprototyping_poolbuddy'
      ),
      new MarkdownRenderingPair(
        'src/assets/projects/procabulary/designprototyping.md',
        'designprototyping_procabulary'
      ),
      new MarkdownRenderingPair(
        'src/assets/projects/reminice/designprototyping.md',
        'designprototyping_reminice'
      ),
      new MarkdownRenderingPair(
        'src/assets/projects/stude/designprototyping.md',
        'designprototyping_stude'
      ),
      new MarkdownRenderingPair(
        'src/assets/projects/tidy/designprototyping.md',
        'designprototyping_tidy'
      ),
      new MarkdownRenderingPair(
        'src/assets/projects/vapeweight/designprototyping.md',
        'designprototyping_vapeweight'
      )
    ]
  ),
];
