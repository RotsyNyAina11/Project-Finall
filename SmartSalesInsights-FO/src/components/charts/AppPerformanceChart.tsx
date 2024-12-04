import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Enregistrez les composants nécessaires pour les graphiques linéaires
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Title
);

// Interface pour les données du produit
interface Product {
  name: string;
  stockQuantity: number;
}

// Props du composant
interface ProductPerformanceProps {
  products: Product[];
}

const AppPerformanceChart: React.FC<ProductPerformanceProps> = ({ products }) => {
  // Préparez les labels (ici les noms des produits) et données (quantités en stock)
  const productNames = products.map((product) => product.name);
  const stockQuantities = products.map((product) => product.stockQuantity);

  const data = {
    labels: productNames, // Les noms des produits comme labels sur l'axe X
    datasets: [
      {
        label: 'Quantité en stock',
        data: stockQuantities, // Quantités en stock sur l'axe Y
        borderColor: 'rgba(75, 192, 192, 1)', // Couleur de la ligne
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // Couleur de l'arrière-plan sous la ligne
        borderWidth: 2,
        fill: true, // Remplissage sous la ligne
        tension: 0.4, // Courbure de la ligne
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          font: {
            size: 10, // Taille des labels de la légende
          },
        },
      },
      title: {
        display: true,
        text: 'Performance des stocks (Graphique en ligne)',
      },
    },
    scales: {
      x: {
        beginAtZero: true, // Commence l'axe X à zéro
      },
      y: {
        beginAtZero: true, // Commence l'axe Y à zéro
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default AppPerformanceChart;
