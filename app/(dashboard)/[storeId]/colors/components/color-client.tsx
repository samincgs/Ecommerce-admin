'use client';

import { Plus } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';

import Heading from '@/components/ui/heading';
import ApiList from '@/components/ui/api-list';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ColorColumn, columns } from './columns';
import { DataTable } from '@/components/ui/data-table';

interface ColorsClientProps {
  data: ColorColumn[];
}

const ColorsClient: React.FC<ColorsClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  const pushToNewBillboard = () => {
    router.push(`/${params.storeId}/colors/new`);
  };

  return (
    <>
      <div className='flex items-center justify-between'>
        <Heading
          title={`Colors (${data.length})`}
          description='Manage colors for your store'
        />
        <Button onClick={pushToNewBillboard}>
          <Plus className='w-4 h-4 mr-2' />
          Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey='name' columns={columns} data={data} />
      <Heading title='API' description='API calls for Colors' />
      <Separator />
      <ApiList entityName='colors' entityIdName='colorId' />
    </>
  );
};
export default ColorsClient;
