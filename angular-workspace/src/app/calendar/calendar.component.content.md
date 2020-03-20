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
          </ng-container>
        </div>
      </div>
    </div>
  </div>
</html>

