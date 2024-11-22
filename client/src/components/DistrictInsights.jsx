import React from 'react'
import { useRegionContext } from '../contexts/RegionProvider';
import { useQuery } from '@tanstack/react-query';
import { getRegionInsights, normalizeRegionName } from '../lib/regionInsights';
import {IoMdClose} from "react-icons/io"
import { getOvrScoreInsights } from '../lib/scoreLegend';

const DistrictInsights = ({scoreInfo}) => {
    const {selectedRegion, setSelectedRegion} = useRegionContext();

    const {color} = getOvrScoreInsights(scoreInfo.ovrScore);

    const {data: regionInsights, isLoading: insightsLoading, isError: isInsightsError, error: insightsError} = useQuery({
        queryKey: ["region_insights_query", { selectedRegion }],
        queryFn: () => getRegionInsights(selectedRegion),
        enabled: !!selectedRegion
    });

    if (insightsLoading) return "Loading region data ...";

    const {
        population: {total, age_group, urban, rural, land_area},
        jobs: {unemployment_rate, employment_sector_distribution},
        health: {distance_to_facility, num_facilities, facility_breakdown, maternity_homes}
    } = regionInsights;

    const employedPop = Number(((100 - unemployment_rate) / 100) * total).toFixed(0);

    return (
    <>
        <header className='w-full p-2 bg-gray-200'>
            <p className="text-sm text-gray-500">Insights for</p>
            <h2 className='border-b border-theme-primary pb-2 capitalize font-bold text-lg flex items-center justify-between'>
                <span>{normalizeRegionName(selectedRegion)} Region</span>
                <IoMdClose title='Click to close section' onClick={() => setSelectedRegion(null)} size={25} className='mx-2 bg-theme-secondary hover:bg-theme-primary duration-100 hover:text-theme-secondary' />
            </h2>

            <hr className='mb-4' />

            <p className="text-sm text-gray-500">Score Info</p>
            <div className="flex gap-4 pt-2">
                <div className={`w-20 h-20 rounded aspect-square bg-theme-primary flex flex-col gap-2 items-center justify-center`}>
                    <p className='text-xs text-gray-300'><span className='text-2xl font-bold text-gray-50'>{Number(scoreInfo.ovrScore * 100).toFixed(0)}</span> /100</p>
                    <span className='text-sm text-gray-200 font-medium'>OVR</span>
                </div>
                <div>
                    <h5 className="underline font-medium">Description</h5>
                    <p className='text-sm'>Sustainability is moderate. Issues in one or more indicators could impact the region's overall stability and quality of life.</p>
                </div>
            </div>
        </header>
        <section className='relative w-full p-1 mt-4'>
            <h3 className="underline text-lg mb-2 font-semibold">Indicators</h3>

            <div className="collapse mb-2 collapse-arrow rounded">
                <input type="radio" name="indicator-accordion" defaultChecked />
                <div className="collapse-title flex items-center text-xl font-medium p-2 bg-theme-primary text-gray-50">Population</div>
                <div className="collapse-content p-1 border shadow bg-gray-100">
                    <div className="flex items-center justify-between">
                        <p className='text-sm w-1/2'>Total: <span className="font-semibold text-lg">{Number(total).toLocaleString()}</span></p>
                        <p className='text-sm flex-1'>Land area: <span className="font-semibold text-lg">{Number(land_area).toLocaleString()}</span> km <sup>2</sup></p>
                    </div>
                    <div className="flex mt-2 justify-between">
                        <div className='text-sm w-1/2 flex flex-col gap-2'>
                            <span className='underline'>Urbanization level</span>
                            <p className='text-sm italic'>Recommended: <span className='text-base font-semibold not-italic'>60%</span></p>
                            <div className="radial-progress text-theme-primary font-semibold text-xl" style={{ "--value": Number((urban/total) * 100).toFixed(2), "--size": "7rem" }} role="progressbar">
                            {Number(((urban/total) * 100)).toFixed(2)}%
                            </div>
                        </div>
                        <div className='text-sm flex-1 flex flex-col gap-2'>
                            <span className='underline'>By age group</span>
                            <span>
                                Child (0 - 14): <progress className='w-full bg-theme-secondary rounded h-3' max={total} value={age_group.child}>{(age_group.child) * 100}%</progress>
                                Youth / Adult (15 - 64): <progress className='w-full bg-theme-secondary rounded h-3' max={total} value={age_group.youth_adult}>{(age_group.youth_adult) * 100}%</progress>
                                Elderly (65+): <progress className='w-full bg-theme-secondary rounded h-3' max={total} value={age_group.elderly}>{(age_group.elderly) * 100}%</progress>
                            </span>
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
                    <div className="flex mt-2 justify-between w-4/5">
                        <div className='text-sm flex-1 flex flex-col gap-2'>
                            <span className='underline'>Employment Distribution by Sector</span>
                            <span>
                                Public: <progress className='w-full bg-theme-secondary rounded h-3' max={employedPop} value={employment_sector_distribution.public}></progress>
                                Semi-public: <progress className='w-full bg-theme-secondary rounded h-3' max={employedPop} value={employment_sector_distribution.semi_public}></progress>
                                Private formal: <progress className='w-full bg-theme-secondary rounded h-3' max={employedPop} value={employment_sector_distribution.private_formal}></progress>
                                Private Informal: <progress className='w-full bg-theme-secondary rounded h-3' max={employedPop} value={employment_sector_distribution.private_informal}></progress>
                                Local NGO/CSO: <progress className='w-full bg-theme-secondary rounded h-3' max={employedPop} value={employment_sector_distribution.local_ngo_cso}></progress>
                                Int'l NGO/CSO: <progress className='w-full bg-theme-secondary rounded h-3' max={employedPop} value={employment_sector_distribution.intl_ngo_cso}></progress>
                                Religious Org Local: <progress className='w-full bg-theme-secondary rounded h-3' max={employedPop} value={employment_sector_distribution.religious_org_local}></progress>
                                Religious Org Int'l: <progress className='w-full bg-theme-secondary rounded h-3' max={employedPop} value={employment_sector_distribution.religious_org_intl}></progress>
                                Int'l Org: <progress className='w-full bg-theme-secondary rounded h-3' max={employedPop} value={employment_sector_distribution.intl_org}></progress>
                            </span>
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
                    <p className='text-sm flex-1'>Maternity Homes: <span className="font-semibold text-lg">{Number(maternity_homes).toFixed(0)}</span></p>
                    <div className="flex mt-2 justify-between">
                        <div className='text-sm w-1/2 flex flex-col gap-2'>
                            <span className='underline'>Urbanization level</span>
                            <p className='text-sm italic'>Recommended: <span className='text-base font-semibold not-italic'>60%</span></p>
                            <div className="radial-progress text-theme-primary font-semibold text-xl" style={{ "--value": Number((urban/total) * 100).toFixed(), "--size": "7rem" }} role="progressbar">
                            {Number(((urban/total) * 100)).toFixed(2)}%
                            </div>
                        </div>
                        <div className='text-sm flex-1 flex flex-col gap-2'>
                            <span className='underline'>By age group</span>
                            <span>
                                Child (0 - 14): <progress className='w-full bg-theme-secondary rounded h-3' max={total} value={age_group.child}>{(age_group.child) * 100}%</progress>
                                Youth / Adult (15 - 64): <progress className='w-full bg-theme-secondary rounded h-3' max={total} value={age_group.youth_adult}>{(age_group.youth_adult) * 100}%</progress>
                                Elderly (65+): <progress className='w-full bg-theme-secondary rounded h-3' max={total} value={age_group.elderly}>{(age_group.elderly) * 100}%</progress>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    </>
    )
}

export default DistrictInsights