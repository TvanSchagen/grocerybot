import { Evaluation } from './../../models/evaluation';
import { Injectable } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Metric } from 'src/app/models/metric';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {

  assessor: string;
  query: string;
  date: Date;
  evaluations: Evaluation[];
  metrics: Metric[];

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
    this.metrics = [];
    this.metrics.push(this.calcPrecisionAt(5));
    this.metrics.push(this.calcPrecisionAt(10));
    this.metrics.push(this.calcPrecisionAt(20));
    this.metrics.push(this.calcReciprocalRank());
  }

  calcPrecisionAt(rank: number): Metric {
    let relevantCount = 0;

    this.evaluations
      .filter(e => e.rank <= rank)
      .forEach(ev => {
        if (ev.relevant) {
          relevantCount ++;
        }
    });

    const p = relevantCount / rank;
    return new Metric('p@' + rank, p);
  }

  calcReciprocalRank(): Metric {
    const firstRelevant = this.evaluations.filter(ev => ev.relevant === true)[0];
    if (firstRelevant) {
      return new Metric('reciprocalRanking', 1 / firstRelevant.rank);
    } else {
      return null;
    }
  }

  finishEvaluation(): SafeUrl {
    const evalSession = {
      assessor: this.assessor,
      date: this.date,
      metrics: this.metrics,
      evaluations: this.evaluations};

      const json_data = JSON.stringify(evalSession);
      const uri = this._sanitizer.bypassSecurityTrustUrl('data:text/json;charset=UTF-8,' + encodeURIComponent(json_data));

      return uri;
  }
}
