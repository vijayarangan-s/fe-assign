import { Layout } from './components/Layout/Layout';
import './App.css';
import { Datatable } from './components/Datatable/Datatable';
import { usePaginatedData } from './hooks/usePaginationData';

function App() {
  const { currentData, currentPage, totalPages, setCurrentPage, loading } =
    usePaginatedData(
      'https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json',
      5
    );

  const Heading = () => {
    return (
      <div className='px-2 py-1'>
        <h1 className='text-2xl font-bold text-gray-900'>Fund Details</h1>
        <p className='text-gray-500'>
          Overview of current fund statistics and performance
        </p>
      </div>
    );
  };
  return (
    <Layout className='h-screen bg-blue-800 flex justify-center flex-col items-center'>
      <h1 className='text-3xl text-white font-extrabold relative py-5'>
        Frontend Assignment
      </h1>
      <Datatable
        data={currentData}
        header={Heading()}
        columns={['#', 'Percentage funded', 'Amount pledged']}
        pagination={true}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </Layout>
  );
}

export default App;
