'use client';

import { Plus } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';

import Heading from '@/components/ui/heading';
import ApiList from '@/components/ui/api-list';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { CategoryColumn, columns } from '../components/columns';
import { DataTable } from '@/components/ui/data-table';

interface CategoryClientProps {
  data: CategoryColumn[];
}

const CategoryClient: React.FC<CategoryClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  const pushToNewBillboard = () => {
    router.push(`/${params.storeId}/categories/new`);
  };

  return (
    <>
      <div className='flex items-center justify-between'>
        <Heading
          title={`Categories (${data.length})`}
          description='Manage categories for your store'
        />
        <Button onClick={pushToNewBillboard}>
          <Plus className='w-4 h-4 mr-2' />
          Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey='name' columns={columns} data={data} />
      <Heading title='API' description='API calls for categories' />
      <Separator />
      <ApiList entityName='categories' entityIdName='categoryId' />
    </>
  );
};
export default CategoryClient;
