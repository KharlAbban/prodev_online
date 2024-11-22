import React from 'react'
import { DistrictInsights, DistrictMap, ScoreInfo } from '../components'
import { useQuery } from '@tanstack/react-query';
import { getAllRegionsScores } from '../lib/scoreFetchers';
import {HashLoader} from "react-spinners"
import { useDistrictContext } from '../contexts/DistrictProvider';
import { useRegionContext } from '../contexts/RegionProvider';

const SharedDistrictsDashboardPage = () => {
  const {selectedDistrict} = useDistrictContext();
  const {selectedRegion, setSelectedRegion} = useRegionContext();

  if (selectedRegion) setSelectedRegion(null);

  const {data: all_regions_scores, isLoading: allScoresLoading, isError: isAllScoresError, error: allScoresError} = useQuery({
    queryKey: ["all_regions_scores_query"],
    queryFn: getAllRegionsScores
  });

  if (allScoresLoading) return <div className='flex-1 flex justify-center items-center flex-col gap-2'><HashLoader /><p className='font-semibold text-lg'>Loading data...</p></div>;

  return (
        <div className='flex-1 overflow-hidden flex max-md:flex-col-reverse'>
          
          <aside className="w-1/3 max-md:h-1/3 p-2 no-scrollbar overflow-y-scroll max-md:w-full">
            {selectedDistrict ? <DistrictInsights scoreInfo={all_regions_scores[selectedRegion]} /> : <ScoreInfo /> }
          </aside>

          <DistrictMap regionalScores={all_regions_scores} />
          
        </div>
  )
}

export default SharedDistrictsDashboardPage