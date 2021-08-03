import {FipsCode} from '../types';

interface ICUDetails {
  currentIcuCovid: number;
  currentIcuCovidMethod: 'actual' | 'estimated';
  currentIcuNonCovid: number;
  currentIcuNonCovidMethod: 'actual' | 'estimated_from_typical_utilization' | 'estimated_from_total_icu_actual';
}

export interface Metrics {
  testPositivityRatio: number | null;
  testPositivityRatioDetails?: {
    source: 'CMSTesting' | 'CDCTesting' | 'HHSTesting' | 'Valorum' | 'covid_tracking' | 'other';
  };
  caseDensity: number | null;
  contractTracerCapacityRatio: number | null;
  infectionRate: number | null;
  infectionRateCI90: number | null;
  icuHeadroomRatio: number;
  icuHeadroomDetails?: ICUDetails;
  icuCapacityRatio: number | null;
  vaccinationsInitiatedRatio?: number;
  vaccinationsCompletedRatio?: number;
}

export type Level = 'country' | 'state' | 'county' | 'cbsa' | 'place';

type ZeroToFive = 0 | 1 | 2 | 3 | 4 | 5;
export interface RiskLevels {
  overall: ZeroToFive;
  testPositivityRatio: ZeroToFive;
  caseDensity: ZeroToFive;
  contractTracerCapacityRatio: ZeroToFive;
  infectionRate: ZeroToFive;
  icuHeadroomRatio: ZeroToFive;
  icuCapacityRatio: ZeroToFive;
}

interface Beds {
  capacity: number | null;
  currentUsageTotal: number | null;
  currentUsageCovid: number | null;
  typicalUsageRate: number | null;
}

type AnyObject = Record<string, unknown>;
// (kolyaventuri): More specific schema does not officially exist
interface VaccineDemographics {
  age?: AnyObject | null;
  race?: AnyObject | null;
  ethnicity?: AnyObject | null;
  sex?: AnyObject | null;
}

export interface Actuals {
  cases: number | null;
  deaths: number | null;
  positiveTests: number | null;
  negativeTests: number | null;
  contractTracers: number | null;
  hospitalBeds: Beds;
  icuBeds: Beds;
  newCases: number | null;
  newDeaths: number | null;
  vaccinesDistributed?: number;
  vaccinationsInitiated?: number;
  vaccinationsCompleted?: number;
  vaccinesAdministered?: number;
  vaccinesAdministeredDemographics?: VaccineDemographics;
  vaccinationsInitiatedDemographics?: VaccineDemographics;
}

interface Source {
  type?: 'NYTimes' | 'CMSTesting' | 'CDCTesting' | 'HHSTesting' | 'HHSHospital' | 'Valorum' | 'covid_tracking' | 'USAFacts' | 'TestAndTrace' | 'CANScrapersStateProviders' | 'other';
  url?: string | null;
  name?: string | null;
}

interface Anomaly {
  date: string;
  type: 'cumulative_tail_truncated' | 'cumulative_long_tail_truncated' | 'zscore_outlier' | 'known_issue' | 'known_issue_no_date' | 'derived' | 'drop_future_observation' | 'provenance' | 'source_url' | 'source';
  original_observation: number;
}

interface AnnotationValue {
  sources: Source[];
  anomalies: Anomaly[];
}
export interface Annotations {
  cases?: AnnotationValue;
  deaths?: AnnotationValue;
  positiveTests?: AnnotationValue;
  negativeTests?: AnnotationValue;
  contactTracers?: AnnotationValue;
  hospitalBeds?: AnnotationValue;
  icuBeds: AnnotationValue;
  newCases?: AnnotationValue;
  newDeaths?: AnnotationValue;
  vaccinesDistributed?: AnnotationValue;
  vaccinationsInitiated?: AnnotationValue;
  vaccinationsCompleted?: AnnotationValue;
  vaccinesAdministered?: AnnotationValue;
  testPositivityRate?: AnnotationValue;
  caseDensity: AnnotationValue;
  contractTracerCapacityRatio?: AnnotationValue;
  infectionRate?: AnnotationValue;
  infectionRateCI90: AnnotationValue;
  icuHeadroomRatio: AnnotationValue;
  icuCapacityRatio: AnnotationValue;
  vaccinationsInitiatedRatio?: AnnotationValue;
  vaccinationsCompletedRatio: AnnotationValue;
}

export interface MetricsTimeseries extends Metrics {
  date: string;
}

export interface ActualsTimeseries extends Actuals {
  date: string;
}

export interface RiskLevelsTimeseries {
  overall: ZeroToFive;
  date: string;
}

export interface Base {
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

export interface Timeseries {
  metricsTimeseries: MetricsTimeseries[];
  actualsTimeseries: ActualsTimeseries[];
  riskLevelsTimeseries: RiskLevelsTimeseries[];
}
