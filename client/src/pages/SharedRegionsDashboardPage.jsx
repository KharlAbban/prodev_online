import React from 'react'
import { RegionalMap, RegionInsights, ScoreInfo } from '../components'
import { useQuery } from '@tanstack/react-query';
import { getAllRegionsScores } from '../lib/scoreFetchers';
import { useRegionContext } from '../contexts/RegionProvider';
import {HashLoader} from "react-spinners"

const SharedRegionsDashboardPage = () => {
  const {selectedRegion} = useRegionContext();

  const {data: all_regions_scores, isLoading: allScoresLoading, isError: isAllScoresError, error: allScoresError} = useQuery({
    queryKey: ["all_regions_scores_query"],
    queryFn: getAllRegionsScores
  });

  if (allScoresLoading) return <div className='flex-1 flex justify-center items-center flex-col gap-2'><HashLoader /><p className='font-semibold text-lg'>Loading data...</p></div>;

  if (isAllScoresError) throw new Error(isAllScoresError);

  return (
        <div className='flex-1 relative overflow-hidden flex max-md:flex-col-reverse'>

          <aside className="w-1/3 max-md:h-1/3 p-2 no-scrollbar overflow-y-scroll max-md:w-full">
            {selectedRegion ? <RegionInsights scoreInfo={all_regions_scores[selectedRegion]} /> : <ScoreInfo /> }
          </aside>

          <RegionalMap regionalScores={all_regions_scores} />

          
        </div>
  )
}

export default SharedRegionsDashboardPage