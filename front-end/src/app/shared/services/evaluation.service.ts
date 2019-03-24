import { Evaluation } from './../../models/evaluation';
import { Injectable } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  assessor: string;
  query: string;
  date: Date;
  evaluations: Evaluation[];
  metrics: [];

  constructor(private _sanitizer: DomSanitizer) {}

  initialize(assessor: string, query: string) {
    this.assessor = assessor;
    this.date = new Date();
    this.evaluations = [];
    this.metrics = [];
    this.query = query;
  }

  addEvaluation(evaluation: Evaluation) {
    this.evaluations.push(evaluation);

    this.calculateMetrics();
  }

  calculateMetrics() {
    this.calcPrecisionAt(5);
  }

  calcPrecisionAt(rank: number) {
    let relevantCount = 0;

    this.evaluations
      .filter(e => e.rank <= rank)
      .forEach(ev => {
        if (ev.relevant) {
          relevantCount ++;
        }
    });
  }

  finishEvaluation(): SafeUrl {
    const evalSession = {
      assessor: this.assessor,
      date: this.date,
      evaluations: this.evaluations};

      const json_data = JSON.stringify(evalSession);
      const uri = this._sanitizer.bypassSecurityTrustUrl('data:text/json;charset=UTF-8,' + encodeURIComponent(json_data));

      return uri;
  }
}
