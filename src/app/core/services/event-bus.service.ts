import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { filter, pluck } from 'rxjs/operators';

export interface MyEvent {
    type: string;
    payload: any
}

@Injectable({
    providedIn: 'root'
})
export class EventBusService {

    private subject$: Subject<MyEvent> = new Subject();

    emit(event: MyEvent): void {
        this.subject$.next(event);
    }

    on(eventType: string, action): Subscription {
        return this.subject$.pipe(
            filter((evt: MyEvent) => evt.type === eventType),
            pluck('payload')
        ).subscribe(action)
    } 
}