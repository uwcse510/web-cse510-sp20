<html>
  <!-- List used across both formats -->
  <ng-template #listTemplate>
    <ul>
      <ng-container *ngFor="let offeringCurrent of site.projectSamples.offerings">
        <li *ngFor="let projectCurrent of site.projectSamples.projects[offeringCurrent.key]">
          {{ offeringCurrent.name }} -
<!-- spacing -->
          <ng-container *ngIf="sampleToLink==='website'">
            <app-generated-link linkHREF="{{ projectCurrent.link }}">{{ projectCurrent.name }}</app-generated-link>
          </ng-container>
<!-- spacing -->
          <ng-container *ngIf="sampleToLink==='1b'">
            Proposal that ultimately became
          </ng-container>
<!-- spacing -->
          <ng-container *ngIf="['1b', '2b', '2c', '2d', '2e', '2f', '2g', '2h', '2p', '3a', '3c', '3d', '3e', '3p', '4a'].includes(sampleToLink)">
            <app-generated-link linkHREF="{{ projectCurrent.link }}">{{ projectCurrent.name }}</app-generated-link>:
            <app-generated-link linkHREF="/assets/samples/{{ sampleToLink }}/{{ sampleToLink }}_{{ projectCurrent.suffix }}.pdf">
              {{ sampleToLink }}_{{ projectCurrent.suffix }}.pdf
            </app-generated-link>
          </ng-container>
<!-- spacing -->
          <ng-container *ngIf="sampleToLink==='4b'">
            <app-generated-link linkHREF="{{ projectCurrent.link }}">{{ projectCurrent.name }}</app-generated-link>:
            <app-generated-link linkHREF="/assets/samples/{{ sampleToLink }}/{{ sampleToLink }}_{{ projectCurrent.suffix }}.mp4">
              {{ sampleToLink }}_{{ projectCurrent.suffix }}.mp4
            </app-generated-link>
          </ng-container>
        </li>
      </ng-container>
    </ul>
  </ng-template>
<!-- spacing -->
  <!-- Abbreviated format containing only the list of samples -->
  <ng-container *ngIf="['list-only'].includes(format)">
    <ng-container *ngTemplateOutlet="listTemplate">
    </ng-container>
  </ng-container>
<!-- spacing -->
  <!-- Default format containing heading, collapsible list of samples, and explanatory text -->
  <ng-container *ngIf="['default'].includes(format)">
    <h2 *ngIf="headingLevel=='h2'">Samples from Prior Offerings</h2>
    <h3 *ngIf="headingLevel=='h3'">Samples from Prior Offerings</h3>
    <h4 *ngIf="headingLevel=='h4'">Samples from Prior Offerings</h4>
<!-- spacing -->
    <div>
      <div class="card">
        <a class="card-header" href="javascript:;" (click)="isListCollapsed = !isListCollapsed" [attr.aria-expanded]="!isListCollapsed" aria-controls="listCollapse">
          <ng-container *ngIf="isListCollapsed">
            <i class="fa fa-chevron-left pull-right"></i>
            Expand Samples
          </ng-container>
          <ng-container *ngIf="!isListCollapsed">
            <i class="fa fa-chevron-down pull-right"></i>
            Collapse Samples
          </ng-container>
        </a>
        <div class="card-body" id="listCollapse" [ngbCollapse]="isListCollapsed">
          <p>
            Note these samples are intended to illustrate a variety of approaches, none of which is intended to be ideal or exemplary.
            Also note that details of assignments may have changed since prior offerings, so these samples may not completely correspond to the current project.
            Be sure to understand and carefully consider project requirements and feedback from the course staff in the context of your own work.
          </p>
          <ng-container *ngIf="sampleToLink==='2b'">
            <div class="alert alert-warning" markdown="1">
              <p>The Autumn 2017 offering added detail regarding the primary proposed method.</p>
<!-- spacing -->
              <p>Prior samples do not include that information.</p>
            </div>
          </ng-container>
          <ng-container *ngIf="sampleToLink==='2p'">
            <div class="alert alert-warning" markdown="1">
              <p>The Winter 2020 offering added detail to clarify information expected in presentations.</p>
<!-- spacing -->
              <p>Prior samples are more likely to be missing information that is expected in presentations.</p>
            </div>
          </ng-container>
          <ng-container *ngIf="sampleToLink==='2web'">
            <div class="alert alert-warning" markdown="1">
              <p>The Winter 2020 introduced the use of a post appropriate for a web portfolio.</p>
<!-- spacing -->
              <p>Prior samples instead required a summary report:</p>
<!-- spacing -->
              <app-assignment-samples sampleToLink="2h" format="list-only"></app-assignment-samples>
<!-- spacing -->
              <p>Prior samples of project thumbnails can be found on Project pages of prior course offerings:</p>
              <ul>
                <li>
                  <app-generated-link linkHREF="https://courses.cs.washington.edu/courses/cse440/19wi/projects">https://courses.cs.washington.edu/courses/cse440/19wi/projects</app-generated-link>
                </li>
                <li>
                  <app-generated-link linkHREF="https://courses.cs.washington.edu/courses/cse440/17au/projects.html">https://courses.cs.washington.edu/courses/cse440/17au/projects.html</app-generated-link>
                </li>
                <li>
                  <app-generated-link linkHREF="https://courses.cs.washington.edu/courses/cse440/17wi/projects.html">https://courses.cs.washington.edu/courses/cse440/17wi/projects.html</app-generated-link>
                </li>
              </ul>
<!-- spacing -->
              <p>Prior offerings with different instructors have used Medium posts, but these lacked the structure of your required post and are therefore not good models of your post:</p>
              <ul>
                <li>
                  <app-generated-link linkHREF="https://medium.com/@cse440">https://medium.com/@cse440</app-generated-link>
                </li>
              </ul>
            </div>
          </ng-container>
<!-- spacing -->
          <ng-container *ngIf="['1b', '2b', '2c', '2d', '2e', '2f', '2g', '2h', '2p', '3a', '3c', '3d', '3e', '3p', '4a', '4b'].includes(sampleToLink)">
            <p>Samples from prior offerings include:</p>
            <ng-container *ngTemplateOutlet="listTemplate">
            </ng-container>
          </ng-container>
        </div>
      </div>
    </div>    
  </ng-container>
</html>
