<div class="alert alert-danger">
This page is still being migrated and developed. All content remains subject to change.
</div>

<html>
  <div class="container p-0">
    <div class="calendar">
      <div class="row pt-3 pb-3" *ngFor="let currentDate of site.calendar.dates">
        <div class="col-md-2">
          <h2 id="{{ currentDate.date.format('ddd-MMM-D').toLowerCase() }}">{{ currentDate.date.format('ddd MMM D') }}</h2>
        </div>
        <div class="col-md-10">
          <h2 id="{{ currentDate.name.split(' ').join('-').toLowerCase() }}">{{ currentDate.name }}</h2>
          <ng-container *ngIf="currentDate.guest">
            <div class="alert alert-info">
              Guest: <app-generated-link linkHREF="{{ currentDate.guest.link }}">{{ currentDate.guest.name }}</app-generated-link>
            </div>
          </ng-container>
          <ng-container *ngIf="currentDate.readingsStandard">
            <!--
              - Standard Reading Format
              -->
            <p>Read the framing paper:</p>
            <ul>
              <li>
                <p>
                  <app-reading [reading]="currentDate.readingsStandard.framing"></app-reading>
                </p>
              </li>                  
            </ul>              
            <p>Select one additional reading:</p>
            <ul>
              <li *ngFor="let currentReading of currentDate.readingsStandard.additional">
                <p>
                  <app-reading [reading]="currentReading"></app-reading>
                </p>
              </li>
            </ul>
            <h3>Standard Reading Format</h3>
            <p>Post a reading report in the appropriate thread(s), by 11:59pm the night before class:</p>
            <app-generated-link linkHREF="{{ site.Discussion }}">
              <p>
                <app-assignment-submission-link linkSubmission="{{ site.linkDiscussion }}"></app-assignment-submission-link>               
              <p>
            </app-generated-link>
          </ng-container>
          <ng-container *ngIf="currentDate.contentNonstandard">
            <app-content contentName="{{ currentDate.contentNonstandard }}" [context]="currentDate"></app-content>
          </ng-container>
          <ng-container *ngIf="currentDate.additionalResources">
            <h3>Additional Optional Resources</h3>
            <ul>
              <li *ngFor="let currentReading of currentDate.additionalResources">
                <p>
                  <app-reading [reading]="currentReading"></app-reading>
                </p>
              </li>
            </ul>
          </ng-container>
        </div>
      </div>
    </div>
  </div>
</html>

