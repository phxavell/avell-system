'use client'; // Marca este componente como um Client Component
import { useState } from 'react'; // Importe o useState
import styles from './Dashboard.module.css';
import { FaCogs, FaBoxes, FaCheckCircle, FaClipboard, FaSearch, FaChartLine, FaCheck } from 'react-icons/fa'; // Ícones para o dashboard

export default function Dashboard() {
  // Estado para controlar qual card está expandido
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  // Função para alternar a expansão do card
  const toggleCard = (cardName: string) => {
    if (expandedCard === cardName) {
      // Se o card já está expandido, recolhe
      setExpandedCard(null);
    } else {
      // Caso contrário, expande o card clicado
      setExpandedCard(cardName);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.dashboardTitle}>Dashboard</h1>
      <div className={styles.grid}>
        {/* Card de Processos Fabris */}
        <div
          className={`${styles.card} ${expandedCard === 'processos' ? styles.expanded : ''}`}
          onClick={() => toggleCard('processos')}
        >
          <FaCogs size={40} className={styles.icon} />
          <h2>Processos Fabris</h2>
          <p>Gerencie os processos de fabricação de notebooks.</p>
          {/* Opções expandidas */}
          {expandedCard === 'processos' && (
            <div className={styles.options}>
              <p><FaCheck size={20} /> Montagem</p>
              <p><FaClipboard size={20} /> Imagem</p>
              <p><FaCheckCircle size={20} /> Teste</p>
              <p><FaChartLine size={20} /> Revisão</p>
            </div>
          )}
        </div>

        {/* Card de Estoque */}
        <div
          className={`${styles.card} ${expandedCard === 'estoque' ? styles.expanded : ''}`}
          onClick={() => toggleCard('estoque')}
        >
          <FaBoxes size={40} className={styles.icon} />
          <h2>Estoque</h2>
          <p>Controle o estoque de peças e produtos.</p>
          {/* Opções expandidas */}
          {expandedCard === 'estoque' && (
            <div className={styles.options}>
              <p><FaClipboard size={20} /> Entrada de Materiais</p>
              <p><FaBoxes size={20} /> Saída de Materiais</p>
              <p><FaChartLine size={20} /> Inventário</p>
            </div>
          )}
        </div>

        {/* Card de Controle de Qualidade */}
        <div
          className={`${styles.card} ${expandedCard === 'qualidade' ? styles.expanded : ''}`}
          onClick={() => toggleCard('qualidade')}
        >
          <FaCheckCircle size={40} className={styles.icon} />
          <h2>Controle de Qualidade</h2>
          <p>Monitore a qualidade dos produtos fabricados.</p>
          {/* Opções expandidas */}
          {expandedCard === 'qualidade' && (
            <div className={styles.options}>
              <p><FaSearch size={20} /> Inspeção</p>
              <p><FaCheckCircle size={20} /> Testes de Qualidade</p>
              <p><FaChartLine size={20} /> Relatórios</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
