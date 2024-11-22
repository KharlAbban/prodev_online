import React from 'react'
import { useRegionContext } from '../contexts/RegionProvider';
import { getRegionInsights, normalizeRegionName } from '../lib/regionInsights';
import {IoMdClose} from "react-icons/io"
import { getOvrScoreInsights } from '../lib/scoreLegend';
import {Link} from "react-router-dom"
import { HashLoader } from 'react-spinners';
import { useQuery } from '@tanstack/react-query';
import RegionalMoreAnalysis from './RegionalMoreAnalysis';

const RegionInsights = ({scoreInfo}) => {
    const {selectedRegion, setSelectedRegion} = useRegionContext();
    const {ovrScore, populationScore, jobScore, healthScore} = scoreInfo;
    const {insight, grade} = getOvrScoreInsights(ovrScore);

    const {data: regionInsights, isLoading: insightsLoading, isError: isInsightsError, error: insightsError } = useQuery({
        queryKey: ["region_insights_query", { selectedRegion }],
        queryFn: () => getRegionInsights(selectedRegion),
        enabled: !!selectedRegion
    });

    if (insightsLoading) return <div className='w-full h-full flex justify-center items-center flex-col gap-2'><HashLoader /><p className='font-semibold text-lg'>Loading data...</p></div>;

    if (isInsightsError) throw new Error(insightsError);

    const {
        population: {total, urban, land_area},
        jobs: {unemployment_rate},
        health: {distance_to_facility, num_facilities}
    } = regionInsights;

    return (
    <>
        <header className='w-full p-2 bg-gray-200'>
            <p className="text-sm text-gray-500">Summary for</p>
            <h2 className='border-b border-theme-primary pb-2 capitalize font-bold text-lg flex items-center justify-between'>
                <span>{normalizeRegionName(selectedRegion)} Region</span>
                <IoMdClose title='Click to close section' onClick={() => setSelectedRegion(null)} size={25} className='mx-2 bg-theme-secondary hover:bg-theme-primary duration-100 hover:text-theme-secondary' />
            </h2>

            <hr />

            <div className="flex gap-4 pt-2">
                <div className={`w-20 h-20 rounded aspect-square bg-theme-primary flex flex-col gap-2 items-center justify-center`}>
                    <p className='text-xs text-gray-300'><span className='text-2xl font-bold text-gray-50'>{Number(scoreInfo.ovrScore).toFixed(0)}</span> /100</p>
                    <span className='text-sm text-gray-200 font-medium'>OVR</span>
                </div>
                <div>
                    <h5 className="underline font-medium capitalize">{grade}</h5>
                    <p className='text-sm'>{insight}</p>
                    <Link onClick={() => document.querySelector('#regionalAnalysis').showModal()} className='bg-theme-secondary block w-max px-2 py-1 rounded mt-2'>Detailed Analysis</Link>
                </div>
            </div>
        </header>
        <section className='relative w-full p-1 mt-4'>
            <h3 className="underline text-lg mb-2 font-semibold">Indicators</h3>

            <div className="collapse mb-2 collapse-arrow rounded">
                <input type="radio" name="indicator-accordion" defaultChecked />
                <div className="collapse-title flex items-center text-xl font-medium p-2 bg-theme-primary text-gray-50">Population</div>
                <div className="collapse-content p-1 border shadow bg-gray-100">
                    <div className="flex justify-between">
                        <p className='text-sm w-1/2'>Total: <span className="font-semibold text-lg">{Number(total).toLocaleString()}</span></p>
                        <p className='text-sm flex-1'>Land area: <span className="font-semibold text-lg">{Number(land_area).toLocaleString()}</span> km <sup>2</sup></p>
                    </div>
                    <div className="flex flex-wrap mt-2 justify-between">
                        <div className='text-sm w-1/2 flex flex-col gap-2'>
                            <span className='underline'>Urbanization level</span>
                            <p className='text-sm italic'>Recommended: <span className='text-base font-semibold not-italic'>60%</span></p>
                            <div className="radial-progress text-theme-primary font-semibold text-xl" style={{ "--value": Number((urban/total) * 100).toFixed(2), "--size": "7rem" }} role="progressbar">
                            {Number(((urban/total) * 100)).toFixed(2)}%
                            </div>
                        </div>
                        <div className='text-sm w-1/2 flex flex-col gap-2'>
                            <span className='underline'>Population Density Score</span>
                            <p className='text-sm italic'>Recommended: <span className='text-base font-semibold not-italic'>70%</span></p>
                            <div className="radial-progress text-theme-primary font-semibold text-xl" style={{ "--value": Number((urban/total) * 100).toFixed(2), "--size": "7rem" }} role="progressbar">
                            {Number(((urban/total) * 100)).toFixed(2)}%
                            </div>
                        </div>
                        <div className='text-sm w-1/2 flex flex-col gap-2'>
                            <span className='underline'>Dependency Ratio Score</span>
                            <p className='text-sm italic'>Recommended: <span className='text-base font-semibold not-italic'>60%</span></p>
                            <div className="radial-progress text-theme-primary font-semibold text-xl" style={{ "--value": Number((urban/total) * 100).toFixed(2), "--size": "7rem" }} role="progressbar">
                            {Number(((urban/total) * 100)).toFixed(2)}%
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="collapse mb-2 collapse-arrow rounded">
                <input type="radio" name="indicator-accordion" />
                <div className="collapse-title flex items-center text-xl font-medium p-2 bg-theme-primary text-gray-50">Jobs & Economy</div>
                <div className="collapse-content p-1 bg-gray-100">
                    <div className="flex items-center justify-between">
                        <p className='text-sm w-1/2'>Unemployment Rate: <span className="font-semibold text-lg">{unemployment_rate}%</span></p>
                    </div>
                    <div className="flex flex-wrap mt-2 justify-between">
                        <div className='text-sm w-1/2 flex flex-col gap-2'>
                            <span className='underline'>Unemployment Score</span>
                            <p className='text-sm italic'>Recommended: <span className='text-base font-semibold not-italic'>90%</span></p>
                            <div className="radial-progress text-theme-primary font-semibold text-xl" style={{ "--value": Number(jobScore.breakdown.unemployment_score_percent).toFixed(2), "--size": "7rem" }} role="progressbar">
                            {Number(jobScore.breakdown.unemployment_score_percent).toFixed(2)}%
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="collapse mb-2 collapse-arrow rounded">
                <input type="radio" name="indicator-accordion" />
                <div className="collapse-title flex items-center text-xl font-medium p-2 bg-theme-primary text-gray-50">Health</div>
                <div className="collapse-content p-1 bg-gray-100">
                    <div className="flex items-center justify-between">
                        <p className='text-sm w-1/2'>Avg Distance: <span className="font-semibold text-lg">{Number(distance_to_facility).toLocaleString()}</span> km</p>
                        <p className='text-sm flex-1'>Total Facilities: <span className="font-semibold text-lg">{Number(num_facilities).toFixed(0)}</span></p>
                    </div>
                    <div className="flex flex-wrap mt-2 justify-between">
                        <div className='text-sm w-1/2 flex flex-col gap-2'>
                            <span className='underline'>Average Distance Score</span>
                            <p className='text-sm italic'>Recommended: <span className='text-base font-semibold not-italic'>80%</span></p>
                            <div className="radial-progress text-theme-primary font-semibold text-xl" style={{ "--value": Number(healthScore.breakdown.distance_score_percent).toFixed(2), "--size": "7rem" }} role="progressbar">
                            {Number(healthScore.breakdown.distance_score_percent).toFixed(2)}%
                            </div>
                        </div>
                        <div className='text-sm w-1/2 flex flex-col gap-2'>
                            <span className='underline'>Facility / Population Score</span>
                            <p className='text-sm italic'>Recommended: <span className='text-base font-semibold not-italic'>70%</span></p>
                            <div className="radial-progress text-theme-primary font-semibold text-xl" style={{ "--value": Number(healthScore.breakdown.facilitesPer10k_score_percent).toFixed(2), "--size": "7rem" }} role="progressbar">
                            {Number(healthScore.breakdown.facilitesPer10k_score_percent).toFixed(2)}%
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="collapse mb-2 collapse-arrow rounded">
                <input type="radio" name="indicator-accordion" />
                <div className="collapse-title flex items-center text-xl font-medium p-2 bg-theme-primary text-gray-50">Security - N/A</div>
                <div className="collapse-content p-1 bg-gray-100">
                    <div className="flex items-center justify-between">
                        <p className='text-sm w-1/2 p-1'>Data not available now</p>
                    </div>
                </div>
            </div>
            <div className="collapse mb-2 collapse-arrow rounded">
                <input type="radio" name="indicator-accordion" />
                <div className="collapse-title flex items-center text-xl font-medium p-2 bg-theme-primary text-gray-50">Education - N/A</div>
                <div className="collapse-content p-1 bg-gray-100">
                    <div className="flex items-center justify-between">
                        <p className='text-sm w-1/2 p-1'>Data not available now</p>
                    </div>
                </div>
            </div>
        </section>

        <RegionalMoreAnalysis regionInsights={regionInsights} />
    </>
    )
}

export default RegionInsights


// Show grade for main sus indicators
// Show grades in sub sus indicators
// Compare against int'l benchmarks to paint clear picture
// Compare against int'l benchmarks to paint clear picture
// Link to section / page for more breakdowns into raw data used for calculations