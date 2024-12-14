import React, { Fragment, useState } from 'react';
import { ExpandButton } from '../ExpandButton/ExpandButton';
import { formatCurrency, generateRandomColor } from '../../utils/utils';
import { DetailPanel } from './DetailPanel';

export const TableBody = ({ data }) => {
  const [isExpanded, setIsExpanded] = useState({});
  return (
    <tbody>
      {data?.map((rowData, i) => {
        console.log({ rowData });
        const percent = Number(rowData?.[`percentage.funded`]) / 2;
        const currencyFormat = formatCurrency(
          rowData?.[`amt.pledged`],
          rowData?.[`currency`]
        );
        return (
          <Fragment key={i}>
            <tr className='bg-white  text-gray-600  border border-[#e2e2e2]'>
              <td className={`px-5 py-3 w-1 text-center`}>
                {' '}
                <ExpandButton
                  isExpanded={isExpanded?.[`${i}_${rowData?.[`amt.pledged`]}`]}
                  onClick={() =>
                    setIsExpanded({
                      ...isExpanded,
                      [`${i}_${rowData?.[`amt.pledged`]}`]:
                        !isExpanded?.[`${i}_${rowData?.[`amt.pledged`]}`],
                    })
                  }
                />
              </td>
              <td className={`px-5 py-3 flex items-center gap-2 w-full`}>
                <div class='relative h-2 w-[90%] bg-gray-200 rounded-full overflow-hidden'>
                  <div
                    class='absolute top-0 left-0 h-full rounded-full transition-all duration-500 ease-in-out'
                    style={{
                      width: `${percent}%`,
                      background: generateRandomColor(),
                    }}
                  ></div>
                </div>
                <div>{rowData?.[`percentage.funded`]}%</div>
              </td>
              <td className={`px-5 py-3 w-11 text-center`}>{currencyFormat}</td>
            </tr>
            {isExpanded?.[`${i}_${rowData?.[`amt.pledged`]}`] && (
              <tr class='bg-gray-50'>
                <td colspan='4' class='px-4 py-2 border border-gray-300'>
                  <div className='transform-gpu transition-all duration-300 ease-in-out'>
                    <DetailPanel details={rowData} />
                  </div>
                </td>
              </tr>
            )}
          </Fragment>
        );
      })}
    </tbody>
  );
};
