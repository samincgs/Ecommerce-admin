'use client';

import { Plus } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';

import Heading from '@/components/ui/heading';
import ApiList from '@/components/ui/api-list';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ProductColumn, columns } from './columns';
import { DataTable } from '@/components/ui/data-table';

interface ProductClientProps {
  data: ProductColumn[];
}

const ProductClient: React.FC<ProductClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  const pushToNewProduct = () => {
    router.push(`/${params.storeId}/products/new`);
  };

  return (
    <>
      <div className='flex items-center justify-between'>
        <Heading
          title={`Products (${data.length})`}
          description='Manage products for your store'
        />
        <Button onClick={pushToNewProduct}>
          <Plus className='w-4 h-4 mr-2' />
          Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey='name' columns={columns} data={data} />
      <Heading title='API' description='API calls for Products' />
      <Separator />
      <ApiList entityName='products' entityIdName='productId' />
    </>
  );
};
export default ProductClient;
