import {calendar as CalendarData, Reading} from './calendardata';

class SiteData {
  calendar = CalendarData;

  linkDiscussion = 'https://canvas.uw.edu/courses/1371984/discussion_topics';

  linkVisionsOrganization = 'https://docs.google.com/document/d/1-QzEOq3zPusRUW6S31_QAeSpGD8rt13UUYJrVwDKY4Q/edit?usp=sharing';
  linkSubmitVisions = 'https://canvas.uw.edu/courses/1371984/assignments/5389367';

  linkProjectProposalIdeas = 'https://canvas.uw.edu/courses/1371984/discussion_topics/5340935';
  linkProjectProposalSamples = 'https://canvas.uw.edu/courses/1371984/files/folder/project%20samples';
  linkProjectProposalEarlyFeedback = 'https://calendar.google.com/calendar/selfsched?sstoken=UUw1Q2o3dVVUcXUyfGRlZmF1bHR8NWNhYzYxNjgxNDdhMGNhYWMzMGE4OTYyOWNhOWIyZDU';

  linkStatisticsLab = 'https://canvas.uw.edu/files/65010646/download?download_frd=1';
  linkSubmitStatisticsLab = 'https://canvas.uw.edu/courses/1371984/assignments/5390983';

  linkSubmitProjectProposal = 'https://canvas.uw.edu/courses/1371984/assignments/5390906';
  linkSubmitProjectRelatedResearch = 'https://canvas.uw.edu/courses/1371984/assignments/5464345';
  linkSubmitProjectMilestone1 = 'https://canvas.uw.edu/courses/1371984/assignments/5390939';
  linkSubmitProjectMilestone2 = 'https://canvas.uw.edu/courses/1371984/assignments/5390992';
  linkSubmitProjectReport = 'https://canvas.uw.edu/courses/1371984/assignments/5391093';

  linkSubmitExam = 'https://canvas.uw.edu/courses/1371984/assignments/5391063';

  readingWobbrockPaperWriting: Reading = {
    authorText: 'Jacob O. Wobbrock',
    title: 'Catchy Titles are Good: But Avoid Being Cute',
    publicationText: '2015',
    link: 'http://faculty.washington.edu/wobbrock/pubs/Wobbrock-2015.pdf'
  };
}

export const site = new SiteData();
