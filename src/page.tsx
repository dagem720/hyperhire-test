export async function getServerSideProps() {
  const response = await Promise.all([
    fetch('http://localhost:3000').then((res) => res.json()),
  ]);
  console.log(response);
  return {
    props: {
      response,
    },
  };
}
export default function Page({ response }) {
  return (
    <div>
      <h1>Response</h1>
      <pre>{JSON.stringify(response, null, 2)}</pre>
    </div>
  );
}
