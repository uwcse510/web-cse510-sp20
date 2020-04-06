<html>
  <div class="row">
    <div class="col-md-9">
      <ng-container *ngIf="assignment==''">
        <h2>Overview</h2>
        <app-content contentName="assignments"></app-content>
      </ng-container>
      <ng-container *ngIf="assignment=='exam'">
        <app-content contentName="exam"></app-content>
      </ng-container>
      <ng-container *ngIf="assignment=='project'">
        <app-content contentName="project"></app-content>
      </ng-container>
      <ng-container *ngIf="assignment=='readings'">
        <app-content contentName="readings"></app-content>
      </ng-container>
      <ng-container *ngIf="assignment=='statisticslab'">
        <app-content contentName="statisticslab"></app-content>
      </ng-container>
    </div>
    <div class="col-md-3 d-none d-md-block">        
      <p>[Overview](/assignments/)</p>
      <p class="d-xl-none">[Readings and<br>Reading Reports](/assignments/readings)</p>
      <p class="d-none d-xl-block">[Readings and Reading Reports](/assignments/readings)</p>
      <p>[Project](/assignments/project)</p>
      <p>[Statistics Lab](/assignments/statisticslab)</p>
      <p>[Exam](/assignments/exam)</p>
    </div>
  </div>
</html>  
