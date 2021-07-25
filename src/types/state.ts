import {FipsCode} from '../types';
import {Level, Metrics, RiskLevels, Actuals, Annotations, MetricsTimeseries, ActualsTimeseries, RiskLevelTimeseries} from './shared';

export interface State {
  fips: FipsCode;
  country: string;
  state: string | null;
  county: FipsCode | null;
  level: Level;
  lat: number | null;
  locationId: string;
  long: number | null;
  population: number;
  metrics: Metrics;
  riskLevels: RiskLevels;
  actuals: Actuals;
  annotations: Annotations;
  lastUpdatedDate: string;
  url: string | null;
}

export interface StateTimeseries extends State {
  metricsTimeseries: MetricsTimeseries[];
  actualsTimeseries: ActualsTimeseries[];
  riskLevelTimeseries: RiskLevelTimeseries[];
}
