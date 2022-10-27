import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from './../environments/environment';
export interface WorkSession {
  id: number;
  startDate: Date;
  endDate: Date | null;
  duration: Date | null;
  sessionName: string | null;
}

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  private api = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getSessions(): Observable<WorkSession[]> {
    return this.http.get<WorkSession[]>(`${this.api}/workSession`);
  }

  addSessions(session: any) {
    return this.http.post<any>(`${this.api}/workSession`, session);
  }

  updateSessions(session: any, sessionId: number) {
    return this.http.put<any>(`${this.api}/workSession/${sessionId}`, session);
  }

  deleteSessions() {
    return this.http.delete<any>(`${this.api}/workSession/all`);
  }
  // addSessions(session:WorkSession):Observable<WorkSession[]>{
  //return this.http.post<any>(`${this.api}/workSession`,session);
  //}

  getStartDate(sessionId: number, session: any): any {
    return this.http.get<any>(`${this.api}/workSession/${sessionId}`, session);
  }
}
