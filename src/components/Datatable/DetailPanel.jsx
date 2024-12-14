import React from 'react';
import { Clock, TrendingUp, MapPin } from 'lucide-react';

export function DetailPanel({ details }) {
  const percent = (details?.[`num.backers`] / 1000000) * 100;
  return (
    <div className='px-6 py-4 bg-gray-50'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <div className='space-y-2'>
          <div className='flex items-center text-sm text-gray-600'>
            <Clock className='w-4 h-4 mr-2' />
            Last Updated: {details?.[`end.time`]}
          </div>
          <p className='text-sm text-gray-600'>{details?.title}</p>
          <p className='text-sm text-gray-600'>{details?.by}</p>
        </div>

        <div className='space-y-2'>
          <div className='flex items-center text-sm text-gray-600'>
            <TrendingUp className='w-4 h-4 mr-2' />
            Performance: {details?.[`num.backers`]}%
          </div>
          <div className='w-full h-2 bg-gray-200 rounded-full'>
            <div
              className='h-full bg-blue-500 rounded-full'
              style={{
                width: `${percent}%`,
              }}
            />
          </div>
        </div>

        <div className='space-y-2'>
          <div className='flex items-center text-sm text-gray-600'>
            <MapPin className='w-4 h-4 mr-2' />
            Location Details
          </div>
          <div className='space-y-1'>
            <div className='flex flex-col gap-[2px] items-center justify-between text-sm'>
              <div className='flex w-full justify-between'>
                <span className='text-gray-600  w-16'>Country</span>
                <span className='font-medium w-[70%] text-gray-900'>
                  {details.country}
                </span>
              </div>
              <div className='flex w-full justify-between'>
                <span className='text-gray-600 w-16'>Location</span>
                <span className='font-medium w-[70%] text-gray-900'>
                  {details.location}
                </span>
              </div>
              <div className='flex w-full justify-between'>
                <span className='text-gray-600 w-16'>Type</span>
                <span className='font-medium w-[70%] text-gray-900'>
                  {details.type}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
