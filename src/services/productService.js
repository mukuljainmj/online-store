import mockProducts from "../mock-data/mockProducts";

export const getProducts = () => {
  // In real application, we would fetch products from an API.
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ json: () => Promise.resolve(mockProducts) });
    }, 1000);
  });
};
