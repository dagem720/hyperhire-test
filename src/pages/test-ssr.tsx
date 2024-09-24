interface PageProps {
  responseData: SampleData[];
}

interface SampleData {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}
export async function getServerSideProps() {
  const response = await fetch('http://localhost:3000/api/test-ssr');
  const responseData = await response.json(); // Extract JSON data from the response
  return {
    props: {
      responseData,
    },
  };
}

export default function Page({ responseData }: PageProps) {
  return (
    <div>
      <h1>Response</h1>
      <pre>{JSON.stringify(responseData, null, 2)}</pre>{' '}
    </div>
  );
}
