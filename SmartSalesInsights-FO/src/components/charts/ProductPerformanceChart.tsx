import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';

// Enregistrez les composants nécessaires pour les graphiques circulaires
ChartJS.register(ArcElement, Tooltip, Legend, Title);

// Interface pour les données du produit
interface Product {
  name: string;
  stockQuantity: number;
}

// Props du composant
interface ProductPerformanceProps {
  products: Product[];
}

const ProductPerformanceChart: React.FC<ProductPerformanceProps> = ({ products }) => {
  // Préparez les labels et données pour le graphique
  const productNames = products.map((product) => product.name);
  const stockQuantities = products.map((product) => product.stockQuantity);

  const data = {
    labels: productNames, // Les noms des produits
    datasets: [
      {
        label: 'Quantité en stock',
        data: stockQuantities, // Quantités correspondantes
        backgroundColor: ['rgba(75, 192, 192, 0.5)', 'rgba(255, 99, 132, 0.5)', 'rgba(53, 162, 235, 0.5)'], // Couleurs pour chaque segment
        borderColor: ['rgba(75, 192, 192, 1)', 'rgba(255, 99, 132, 1)', 'rgba(53, 162, 235, 1)'], // Bordures des segments
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          font: {
            size: 8, // Taille des labels de la légende
          },
        },
      },
      title: {
        display: true,
        text: 'Répartition des stocks par produit (Graphique en donut)',
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default ProductPerformanceChart;
