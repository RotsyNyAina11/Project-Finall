import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Enregistrez les composants de Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Interface pour les données du produit
interface Product {
  name: string;
  stockQuantity: number;
}

// Props du composant
interface ProductStockChartProps {
  products: Product[];
}

const ProductStockChart: React.FC<ProductStockChartProps> = ({ products }) => {
  // Préparez les labels et données pour le graphique
  const productNames = products.map((product) => product.name);
  const stockQuantities = products.map((product) => product.stockQuantity);

  const data = {
    labels: productNames, // Les noms des produits
    datasets: [
      {
        label: 'Quantité en stock',
        data: stockQuantities, // Quantités correspondantes
        backgroundColor: 'rgba(75, 192, 192, 0.5)', // Couleur des barres
        borderColor: 'rgba(75, 192, 192, 1)', // Couleur des bordures
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Quantité des stocks par produit',
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default ProductStockChart;
