<div class="alert alert-danger">
This page is still being migrated and developed. All content remains subject to change.
</div>

<html>
  <div class="container p-0">
    <div class="calendar">
      <div class="row pt-3 pb-3" *ngFor="let currentDate of calendar.dates">
        <div class="col-md-2">
          <h2>{{ currentDate.date.format('ddd MMM D') }}</h2>
        </div>
        <div class="col-md-10">
          <ng-container *ngIf="currentDate.lecture">
            <h2>{{ currentDate.lecture.name }}</h2>
            <ng-container *ngIf="currentDate.lecture.readingsStandard">
              <!--
                - Standard Reading Format
                -->
              <p>Read the framing paper:</p>
              <ul>
                <li>
                  <p>
                    <app-reading [reading]="currentDate.lecture.readingsStandard.framing"></app-reading>
                  </p>
                </li>                  
              </ul>              
              <p>Select one additional reading:</p>
              <ul>
                <li *ngFor="let currentReading of currentDate.lecture.readingsStandard.additional">
                  <p>
                    <app-reading [reading]="currentReading"></app-reading>
                  </p>
                </li>
              </ul>
              <h3>Standard Reading Format</h3>
              <p>Post a reading report in the appropriate thread(s), by 11:59pm the night before class:</p>
              <app-generated-link linkHREF="{{ calendar.linkCanvasDiscussion }}">
                <p>
                  {{ calendar.linkCanvasDiscussion }}
                <p>
              </app-generated-link>
            </ng-container>
            <ng-container *ngIf="currentDate.lecture.contentNonstandard">
              <app-content contentName="{{ currentDate.lecture.contentNonstandard }}" [context]="currentDate"></app-content>
            </ng-container>
            <ng-container *ngIf="currentDate.lecture.additionalResources">
              <h3>Additional Optional Resources</h3>
              <ul>
                <li *ngFor="let currentReading of currentDate.lecture.additionalResources">
                  <p>
                    <app-reading [reading]="currentReading"></app-reading>
                  </p>
                </li>
              </ul>
            </ng-container>
          </ng-container>
        </div>
      </div>
    </div>
  </div>
</html>

