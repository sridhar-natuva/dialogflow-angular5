import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DataService {
    private subject = new Subject<any>();
    emitter(message: string) {
        this.subject.next({ message });
    }
    receiver(): Observable<any> {
        return this.subject.asObservable();
    }
}