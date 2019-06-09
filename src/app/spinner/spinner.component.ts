import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy } from '@angular/core';
import { LoadingScreenService } from '../loading-screen.service';
import { Subscription } from "rxjs";
import { debounceTime } from "rxjs/operators";

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements AfterViewInit, OnDestroy {

  debounceTime: number = 200;
  loading: boolean = false;
  loadingSubscription: Subscription;

  constructor(private loadingScreenService: LoadingScreenService,
              private _elmRef: ElementRef,
              private _changeDetectorRef: ChangeDetectorRef) {
  }

  ngAfterViewInit(): void {
    this._elmRef.nativeElement.style.display = 'none';
    this.loadingSubscription = this.loadingScreenService.loadingStatus.pipe(debounceTime(this.debounceTime)).subscribe(
      (status: boolean) => {
        this._elmRef.nativeElement.style.display = status ? 'block' : 'none';
        this._changeDetectorRef.detectChanges();
      }
    );
  }

  ngOnDestroy() {
    this.loadingSubscription.unsubscribe();
  }

}
