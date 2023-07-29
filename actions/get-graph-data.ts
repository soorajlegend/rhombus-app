
export interface GraphData {
  name: string;
  weight: number;
}

export const getGraphData = async (items: GraphData[]) => {
  const products: { [key: string]: number } = {};

  for (const item of items) {
    const name = item.name;
    products[name] = (products[name] || 0) + item.weight;
  }

  const graphData: GraphData[] = [];

  for (const item of items) {
    const name = item.name;
    const weight = products[name];

    // Check if the product name already exists in graphData
    const existingIndex = graphData.findIndex((data) => data.name === name);

    if (existingIndex !== -1) {
      // Update the weight if the product name exists in graphData
      graphData[existingIndex].weight = weight;
    } else {
      // Add a new entry to graphData if the product name is not found
      graphData.push({ name, weight });
    }
  }

  return graphData;
};
