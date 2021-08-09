declare type FipsCode = `${number}${number}${number}${number}${number}`;

interface InterfaceMethod<T, P> {
    (input?: string): Promise<T>;
    timeseries(input?: string): Promise<P>;
}

declare const STATES: readonly ["ak", "al", "ar", "az", "ca", "co", "ct", "dc", "de", "fl", "ga", "hi", "ia", "id", "il", "in", "ks", "ky", "la", "ma", "md", "me", "mi", "mn", "mo", "mp", "ms", "mt", "nc", "nd", "ne", "nh", "nj", "nm", "nv", "ny", "oh", "ok", "or", "pa", "pr", "ri", "sc", "sd", "tn", "tx", "ut", "va", "vt", "wa", "wi", "wv", "wy"];

interface ICUDetails {
    currentIcuCovid: number;
    currentIcuCovidMethod: 'actual' | 'estimated';
    currentIcuNonCovid: number;
    currentIcuNonCovidMethod: 'actual' | 'estimated_from_typical_utilization' | 'estimated_from_total_icu_actual';
}
interface Metrics {
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
declare type Level = 'country' | 'state' | 'county' | 'cbsa' | 'place';
declare type ZeroToFive = 0 | 1 | 2 | 3 | 4 | 5;
interface RiskLevels {
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
declare type AnyObject = Record<string, unknown>;
interface VaccineDemographics {
    age?: AnyObject | null;
    race?: AnyObject | null;
    ethnicity?: AnyObject | null;
    sex?: AnyObject | null;
}
interface Actuals {
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
interface Annotations {
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
interface MetricsTimeseries extends Metrics {
    date: string;
}
interface ActualsTimeseries extends Actuals {
    date: string;
}
interface RiskLevelsTimeseries {
    overall: ZeroToFive;
    date: string;
}
interface Base {
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
interface Timeseries {
    metricsTimeseries: MetricsTimeseries[];
    actualsTimeseries: ActualsTimeseries[];
    riskLevelsTimeseries: RiskLevelsTimeseries[];
}

interface State extends Base {
}
interface StateTimeseries extends Base, Timeseries {
}

interface County extends Base {
}
interface CountyTimeseries extends Base, Timeseries {
}

declare type StateKey = typeof STATES[number];
declare type CountiesInterface = InterfaceMethod<County[], CountyTimeseries[]>;
interface StateInterface extends InterfaceMethod<State[], StateTimeseries> {
    counties: CountiesInterface;
}
declare const stateMap: {
    [key in StateKey]?: StateInterface;
};
declare type StateInterfaces = Required<typeof stateMap>;

declare type CountyInterface = (fips: FipsCode) => InterfaceMethod<County, CountyTimeseries>;

interface Metro extends Base {
}
interface MetroTimeseries extends Base, Timeseries {
}

declare type MetroInterface = (fips: FipsCode) => InterfaceMethod<Metro, MetroTimeseries>;

interface Country extends Base {
}
interface CountryTimeseries extends Base, Timeseries {
}

interface CountryInterface extends InterfaceMethod<Country, CountryTimeseries> {
    (): Promise<Country>;
    timeseries(): Promise<CountryTimeseries>;
}

declare class CovidActNow {
    readonly states: InterfaceMethod<State[], StateTimeseries[]>;
    readonly counties: InterfaceMethod<County[], CountyTimeseries[]>;
    readonly metros: InterfaceMethod<Metro[], MetroTimeseries[]>;
    readonly state: StateInterfaces;
    readonly county: CountyInterface;
    readonly metro: MetroInterface;
    readonly country: CountryInterface;
    constructor(apiKey: string);
}

export default CovidActNow;
