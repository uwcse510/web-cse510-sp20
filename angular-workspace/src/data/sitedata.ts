import {calendar as CalendarData, Reading} from './calendardata';

class SiteData {
  calendar = CalendarData;

  linkDiscussion = 'https://canvas.uw.edu/courses/1371984/discussion_topics';

  linkVisionsOrganization = 'https://docs.google.com/document/d/1-QzEOq3zPusRUW6S31_QAeSpGD8rt13UUYJrVwDKY4Q/edit?usp=sharing';
  linkSubmitVisions = null;

  linkProjectProposalIdeas = null;
  linkProjectProposalSamples = null; // https://canvas.uw.edu/courses/1249568/files/folder/project_samples
  linkProjectProposalEarlyFeedback = null; // https://calendar.google.com/calendar/selfsched?sstoken=UUhkV1oxenFvQmdqfGRlZmF1bHR8NTczYzFkZjQ3OTFiMmNiZTcwZmY4NzZmY2Q3OGNlYzg

  linkStatisticsLab = null;
  linkSubmitStatisticsLab = null;

  linkSubmitProjectProposal = null;
  linkSubmitProjectMilestone1 = null;
  linkSubmitProjectMilestone2 = null;
  linkSubmitProjectReport = null;

  linkSubmitExam = null;

  readingWobbrockPaperWriting: Reading = {
    authorText: 'Jacob O. Wobbrock',
    title: 'Catchy Titles are Good: But Avoid Being Cute',
    publicationText: '2015',
    link: 'http://faculty.washington.edu/wobbrock/pubs/Wobbrock-2015.pdf'
  };
}

export const site = new SiteData();
