const fetchData = async (req: any, res: any) => {
  const response = await Promise.all([
    fetch('https://api.example.com/data1').then((res) => res.json()),
    fetch('https://api.example.com/data2').then((res) => res.json()),
  ]);

  const [data1, data2] = response;

  res.status(200).json({ data1, data2 });
};

export default fetchData;
