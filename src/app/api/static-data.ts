interface SampleData {
  id: number;
  name: string;
}

const sampleData: SampleData[] = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Alice Johnson' },
];

const data = (req: any, res: any) => {
  res.status(200).json(sampleData);
};

export default data;
